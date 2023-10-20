"use client";

import { React, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation.js";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import BookForm from "@/components/BookForm";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/slices/cartSlice";

const page = ({ params }) => {
  const router = useRouter();
  const [data, setData] = useState({});
  const [description, toggleDescription] = useCycle(false, true);

  const [quantity, setQuantity] = useState(0);
  const [wood, setWood] = useState("");
  const [finishing, setFinishing] = useState("");
  const [seat, setSeat] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await import(`../../../../utils/${params.category}.js`);
      setData(res.data.products.find((product) => product.id === params.id));
    };
    fetchData();
  }, []);

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    var tempData = data;
    tempData["wood"] = wood;
    tempData["finishing"] = finishing;
    tempData["seat"] = seat;
    tempData["quantity"] = quantity;

    dispatch(addToCart(tempData));
  };

  if (!data.id)
    return (
      <div className="flex h-screen w-screen">
        <p className="self-center h-fit w-fit m-auto text-center align-middle">
          loading...
        </p>
      </div>
    );

  return (
    <div>
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
            back to products
          </p>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl underline">{data.name}</h1>
          <h6 className="text-xl text-quarternary-grey">{data.category}</h6>
        </div>

        <div className="flex gap-7 justify-between flex-wrap xl:flex-nowrap">
          <div className="max-w-3xl space-y-5">
            <Image
              className="outline outline-2 outline-tertiary-grey"
              src={`/assets/images/${data.catalogue}/products/${data.id}.jpg`}
              width={500}
              height={500}
              alt="product img"
            ></Image>
            <motion.div
              animate={description ? "animate" : "initial"}
              className="relative flex gap-2 items-center cursor-pointer"
              onClick={() => toggleDescription()}
            >
              <div
                className="relative w-4 h-4 outline outline-1 outline-black flex items-center justify-center cursor-pointer rounded-full"
                onClick={() => increaseQuantity()}
              >
                <div className="w-2 h-0.5 bg-black m-auto"></div>
                <motion.div
                  variants={{
                    animate: { rotate: 90, y: 0 },
                    initial: { rotate: 0 },
                  }}
                  className="absolute w-0.5 h-2 bg-black"
                ></motion.div>
              </div>
              <p>description</p>
            </motion.div>

            <AnimatePresence>
              {description && (
                <motion.div
                  key="desc"
                  className="space-y-3"
                  variants={{
                    initial: {
                      y: "-30%",
                      transition: {
                        stiffness: 0,
                        duration: 0.2,
                      },
                      opacity: 0,
                    },
                    animate: {
                      y: 0,
                      transition: {
                        stiffness: 0,
                        duration: 0.2,
                      },
                      opacity: 1,
                    },
                  }}
                  initial="initial"
                  animate="animate"
                  exit="initial"
                >
                  <p>{data.description}</p>
                  <p>
                    <span className="font-semibold">DIMENSIONS (CM) :</span>{" "}
                    {data.dimension}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="">
            <BookForm
              quantity={quantity}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              setWood={setWood}
              setFinishing={setFinishing}
              setSeat={setSeat}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
