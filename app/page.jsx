"use client";

import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
  ];

  const ref = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  console.log(scrollYProgress);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 350]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const ParalaxColumn = ({ images, y }) => {
    return (
      <motion.div
        style={{ y }}
        className="flex flex-col w-1/2 min-w-[50px] h-full gap-[1vw] -mt-24"
      >
        {images.map((src, i) => {
          return (
            <div key={i} className="relative h-full w-full">
              <Image
                className="relative"
                src={`/assets/images/paralax/${src}`}
                fill
                style={{ objectFit: "cover" }}
                alt="par img"
              ></Image>
            </div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div>
      <section className="relative lg:h-screen md:h-[80vh] sm:h-[60vh]">
        <Image
          src="/assets/images/home-image-1.png"
          width={1200}
          height={100}
          className="sm:absolute flex -z-10 lg:mt-10"
          alt="bg img"
        ></Image>
        <div className="container mx-auto flex flex-col lg:items-end items-center lg:pt-40 sm:pt-12 pt-3 px-5 w-full">
          <h1 className="hidden sm:block max-w-6xl lg:text-right text-center lg:text-6xl text-4xl">
            .. Machinery makes the construction strong - But the manual work
            give the product a soul ”
          </h1>
          <h6 className="hidden sm:block lg:text-right text-center lg:text-xl font-bold mt-5">
            - SINGGIH S. KARTONO -"
          </h6>
          <button className="mx-auto xl:mt-96 lg:mt-60 md:mt-72 sm:mt-40 mb-16 lg:text-xl text-md text-primary-red hover:text-white hover:bg-primary-red outline outline-1 outline-primary-red py-3 sm:px-7 sm:w-fit w-full">
            BROWSE OUR PRUDUCTS
          </button>
        </div>
      </section>

      <section className="relative space-y-6">
        <h1 className="text-center lg:text-5xl text-4xl underline underline-offset-4">
          Our Workshop Overview
        </h1>
        <div className="h-[130vh] bg-primary-grey overflow-hidden">
          <div
            ref={ref}
            className="container mx-auto px-5 h-full flex flex-row gap-[1vw]"
          >
            <ParalaxColumn images={[images[0], images[1], images[2]]} y={y1} />
            <ParalaxColumn images={[images[3], images[4], images[5]]} y={y2} />
            <ParalaxColumn images={[images[6], images[7], images[8]]} y={y3} />
            <ParalaxColumn
              images={[images[9], images[10], images[11]]}
              y={y4}
            />
          </div>
        </div>
      </section>

      <section className="relative h-screen flex flex-col items-center">
        <Image
          src="/assets/images/home-image-2.png"
          width={700}
          height={100}
          className="xl:block hidden absolute right-0 bottom-20 -z-10"
          alt="bg img"
        ></Image>
        <div className="container m-auto px-5 space-y-5">
          <h1 className="lg:text-5xl text-4xl underline underline-offset-4 w-fit">
            Reach Us
          </h1>
          <form action="" className="max-w-lg space-y-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                className="outline outline-1 outline-tertiary-grey p-2"
                type="text"
                id="name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                className="outline outline-1 outline-tertiary-grey p-2"
                type="email"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="subject">Subject</label>
              <input
                className="outline outline-1 outline-tertiary-grey p-2"
                type="text"
                id="subject"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="massage">Massage</label>
              <textarea
                className="outline outline-1 outline-tertiary-grey p-2"
                name="massage"
                id="massage"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-2 text-md text-primary-red hover:text-white hover:bg-primary-red outline outline-1 outline-primary-red py-3 sm:px-7 w-full"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
