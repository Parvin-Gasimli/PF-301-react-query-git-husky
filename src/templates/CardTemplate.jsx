import React, { useState } from 'react';
import CustomCard from '../molekuls/CustomCard';
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { deleteUserService, getUserByIdService, getUserService } from '../services/http';
import IsLoading from '../atoms/IsLoading';
import { toast } from 'react-toastify';
import CustomModal from '../atoms/CustomModal';
import CreateUser from './CreateUser';

const CardTemplate = () => {
  const queryClient = new QueryClient();
  const [openModal, setOpenModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [id, setId] = useState();
  const handleOpen = () => {
    setOpenModal(true);
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['users', id],
    queryFn: () => getUserByIdService(id),
    enabled: !!id,
  });
  const {
    data: userData,
    refetch,
    isError: userIsError,
    error: userError,
    isLoading: userIsLoading,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUserService,
  });

  const mutate = useMutation({
    mutationKey: 'deleteProduct',
    mutationFn: (ids) => deleteUserService(ids),
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
      refetch();

      toast.success('Product deleted successfully');
    },
  });

  const handleDelete = (idx) => {
    mutate.mutate(idx);
  };
  if (userIsError) {
    return <button className="error_dialog">{userError.message}</button>;
  }
  if (userIsLoading) {
    return <IsLoading />;
  }
  return (
    <div className="container">
      <div className="flex flex-wrap">
        {userData &&
          userData.map((item, index) => {
            return (
              <CustomCard
                handleDeleteItem={() => handleDelete(item.id)}
                OpenUpdate={() => {
                  setOpenUpdateModal(true);
                  setId(item.id);
                }}
                OpenModalDetail={() => {
                  handleOpen();
                  setId(item.id);
                }}
                id={item.id}
                data={item}
                key={index}
              />
            );
          })}
      </div>
      <CustomModal open={openModal} handleClose={() => setOpenModal(false)} setOpen={setOpenModal}>
        <div>
          {isError && <button className="error">{error.message}</button>}
          {isLoading ? (
            <IsLoading />
          ) : (
            <div>
              {data && (
                <div>
                  <h1>{data.name}</h1>
                  <h1>{data.email}</h1>
                </div>
              )}
            </div>
          )}
        </div>
      </CustomModal>
      <CustomModal
        open={openUpdateModal}
        handleClose={() => setOpenUpdateModal(false)}
        setOpen={setOpenUpdateModal}
      >
        <div>
          {isError && <button className="error">{error.message}</button>}
          {isLoading ? (
            <IsLoading />
          ) : (
            <div>
              {data && (
                <CreateUser
                  handleCLoseModal={() => setOpenUpdateModal(false)}
                  iseEdit={true}
                  data={data}
                />
              )}
            </div>
          )}
        </div>
      </CustomModal>
    </div>
  );
};

export default CardTemplate;
