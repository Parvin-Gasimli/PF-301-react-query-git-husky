import React, { useState } from 'react';
import CustomInput from '../atoms/CustomInput';
import CustomButton from '../atoms/CustomButton';
import { useFormik } from 'formik';
import { UserValidation } from '../validations/UserValidation';
import { useMutation } from '@tanstack/react-query';
import { createUserService, updateUserService } from '../services/http';
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';

const CreateUser = ({ iseEdit = false, data, handleCLoseModal }) => {
  const queryClient = useQueryClient();

  const IntialValues = {
    name: data?.name || '',
    email: data?.email || '',
  };

  const formik = useFormik({
    initialValues: IntialValues,
    validationSchema: UserValidation,
    onSubmit: async (values) => {
      await mutate.mutate(values);
      Object.keys(formik.values).forEach((key) => {
        formik.setFieldValue(key, '', false);
      });
      handleCLoseModal();
    },
  });
  const mutate = useMutation({
    mutationKey: iseEdit ? 'updateUser' : 'createUser',
    mutationFn: iseEdit
      ? (values) => updateUserService(data.id, values)
      : (values) => createUserService(values),
    onSuccess: (data) => {
      iseEdit
        ? toast.success('User updated successfully')
        : toast.success('User created successfully');
      queryClient.invalidateQueries(['users']);
    },
    onError: (error) => {
      console.log(error);
      iseEdit ? toast.error('User updated failed') : toast.error('User created failed');
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
          value={iseEdit ? data?.name : formik?.values?.name}
          name="name"
          type={'text'}
          formik={formik}
          placeholder={'Enter the name'}
        />
        <CustomInput
          name="email"
          onChange={formik.handleChange}
          value={iseEdit ? data?.email : formik?.values?.email}
          formik={formik}
          type={'email'}
          placeholder={'Enter the email'}
        />

        <CustomButton
          disabled={iseEdit && (formik.dirty ? false : true)}
          title={'Submit'}
          type={'submit'}
          loading={mutate.isPending}
        />
      </div>
    </form>
  );
};

export default CreateUser;
