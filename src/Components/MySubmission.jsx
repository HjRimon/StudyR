const MySubmission = () => {
    return (
        <div>

        </div>
    );
};

export default MySubmission;

// import { useContext } from "react";
// import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../Providers/AuthProvider";

// const MySubmission = () => {
//   const service = useLoaderData();
//   const { title, _id, price, image, date } = service;
//   const { user } = useContext(AuthContext);

//   const handleBookService = (event) => {
//     event.preventDefault();
//     const email = user?.email;
//     const booking = {
//       title,
//       email,
//       image,
//       date,
//       marks,
//       level,
//     };
//     console.log(booking);

//     fetch("http://localhost:5000/bookings", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(booking),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.insertedId) {
//           alert("service booked successfully");
//         }
//       });
//   };

//   return (
//     <div>
//       <h2 className="text-4xl text-center font-bold">Book Service : {title}</h2>
//       <div className="card-body">
//         <form onSubmit={handleBookService}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Name</span>
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 defaultValue={user?.displayName}
//                 placeholder="name"
//                 className="input input-bordered"
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Date</span>
//               </label>
//               <input type="date" name="date" className="input input-bordered" defaultValue={date} />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="text"
//                 name="email"
//                 placeholder="email"
//                 defaultValue={user?.email}
//                 className="input input-bordered"
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Due ammount</span>
//               </label>
//               <input type="text" defaultValue={"$" + price} className="input input-bordered" />
//             </div>
//           </div>
//           <div className="form-control mt-6">
//             <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default MySubmission;
