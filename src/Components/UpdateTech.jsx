import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTech = () => {
  const tech = useLoaderData();
  const { _id, title, image, description, level, marks, date } = tech;
  const handleAddTech = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.name.value;
    const image = form.image.value;
    const marks = form.price.value;
    const description = form.description.value;
    const level = form.option.value;
    const date = form.date.value;
    const updatedTech = { title, image, marks, description, level, date };

    fetch(`https://study-assignment-server-lac.vercel.app/assignment/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTech),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Assignment Updated Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };
  return (
    <div className="w-[98%] h-auto md:h-[80vh] flex lg:flex-row flex-col justify-center items-center">
      <div>
        <img
          className="lg:-ml-14"
          src="https://i.ibb.co/rHTc5ry/undraw-Portfolio-update-re-jqnp.png"
          alt="image"
        />
      </div>
      <div>
        <h2 className="text-2xl md:text-4xl text-center font-bold my-16 font-pec">
          Update Your Assignment
        </h2>
        <form onSubmit={handleAddTech}>
          <div className="flex flex-col md:flex-row w-11/12 mx-auto justify-center items-center gap-10">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl font-pec">
                    Assignment Title
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Title"
                    className="input input-bordered border-black"
                    name="name"
                    defaultValue={title}
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl font-pec">Image URL</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Image url"
                    className="input input-bordered border-black"
                    name="image"
                    defaultValue={image}
                  />
                </label>
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-semibold text-xl font-pec">
                    Difficulty level
                  </span>
                </label>
                <select
                  name="option"
                  className="px-20 py-5 rounded-xl border-gray-600 border"
                  defaultValue={level}
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl font-pec">
                    Assignment Marks
                  </span>
                </label>
                <label className="input-group ">
                  <input
                    type="text"
                    placeholder="Marks"
                    className="input input-bordered border-black"
                    name="price"
                    defaultValue={marks}
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl font-pec">Description</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Discription"
                    className="input input-bordered border-black"
                    name="description"
                    defaultValue={description}
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl font-pec">Select Date</span>
                </label>
                <label className="input-group  px-[50px] py-5 rounded-xl border-gray-600 border">
                  <input className="cursor-pointer" type="date" name="date" defaultValue={date} />
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="btn px-48 mt-16" type="submit">
              Update Assignment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTech;
