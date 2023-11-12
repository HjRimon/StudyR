// import { useLoaderData } from "react-router-dom";
// import BrandName from "./BrandName";
// import { useState } from "react";

// const Brand = () => {
//   const loadedTechs = useLoaderData();
//   const [techs, setTechs] = useState(loadedTechs);
//   return (
//     <>
//       <div className="py-10 w-11/12 mx-auto font-pec">
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-center mb-16">
//           Our Assignments
//         </h1>
//         <div className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 justify-items-center items-center gap-9 overflow-hidden">
//           {techs.map((tech) => (
//             <BrandName key={tech._id} tech={tech} techs={techs} setTechs={setTechs}></BrandName>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Brand;
// ===============================
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BrandName from "./BrandName";

const Brand = () => {
  const loadedTechs = useLoaderData();
  const [techs, setTechs] = useState(loadedTechs);
  const [selectedLevel, setSelectedLevel] = useState("All"); // Initialize filter state

  const filterTechs = (level) => {
    if (level === "All") {
      setTechs(loadedTechs); // Show all cards when "All" is selected
    } else {
      const filteredTechs = loadedTechs.filter((tech) => tech.level === level);
      setTechs(filteredTechs);
    }
  };

  return (
    <>
      <div className="py-10 w-11/12 mx-auto font-pec">
        {/* ... */}
        <div className="text-center mb-16">
          <label htmlFor="levelFilter">Filter by Level: </label>
          <select
            id="levelFilter"
            onChange={(e) => {
              const selected = e.target.value;
              setSelectedLevel(selected);
              filterTechs(selected);
            }}
            value={selectedLevel}
          >
            <option value="All">All</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
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
