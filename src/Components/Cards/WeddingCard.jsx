import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const WeddingCard = ({ card }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { id, title, image, date, description, marks, level } = card || {};
  return (
    <div data-aos="zoom-out-up" data-aos-offset="300" className="font-pec">
      {/* -- */}
      <div className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
        >
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div className="relative p-6 px-6 py-14 md:px-12">
          <h2 className="mb-6 block text-2xl font-pec font-bold leading-[1.5] tracking-normal text-white antialiased">
            {title}
          </h2>
          <div className="flex justify-center items-center gap-3 mb-3">
            <div>
              <p className="text-white">Marks : {marks}</p>
            </div>
            <div>
              <p className="text-yellow-400">{level}</p>
            </div>
          </div>
          <p className="text-white text-xl mb-2">{description}</p>
          <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
            {date}
          </h5>
          <div className="flex justify-center items-center gap-3">
            <div>
              <Link to={`/brand`}>
                <button className="btn btn-neutral">View</button>
              </Link>
            </div>
            <div>
              <Link>
                <button className="btn btn-neutral">Update</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* -- */}

      {/* <div classNameName="card lg:card-side bg-base-100 shadow-xl h-80 ">
        <figure>
          <img classNameName="rounded-xl w-[500px] h-[400px] left-0" src={image} />
        </figure>
        <div classNameName="card-body">
          <h2 classNameName="card-title text-6xl">{name}</h2>
          <div classNameName="card-actions justify-end">
            <Link to={`/brand`}>
              <button classNameName="btn btn-primary lg:mt-36">SEE PRODUCTS</button>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default WeddingCard;
