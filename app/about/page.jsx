import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen">
      <Image
        src="/assets/images/about-image.png"
        width={1000}
        height={700}
        style={{ objectFit: "cover" }}
        className="lg:absolute flex right-0 -z-10 xl:w-[700px] lg:w-[450px] lg:h-fit h-[300px] w-full"
        alt="bg img"
      ></Image>
      <div className="container mx-auto px-5 min-h-screen my-16 space-y-16">
        <h1 className="lg:text-5xl text-4xl underline underline-offset-4 w-fit mt-10">
          About Us
        </h1>
        <div className="max-w-lg space-y-4 leading-relaxed">
          <p>
            santai furniture unites puristic design with the heritage of java.
            each of our furniture pieces is inspired by elements of javanese
            culture and transports a part of local lifestyle to the urban
            living. our portfolio hereby mainly consists of lounge, dining and
            office furniture.
          </p>
          <p>
            we treasure the sustainable origin and great quality of materials
            and emphasize highest precision in our carpentry. our specialization
            lies in solid wood and bamboo furniture, with a wide range of
            customization options, both for the exquisite private home as well
            as hospitality and office projects.
          </p>
          <p>
            for the refinement of our furniture pieces, we apply long grown
            manual skills of experienced craftsmen from central-java – such as
            wood carving and rattan weaving. the preservation and revitalization
            of traditional skills, local lifestyle and at a higher scope,
            javanese culture, lies at the heart of our company.
          </p>
          <p>
            this is a santai website remake by Pambayun, visit original santai
            webtise at{" "}
            <a className="text-blue-600" href="https://santai-furniture.com">
              santai-furniture.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
