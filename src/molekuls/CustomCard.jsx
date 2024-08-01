import React from 'react';
import ProductCategory from './ProductCategory';
import CustomButton from '../atoms/CustomButton';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdEditSquare } from 'react-icons/md';
import { IoIosInformationCircle } from 'react-icons/io';

const CustomCard = ({ data, handleDeleteItem, OpenModalDetail, OpenUpdate, detailId }) => {
  return (
    <div className="flex px-3 py-3">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{data?.name}</div>
          <p className="text-gray-700 text-base">{data?.email}</p>
        </div>
        <div className="px-6 py-4">
          <ProductCategory />
        </div>
        <div className="flex items-center">
          <CustomButton
            onClick={handleDeleteItem}
            className="bg-red-500 m-2 w-12 h-12 flex justify-center items-center"
          >
            <FaRegTrashAlt />
          </CustomButton>
          <CustomButton
            onClick={() => {
              OpenModalDetail(detailId);
            }}
            className="bg-blue-500 m-2 w-12 h-12 flex justify-center items-center"
          >
            <MdEditSquare />
          </CustomButton>
          <CustomButton
            onClick={() => {
              OpenUpdate(detailId);
            }}
            className="bg-green-500 m-2 w-12 h-12 flex justify-center items-center"
          >
            <IoIosInformationCircle />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
