// import React from "react";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const HoneyMone = () => {
  const handleAddTech = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.name.value;
    const image = form.image.value;
    const marks = form.price.value;
    const description = form.description.value;
    const level = form.option.value;
    const date = form.date.value;
    const newTech = { title, image, marks, description, level, date };

    fetch("https://study-assignment-server-lac.vercel.app/assignment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTech),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Assignment Added Successfully",
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
          src="https://i.ibb.co/fGkNH6K/undraw-Experience-design-re-dmqq.png"
          alt="image"
        />
      </div>
      <div>
        <h2 className="text-2xl md:text-4xl text-center font-bold my-16 font-pec">
          Create Your Innovative Assignment
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
                  />
                </label>
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-semibold text-xl font-pec">
                    Difficulty level
                  </span>
                </label>
                <select name="option" className="px-20 py-5 rounded-xl border-gray-600 border">
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
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl font-pec">Select Date</span>
                </label>
                <label className="input-group  px-[50px] py-5 rounded-xl border-gray-600 border">
                  <input className="cursor-pointer" type="date" name="date" />
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="btn px-48 mt-16" type="submit">
              Add Assignment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HoneyMone;
