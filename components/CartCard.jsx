import React from "react";
import Image from "next/image";

const CartCard = ({
  id,
  name,
  catalogue,
  category,
  wood,
  finishing,
  seat,
  quantity,
  toggleModal,
}) => {
  return (
    <div className="flex gap-3">
      <Image
        className="outline outline-2 outline-tertiary-grey"
        src={`/assets/images/${catalogue}/products/${id}.jpg`}
        width={85}
        height={85}
        alt="cart item img"
      ></Image>
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col justify-between">
          <a href={`/catalogue/${catalogue}/${id}?category=${catalogue}`}>
            <p className="text-base underline underline-1">{name}</p>
            <p className="text-xs">{category}</p>
          </a>
          <div className="flex gap-2 text-xs">
            <p className="bg-black text-white px-2 py-1">{wood}</p>
            <p className="bg-black text-white px-2 py-1">{finishing}</p>
            <p className="bg-black text-white px-2 py-1">{seat}</p>
          </div>
        </div>
        <div className="flex flex-col text-sm text-right justify-between items-end">
          <p>quantity : {quantity}</p>
          <Image
            onClick={() => toggleModal(id)}
            className="p-1 cursor-pointer"
            src="/assets/icons/trash.svg"
            width={22}
            height={22}
            alt="trash can"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
