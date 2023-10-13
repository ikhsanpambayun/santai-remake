"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ItemCard = ({ imgSrc, name, category, link, hoverText }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className="group/item outline outline-2 outline-tertiary-grey w-fit h-fit"
    >
      <div className="relative">
        <Image
          className="xl:w-[280px] lg:w-[200px] w-[150px] z-0"
          src={imgSrc}
          width={280}
          height={400}
          alt="catalogue"
        ></Image>
        <div className="absolute w-full bottom-0 text-center mb-5 space-y-1">
          <h3 className="text-xl">{name}</h3>
          <div className="mx-auto bg-secondary-grey h-0.5 w-2/3"></div>
          <h3 className="text-quarternary-grey">{category}</h3>
        </div>
        <a
          href={link}
          className="absolute invisible top-0 group-hover/item:bg-secondary-grey group-hover/item:bg-opacity-50 group-hover/item:visible z-0 w-full h-full"
        >
          <div className="flex gap-2 m-auto w-fit h-full items-center">
            <p className="text-white text-center align-middle h-fit">
              {hoverText}
            </p>
            <Image
              className="h-fit"
              src="/assets/icons/arrow-white.svg"
              width={6}
              height={6}
              alt="arrow"
            ></Image>
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default ItemCard;
