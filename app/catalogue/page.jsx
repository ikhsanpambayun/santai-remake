import React from "react";
import ItemCard from "@/components/ItemCard";

const page = () => {
  return (
    <div className="container mx-auto px-5 min-h-screen my-16 space-y-16">
      <h1 className="lg:text-5xl text-4xl underline underline-offset-4 w-fit">
        Our Catalogue
      </h1>
      <div className="flex flex-wrap gap-x-6 gap-y-8 justify-center">
        <ItemCard
          imgSrc="/assets/images/catalogue/1.png"
          name="Kursi Santai"
          category="HERITAGE"
          link="/catalogue/heritage"
          hoverText="See All Products"
        />
        <ItemCard
          imgSrc="/assets/images/catalogue/2.png"
          name="Pring"
          category="RETHINK BAMBOO"
          link="/catalogue/rethink-bamboo"
          hoverText="See All Products"
        />
        <ItemCard
          imgSrc="/assets/images/catalogue/3.png"
          name="Nongkrong"
          category="TOGETHERNESS"
          link="/catalogue/togetherness"
          hoverText="See All Products"
        />
        <ItemCard
          imgSrc="/assets/images/catalogue/4.png"
          name="Cangkruk"
          category="ESSENTIAL"
          link="/catalogue/essential"
          hoverText="See All Products"
        />
        <ItemCard
          imgSrc="/assets/images/catalogue/5.png"
          name="Ngajeng"
          category="SLOW DOWN"
          link="/catalogue/slow-down"
          hoverText="See All Products"
        />
        <ItemCard
          imgSrc="/assets/images/catalogue/6.png"
          name="Deprok"
          category="RESOURCE EFFICIENT"
          link="/catalogue/resource-efficient"
          hoverText="See All Products"
        />
        <ItemCard
          imgSrc="/assets/images/catalogue/7.png"
          name="Ranjang"
          category="REFRESH"
          link="/catalogue/refresh"
          hoverText="See All Products"
        />
        <ItemCard
          imgSrc="/assets/images/catalogue/8.png"
          name="Tuwuh"
          category="RELAX & UNFURL"
          link="/catalogue/relax-unfurl"
          hoverText="See All Products"
        />
        <ItemCard
          imgSrc="/assets/images/catalogue/9.png"
          name="Dadung"
          category="ALL WEATHER"
          link="/catalogue/all-weather"
          hoverText="See All Products"
        />
      </div>
    </div>
  );
};

export default page;
