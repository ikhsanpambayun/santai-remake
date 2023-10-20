import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <AnimatePresence>
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
          <p>Your Cart</p>
          {cartItems.map((item) => {
            return <p>{item.name}</p>;
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Cart;
