import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <>
      <h1 className=" underline text-4xl md:text-4xl text-center dark:text-white font-bold">
        Projects
      </h1>
      <p className=" text-center mt-4 mb-8">
        <span className=" text-red-600 text-bold text-3xl ">! </span>
        Click on the project to view it.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((project) => (
            <PortfolioItem
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
              discription={project.discription}
            />
          ))}
        </div>
      </div>

      <h1 className=" flex items-center justify-center mt-11">
        check out my other projects at
        <button className=" flex justify-center items-center border p-2 rounded-lg ml-2">
          <a
            href="https://github.com/Miroj-chamling?tab=repositories"
            target="_blank"
          >
            Github
          </a>
        </button>
      </h1>
    </>
  );
}

export default Portfolio;
