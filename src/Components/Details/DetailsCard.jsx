import { Link, useLoaderData } from "react-router-dom";

import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";

const DetailsCard = () => {
  const service = useLoaderData();
  const { _id, title, level, image, date, marks, description } = service;

  const dynamicStyle = {
    backgroundImage: `url('${image}')`,
  };

  // const handleBookService = (event) => {
  //   event.preventDefault();
  //   const email = user?.email;
  //   const booking = {
  //     title,
  //     email,
  //     image,
  //     date,
  //     marks,
  //     level,
  //   };
  //   console.log(booking);

  //   fetch("https://study-assignment-server-lac.vercel.app/bookings", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(booking),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.insertedId) {
  //         swal("Yeah!", "Taking Assignment Successfully", "success");
  //       }
  //     });
  // };

  return (
    <div className="h-[80vh]">
      <Card shadow={false} className="relative w-full overflow-hidden text-center h-screen">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
          style={dynamicStyle}
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/80" />
        </CardHeader>
        <CardBody className="relative px-6 md:px-12 pt-48">
          <Typography variant="h2" color="white" className="mb-4 font-bold ">
            {title}
          </Typography>
          <Typography
            variant="h5"
            className="mb-4 mt-24 text-3xl md:text-3xl leading-auto lg:leading-relaxed text-gray-400"
          >
            {description}
          </Typography>
          <Typography
            variant="h5"
            className="mb-4 mt-24 text-xl md:text-3xl leading-auto lg:leading-relaxed text-lime-400"
          >
            {level}
          </Typography>
          <Typography variant="h5" className="mb-6 mt-8 text-2xl font-bold text-gray-400">
            Mark: {marks}
          </Typography>
          <Typography variant="h5" className="mb-4 mt-8 text-2xl font-bold text-gray-400">
            Date : {date}
          </Typography>
          <Link>
            <Link to={`/tassignment/${_id}`}>
              <button className="btn btn-success text-white mt-6">Take Assignment</button>
            </Link>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default DetailsCard;
////////////////

// import React, { useContext } from "react";
// import { Link, useLoaderData } from "react-router-dom";
// import { AuthContext } from "../../Providers/AuthProvider";
// import { Card, CardHeader, CardBody, Typography, Textarea } from "@material-tailwind/react";
// import swal from "sweetalert";
// import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";

// const DetailsCard = () => {
//   const service = useLoaderData();
//   const { _id, title, level, image, date, marks, description } = service;
//   const { user } = useContext(AuthContext);
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => setOpen(!open);

//   const dynamicStyle = {
//     backgroundImage: `url('${image}')`,
//   };

//   const handleBookService = (event) => {
//     event.preventDefault();
//     const email = user?.email;
//     const form = event.target;
//     const note = form.note.value;
//     const pdf = form.pdf.value;
//     const booking = {
//       title,
//       email,
//       description,
//       image,
//       date,
//       marks,
//       level,
//       note,
//       pdf,
//     };
//     console.log(booking);

//     fetch(`https://study-assignment-server-lac.vercel.app/assignment/${_id}`, {
//       method: "PUT",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(booking),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.insertedId) {
//           swal("Yeah!", "Taking Assignment Successfully", "success");
//         }
//       });
//   };

//   return (
//     <div className="h-[80vh]">
//       <Card shadow={false} className="relative w-full overflow-hidden text-center h-screen">
//         <CardHeader
//           floated={false}
//           shadow={false}
//           color="transparent"
//           className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
//           style={dynamicStyle}
//         >
//           <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/80" />
//         </CardHeader>
//         <CardBody className="relative px-6 md:px-12 pt-48">
//           <Typography variant="h2" color="white" className="mb-4 font-bold ">
//             {title}
//           </Typography>
//           <Typography
//             variant="h5"
//             className="mb-4 mt-24 text-3xl md:text-3xl leading-auto lg:leading-relaxed text-gray-400"
//           >
//             {description}
//           </Typography>
//           <Typography
//             variant="h5"
//             className="mb-4 mt-24 text-xl md:text-3xl leading-auto lg:leading-relaxed text-lime-400"
//           >
//             {level}
//           </Typography>
//           <Typography variant="h5" className="mb-6 mt-8 text-2xl font-bold text-gray-400">
//             Mark: {marks}
//           </Typography>
//           <Typography variant="h5" className="mb-8 mt-8 text-2xl font-bold text-gray-400">
//             Date : {date}
//           </Typography>

//           <button onClick={handleBookService} className="btn btn-success text-white mt-6">
//             Take Assignment
//           </button>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default DetailsCard;
