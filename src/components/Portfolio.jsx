import { useState } from "react";
import projects from "../assets/data/portfolioData";
import { Modal } from "./Modal";

export const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              My recent projects
            </h3>
          </div>

          {/* <div className="flex gap-3">
            <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
              All
            </button>
          </div> */}
        </div>
        <div className="flex items-center gap-4 flex-wrap mt-[15px]">
          {projects.map((project) => (
            <div
              key={project.id}
              className="animate__animated animate__fadeIn group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            >
              <figure>
                <img
                  className="rounded-[8px]"
                  src={project.image}
                  alt="projects"
                />
              </figure>
              <div className="w-full h-full bg-slate-200 bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block rounded-[8px]">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(project.id)}
                    className="text-white bg-headingColor hover:bg-smallTextcolor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                  >
                    See details
                  </button>
                  <button className="text-white bg-headingColor hover:bg-smallTextcolor py-2 px-4 rounded-[8px] ml-4">
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Repository
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>
  );
};
