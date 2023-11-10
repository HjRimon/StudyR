import React, { useEffect, useState } from "react";
import BrandName from "./BrandName";

const Orders = () => {
  const [favourites, setfavourites] = useState([]);

  const [nofound, setnofound] = useState(false);

  const [isShow, setIsShow] = useState(false);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const favouriteItems = JSON.parse(localStorage.getItem("favourites"));
    if (favouriteItems) {
      setfavourites(favouriteItems);
      const total = favouriteItems.reduce(
        (preValue, currentItem) => preValue + currentItem.price,
        0
      );
      setTotalPrice(total);
    } else {
      setnofound("No Data Found");
    }
  }, []);

  const handleRemove = () => {
    localStorage.clear();
    setfavourites([]);
    setnofound("No Data Found");
  };

  return (
    <div>
      {nofound ? (
        <p className="h-[60vh] flex justify-center items-center">{nofound}</p>
      ) : (
        <div>
          {favourites.length > 0 && (
            <div>
              <button
                onClick={handleRemove}
                className="px-5 bg-cyan-400	 mx-auto block text-white rounded-lg py-2 font-semibold hover:bg-cyan-200	 mb-5 mt-10"
              >
                Deleted All
              </button>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {isShow
              ? favourites.map((tech) => <BrandName key={tech._id} tech={tech}></BrandName>)
              : favourites
                  .slice(0, 4)
                  .map((tech) => <BrandName key={tech._id} tech={tech}></BrandName>)}
          </div>
          {favourites.length > 4 && (
            <button
              onClick={() => setIsShow(!isShow)}
              className="px-5 bg-cyan-400	 mx-auto block text-white rounded-lg py-2 font-semibold hover:bg-cyan-200	 mt-10 mb-10"
            >
              {isShow ? "See less" : "See more"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Orders;
