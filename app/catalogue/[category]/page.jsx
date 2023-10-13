"use client";

import { React, useEffect, useState } from "react";
import { useRouter } from "next/navigation.js";
import Image from "next/image.js";
import ItemCard from "@/components/ItemCard.jsx";

const page = ({ params }) => {
  const router = useRouter();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await import(`../../../utils/${params.category}.js`);
      setData(res.data);
    };
    fetchData();
  }, []);

  if (!data.desc)
    return (
      <div className="container mx-auto px-5 min-h-screen">loading...</div>
    );

  return (
    <div className="container mx-auto px-5 py-10 min-h-screen space-y-10">
      <div className="flex gap-2">
        <Image
          className="rotate-180"
          src="/assets/icons/arrow-black.svg"
          width={8}
          height={8}
          alt="arrow"
        ></Image>
        <p
          className="text-xl cursor-pointer w-fit"
          onClick={() => router.back()}
        >
          back to catalogue
        </p>
      </div>

      <Image
        src={data.img}
        width={1000}
        height={700}
        style={{ objectFit: "cover" }}
        className="lg:absolute flex right-0 -z-10 xl:w-[660px] lg:w-[410px] lg:h-fit h-[300px] w-full"
        alt="bg img"
      ></Image>

      <div className="space-y-2">
        <h1 className="text-3xl underline">{data.name}</h1>
        <h6 className="text-xl text-quarternary-grey">{data.category}</h6>
      </div>

      <div className="max-w-xl space-y-5">
        {data.desc.map((par, i) => (
          <p key={i}>{par}</p>
        ))}
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {data.products.map((product, i) => (
          <ItemCard
            key={i}
            imgSrc={product.img}
            name={product.name}
            category={product.category}
            hoverText="See Details"
            link={`/catalogue/heritage/${product.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
