"use client";

import { React, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import Modal from "./Modal";
import CartCard from "./CartCard";

const Navbar = () => {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  const [cart, toggleCart] = useState(false);
  const cartData = useSelector((state) => state.cart);
  const [cartModal, setCartModal] = useState(false);
  const [removeItemId, setRemoveItemId] = useState(0);
  const [cartAmount, setCartAmount] = useState();

  useEffect(() => {
    setCartAmount(cartData?.cartAmount);
  }, [cartData]);

  const toggleModal = (itemId) => {
    setCartModal((prev) => !prev);
    setRemoveItemId(itemId);
  };

  if (!cartData)
    return (
      <div className="container mx-auto px-5 min-h-screen">loading...</div>
    );

  return (
    <div>
      <nav className="relative bg-primary-grey w-full py-4 flex items-center overflow-visible z-50">
        <div className="container mx-auto grid grid-cols-3 px-5">
          <Link href="/" className="w-fit">
            <Image
              src="/assets/images/nav-logo.svg"
              width={105}
              height={51}
              alt="logo"
            ></Image>
          </Link>
          <div className="my-auto">
            <div className="hidden md:flex justify-between text-xl">
              <Link href="/">Home</Link>
              <Link href="/catalogue">Catalogue</Link>
              <Link href="/about">About</Link>
            </div>
          </div>
          <div className="flex my-auto ml-auto">
            <div
              className="relative cursor-pointer"
              onClick={() => toggleCart((prev) => !prev)}
            >
              <Image
                src="/assets/icons/cart.svg"
                width={21}
                height={21}
                alt="cart"
              ></Image>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary-red rounded-full outline outline-2 outline-primary-grey">
                <p className="text-xs font-semibold text-center text-white">
                  {cartAmount ? cartAmount : 0}
                </p>
              </div>
            </div>
            <motion.div
              animate={mobileNav ? "animate" : "initial"}
              onClick={() => toggleMobileNav()}
              className="md:hidden flex flex-col justify-between ml-7 my-0.5 z-50 cursor-pointer"
            >
              <motion.div
                variants={{
                  animate: { rotate: 45, y: 7.5 },
                  initial: { rotate: 0 },
                }}
                className="bg-black h-0.5 w-5"
              ></motion.div>
              <motion.div
                variants={{
                  animate: { opacity: 0 },
                  initial: { opacity: 100 },
                }}
                className="bg-black h-0.5 w-5"
              ></motion.div>
              <motion.div
                variants={{
                  animate: { rotate: -45, y: -7.5 },
                  initial: { rotate: 0 },
                }}
                className="bg-black h-0.5 w-5"
              ></motion.div>
            </motion.div>
          </div>
        </div>

        <AnimatePresence>
          {mobileNav && (
            <motion.div
              key="mobile-nav"
              variants={{
                initial: {
                  x: "100%",
                  transition: {
                    stiffness: 0,
                    duration: 0.2,
                    when: "afterChildren",
                  },
                },
                animate: {
                  x: 0,
                  transition: {
                    stiffness: 0,
                    duration: 0.2,
                    when: "beforeChildren",
                  },
                },
              }}
              initial="initial"
              animate="animate"
              exit="initial"
              className="fixed right-0 inset-y-0 md:hidden w-full bg-white flex flex-col justify-between z-40"
            >
              <motion.div
                variants={{
                  initial: { y: "25%", opacity: 0 },
                  animate: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      stiffness: 0,
                      duration: 0.2,
                    },
                  },
                }}
                className="flex flex-col px-5 py-16 text-xl gap-10"
              >
                <Link href="" className="underline underline-offset-2">
                  Home
                </Link>
                <Link href="" className="underline underline-offset-2">
                  Catalogue
                </Link>
                <Link href="" className="underline underline-offset-2">
                  About
                </Link>
              </motion.div>
              <motion.div
                variants={{
                  initial: { y: "25%", opacity: 0 },
                  animate: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      stiffness: 0,
                      duration: 0.2,
                    },
                  },
                }}
                className="flex flex-col p-5 gap-5 items-center"
              >
                <div className="bg-black h-0.5 w-full"></div>
                <Image
                  src="/assets/images/nav-logo.svg"
                  width={105}
                  height={51}
                  alt="logo"
                ></Image>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {cart && (
          <motion.div
            key="cart"
            variants={{
              initial: {
                x: "100%",
                transition: {
                  stiffness: 0,
                  duration: 0.2,
                },
              },
              animate: {
                x: 0,
                transition: {
                  stiffness: 0,
                  duration: 0.2,
                },
              },
            }}
            initial="initial"
            animate="animate"
            exit="initial"
            className="fixed right-0 inset-y-0 w-full bg-white flex flex-col justify-between z-10 max-w-xl shadow-xl"
          >
            <div className="mt-28 mx-5 text-lg">
              <div className="flex flex-col gap-4">
                <p>Your Cart</p>
                {cartData?.cartItems.map((item) => (
                  <CartCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    category={item.category}
                    catalogue={item.catalogue}
                    wood={item.wood}
                    finishing={item.finishing}
                    seat={item.seat}
                    quantity={item.quantity}
                    toggleModal={toggleModal}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Modal
        cartModal={cartModal}
        toggleModal={toggleModal}
        itemId={removeItemId}
      />
    </div>
  );
};

export default Navbar;
