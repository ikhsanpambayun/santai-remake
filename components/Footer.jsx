import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-secondary-grey w-full py-10">
      <div className="container mx-auto w-fit space-y-2">
        <Image
          className="mx-auto mb-6"
          src="/assets/images/nav-logo-white.svg"
          width={105}
          height={51}
          alt="logo"
        ></Image>
        <p className="text-white text-base text-center">designed by Pambayun</p>
        <div className="flex justify-center gap-2">
          <a href="" className="p-1">
            <Image
              src="/assets/icons/insta.svg"
              width={20}
              height={20}
              alt="insta"
            ></Image>
          </a>
          <a href="" className="p-1">
            <Image
              src="/assets/icons/linkedin.svg"
              width={20}
              height={20}
              alt="linkedin"
            ></Image>
          </a>
          <a href="" className="p-1">
            <Image
              src="/assets/icons/github.svg"
              width={20}
              height={20}
              alt="github"
            ></Image>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
