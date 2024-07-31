import React from 'react';
import CustomInput from '../atoms/CustomInput';
import CustomButton from '../atoms/CustomButton';
import { useFormik } from 'formik';
import { UserValidation } from '../validations/UserValidation';
import { useMutation } from '@tanstack/react-query';
import { createUserService } from '../services/http';
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';

const CreateUser = () => {
  const queryClient = useQueryClient();
  const IntialValues = {
    name: '',
    email: '',
    file: '',
  };
  const formik = useFormik({
    initialValues: IntialValues,
    validationSchema: UserValidation,
    onSubmit: async (values) => {
      mutate.mutate(values);
      Object.keys(formik.values).forEach((key) => {
        formik.setFieldValue(key, '', false);
      });
    },
  });
  const mutate = useMutation({
    mutationKey: 'createUser',
    mutationFn: (data) => createUserService(data),
    onSuccess: (data) => {
      toast.success('User created successfully');
      queryClient.invalidateQueries(['users']);
    },
    onError: (error) => {
      toast.error('Error while creating user');
    },
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit();
      }}
      className="max-w-[700px] w-full mx-auto border border-solid rounded-md p-4"
    >
      <div className="flex flex-col gap-4">
        <CustomInput
          onChange={formik.handleChange}
          value={formik.values.name}
          name="name"
          type={'text'}
          formik={formik}
          placeholder={'Enter the name'}
        />
        <CustomInput
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          formik={formik}
          type={'email'}
          placeholder={'Enter the email'}
        />
        <CustomInput
          onChange={formik.handleChange}
          value={formik.values.file}
          formik={formik}
          type="file"
          name="file"
        />
        <CustomButton
          disabled={mutate.isPending}
          title={'Submit'}
          type={'submit'}
          loading={mutate.isPending}
        />
      </div>
    </form>
  );
};

export default CreateUser;
