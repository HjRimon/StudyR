import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const GetMark = () => {
  const { user } = useContext(AuthContext);
  const tech = useLoaderData();
  const nevigate = useNavigate();
  const { _id, title, image, description, level, marks, date, note, pdf } = tech;
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const handleAddTech = (event) => {
    event.preventDefault();
    const updatedTech = { title, image, marks, description, level, date, note, pdf };

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to submit the result?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://study-assignment-server-lac.vercel.app/bookings/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedTech),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.matchedCount > 0) {
              setConfirmationModalOpen(false);
              Swal.fire({
                title: "Good job!",
                text: "Result Added!",
                icon: "success",
              });
            }
            nevigate("/bookings");
          });
      }
    });
  };

  function downloadPDF() {
    const link = document.createElement("a");
    link.href = pdf;
    link.target = "_blank";
    link.download = "your-pdf-file.pdf";
    link.click();
  }

  return (
    <div className="w-[98%] h-auto md:h-[80vh] flex lg:flex-row flex-col justify-center items-center">
      <div>
        <button className="btn btn-outline btn-accent mt-4 md:mt-auto" onClick={downloadPDF}>
          Preview PDF
        </button>
      </div>
      <div>
        <h2 className="text-2xl md:text-4xl text-center font-bold my-16 font-pec">
          Checking Assignment
        </h2>
        <form onSubmit={handleAddTech}>
          <div className="flex flex-col md:flex-row w-11/12 mx-auto justify-center items-center gap-10">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl font-pec">Mark</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Mark"
                    className="input input-bordered border-black"
                    name="marks"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl font-pec">Feedback</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="FeedBack"
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

export default GetMark;
