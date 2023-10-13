"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useCycle, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  return (
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
          <button className="relative">
            <Image
              src="/assets/icons/cart.svg"
              width={21}
              height={21}
              alt="cart"
            ></Image>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary-red rounded-full outline outline-2 outline-primary-grey">
              <p className="text-xs font-semibold text-center text-white">0</p>
            </div>
          </button>
          <motion.button
            animate={mobileNav ? "animate" : "initial"}
            onClick={() => toggleMobileNav()}
            className="md:hidden flex flex-col justify-between ml-7 my-0.5 z-50"
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
          </motion.button>
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
  );
};

export default Navbar;
