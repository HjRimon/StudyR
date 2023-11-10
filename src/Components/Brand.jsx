import { useLoaderData } from "react-router-dom";
import BrandName from "./BrandName";
import { useState } from "react";

const Brand = () => {
  const loadedTechs = useLoaderData();
  const [techs, setTechs] = useState(loadedTechs);
  return (
    <>
      <div className="py-10 w-11/12 mx-auto font-pec">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-center mb-16">
          Our Assignments
        </h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 justify-items-center items-center gap-9 overflow-hidden">
          {techs.map((tech) => (
            <BrandName key={tech._id} tech={tech} techs={techs} setTechs={setTechs}></BrandName>
          ))}
        </div>
      </div>
    </>
  );
};

export default Brand;
// import { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// import BrandName from "./BrandName";

// const Brand = () => {
//   const [detail, setDetail] = useState({});

//   const { id } = useParams();

//   const details = useLoaderData();

//   useEffect(() => {
//     const FindDetails = details?.find((detail) => detail._id === id);
//     setDetail(FindDetails);
//   }, [id, details]);

//   return (
//     <div>
//       <BrandName detail={detail}></BrandName>
//     </div>
//   );
// };

// export default Brand;
