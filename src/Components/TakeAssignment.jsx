import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const TakeAssignment = () => {
  const { user } = useContext(AuthContext);
  const tech = useLoaderData();
  const { _id, title, image, description, level, marks, date, note, pdf } = tech;
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const nevigate = useNavigate();

  const handleAddTech = (event) => {
    event.preventDefault();
    const form = event.target;
    const note = form.note.value;
    const pdf = form.pdf.value;
    const updatedTech = { title, image, marks, description, level, date, note, pdf };

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to proceed with submitting the assignment?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
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
              setConfirmationModalOpen(false);
              handleBookService(event);
            }
          });
      }
    });
  };

  const handleBookService = (event) => {
    event.preventDefault();
    const email = user?.email;
    const booking = {
      title,
      email,
      image,
      date,
      marks,
      level,
      pdf,
      note,
    };
    console.log(booking);

    fetch("https://study-assignment-server-lac.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("Yeah!", "Submitting Assignment Successfully", "success");
        }
      });
    nevigate("/brand");
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
          Take Your Assignment
        </h2>
        <form onSubmit={handleAddTech}>
          <div className="flex flex-col md:flex-row w-11/12 mx-auto justify-center items-center gap-10">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl font-pec">PDF Link</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="PDF Link"
                    className="input input-bordered border-black"
                    name="pdf"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl font-pec">Note</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Note"
                    className="input input-bordered border-black"
                    name="note"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="btn px-24 mt-16" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TakeAssignment;
