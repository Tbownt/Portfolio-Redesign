import portfolios from "../assets/data/portfolioData";

export const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find((project) => project.id === activeID);

  return (
    <div className="animate__animated animate__fadeIn w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
      <div className="w-11/12 md:max-w-[600px] md:w-full absolute top-1/2 left-1/2 z-20 bg-slate-200 rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
        <div>
          <figure>
            <img className="rounded-[8px]" src={portfolio.image} alt="modal" />
          </figure>
        </div>
        <div>
          <h2 className="text-2xl text-headingColor font-[700] my-5">
            {portfolio.title}
          </h2>
          <p className="text-[15px] leading-7 text-smallTextColor">
            {portfolio.description}
          </p>

          {portfolio.link && (
            <a href={portfolio.link} target="_blank" rel="noreferrer">
              <button className="bg-primaryColor text-white py-2 px-4 my-8 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">
                Live site
              </button>
            </a>
          )}
        </div>

        <button
          onClick={() => setShowModal(false)}
          className="w-[1.8rem] h-[1.8rem] bg-red-500 absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer"
        >
          &times;
        </button>
      </div>
    </div>
  );
};
