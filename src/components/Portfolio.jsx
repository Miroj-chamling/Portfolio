import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <>
      <h1 className=" underline text-4xl mb-12 md:text-4xl text-center dark:text-white font-bold">
        Projects
      </h1>
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
    </>
  );
}

export default Portfolio;
