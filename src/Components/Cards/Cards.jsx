import { useLoaderData } from "react-router-dom";
import WeddingCard from "./WeddingCard";

const Cards = () => {
  const assignments = useLoaderData();

  return (
    <div className="py-10 w-11/12 mx-auto font-pec">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-center mb-16">
        Our Assignments
      </h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 justify-items-center items-center gap-9 overflow-hidden">
        {assignments?.map((card) => (
          <WeddingCard key={card._id} card={card}></WeddingCard>
        ))}
      </div>
    </div>
  );
};

export default Cards;
