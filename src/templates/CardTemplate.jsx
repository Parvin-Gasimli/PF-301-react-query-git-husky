import React from 'react';
import CustomCard from '../molekuls/CustomCard';
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { deleteUserService, getUserService } from '../services/http';
import IsLoading from '../atoms/IsLoading';
import { toast } from 'react-toastify';

const CardTemplate = () => {
  const queryClient = new QueryClient();
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
                id={item.id}
                key={index}
                name={item.name}
                email={item.email}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CardTemplate;
