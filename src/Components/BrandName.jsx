import { Link, json, useLocation } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";

const BrandName = ({ tech, techs, setTechs }) => {
  const handleAddCart = () => {
    const addedFavouritesArray = [];

    const favouriteItems = JSON.parse(localStorage.getItem("favourites"));

    if (!favouriteItems) {
      addedFavouritesArray.push(tech);
      localStorage.setItem("favourites", JSON.stringify(addedFavouritesArray));
      swal("Good job!", "Assignment added successfully", "success");
    } else {
      const isExits = favouriteItems.find((tech) => tech._id === _id);

      if (!isExits) {
        addedFavouritesArray.push(...favouriteItems, tech);
        localStorage.setItem("favourites", JSON.stringify(addedFavouritesArray));
        swal("Good job!", "Assignment added successfully", "success");
      } else {
        swal("Error!", "No Duplicate", "error");
      }
    }
  };
  const { _id, title, image, marks, description, level, date, brand } = tech;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://study-assignment-server-lac.vercel.app/assignment/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Project has been deleted.", "success");
              const remaining = techs.filter((tec) => tec._id !== _id);
              setTechs(remaining);
            }
          });
      }
    });
  };
  return (
    <div data-aos="zoom-out-up" data-aos-offset="300" className="font-pec">
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
              <Link to={`/updatetech/${_id}`}>
                <button className="btn btn-outline btn-warning">Update</button>
              </Link>
            </div>
            <div>
              <Link to={`/details/${_id}`}>
                <button className="btn btn-neutral">View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandName;
