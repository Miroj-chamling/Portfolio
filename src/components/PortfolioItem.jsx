import React from "react";
import "../styles/tailwind.css";

function PortfolioItem({ title, imgUrl, stack, link, discription }) {
  return (
    <a
      href={link}
      target={link === "#" ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="relative border-2 border-stone-900 dark:border-white rounded-md overflow-hidden group"
    >
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />

      <div className="absolute inset-0 bg-black bg-opacity-85 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
        <div className="text-center text-white p-4">
          <p className="text-sm md:text-base">{discription}</p>
        </div>
      </div>

      <div className=" w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
          {stack.map((item) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default PortfolioItem;
