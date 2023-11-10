// import { useState, useEffect } from "react";

// function Calender() {
//   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
//   const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
//   const [modalDate, setModalDate] = useState("");
//   const [modalVisible, setModalVisible] = useState(false);

//   const monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   // Function to generate the calendar for a specific month and year
//   function generateCalendar(year, month) {
//     // Create a date object for the first day of the specified month
//     const firstDayOfMonth = new Date(year, month, 1);
//     const daysInMonth = new Date(year, month + 1, 0).getDate();

//     // Calculate the day of the week for the first day of the month (0 - Sunday, 1 - Monday, ..., 6 - Saturday)
//     const firstDayOfWeek = firstDayOfMonth.getDay();

//     // Create headers for the days of the week
//     const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//     // Create empty boxes for days before the first day of the month
//     const emptyDays = Array.from({ length: firstDayOfWeek }, (_, index) => (
//       <div key={`empty-${index}`}></div>
//     ));

//     // Create boxes for each day of the month
//     const dayElements = Array.from({ length: daysInMonth }, (_, day) => {
//       const currentDate = new Date();
//       const isCurrentDate =
//         year === currentDate.getFullYear() &&
//         month === currentDate.getMonth() &&
//         day + 1 === currentDate.getDate();

//       return (
//         <div
//           key={`day-${day + 1}`}
//           className={`text-center py-2 border cursor-pointer ${
//             isCurrentDate ? "bg-blue-500 text-white" : ""
//           }`}
//           onClick={() => handleDayClick(day + 1)}
//         >
//           {day + 1}
//         </div>
//       );
//     });

//     return [...emptyDays, ...dayElements].map((day, index) => (
//       <div key={`calendar-day-${index}`}>{day}</div>
//     ));
//   }

//   // Event listener for previous month button
//   const handlePrevMonthClick = () => {
//     setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
//     setCurrentYear(currentMonth === 0 ? currentYear - 1 : currentYear);
//   };

//   // Event listener for next month button
//   const handleNextMonthClick = () => {
//     setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
//     setCurrentYear(currentMonth === 11 ? currentYear + 1 : currentYear);
//   };

//   // Event handler for day click events
//   const handleDayClick = (day) => {
//     const selectedDate = new Date(currentYear, currentMonth, day);
//     const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
//     const formattedDate = selectedDate.toLocaleDateString(undefined, options);
//     setModalDate(formattedDate);
//     setModalVisible(true);
//   };

//   // Event handler for closing the modal
//   const handleCloseModal = () => {
//     setModalVisible(false);
//   };

//   useEffect(() => {
//     // Generate the calendar when the component mounts
//     generateCalendar(currentYear, currentMonth);
//   }, [currentYear, currentMonth]);

//   return (
//     <div className="bg-gray-100 flex items-center justify-center h-screen">
//       <div className="lg:w-7/12 md:w-9/12 sm:w-10/12 mx-auto p-4">
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//           <div className="flex items-center justify-between px-6 py-3 bg-gray-700">
//             <button id="prevMonth" onClick={handlePrevMonthClick} className="text-white">
//               Previous
//             </button>
//             <h2 id="currentMonth" className="text-white">
//               {`${monthNames[currentMonth]} ${currentYear}`}
//             </h2>
//             <button id="nextMonth" onClick={handleNextMonthClick} className="text-white">
//               Next
//             </button>
//           </div>
//           <div className="grid grid-cols-7 gap-2 p-4" id="calendar">
//             {generateCalendar(currentYear, currentMonth)}
//           </div>
//           {modalVisible && (
//             <div className="modal fixed inset-0 flex items-center justify-center z-50">
//               <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
//               <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
//                 <div className="modal-content py-4 text-left px-6">
//                   <div className="flex justify-between items-center pb-3">
//                     <p className="text-2xl font-bold">Selected Date</p>
//                     <button
//                       id="closeModal"
//                       onClick={handleCloseModal}
//                       className="modal-close px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring"
//                     >
//                       ✕
//                     </button>
//                   </div>
//                   <div id="modalDate" className="text-xl font-semibold">
//                     {modalDate}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Calender;
import { useState, useEffect } from "react";

function Calender() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [modalDate, setModalDate] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Function to generate the calendar for a specific month and year
  function generateCalendar(year, month) {
    // Create a date object for the first day of the specified month
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Calculate the day of the week for the first day of the month (0 - Sunday, 1 - Monday, ..., 6 - Saturday)
    const firstDayOfWeek = firstDayOfMonth.getDay();

    // Create headers for the days of the week
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Create empty boxes for days before the first day of the month
    const emptyDays = Array.from({ length: firstDayOfWeek }, (_, index) => (
      <div key={`empty-${index}`}></div>
    ));

    // Create boxes for each day of the month
    const dayElements = Array.from({ length: daysInMonth }, (_, day) => {
      const currentDate = new Date();
      const isCurrentDate =
        year === currentDate.getFullYear() &&
        month === currentDate.getMonth() &&
        day + 1 === currentDate.getDate();

      return (
        <div
          key={`day-${day + 1}`}
          className={`text-center py-2 border cursor-pointer ${
            isCurrentDate ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleDayClick(day + 1)}
        >
          {day + 1}
        </div>
      );
    });

    return [...emptyDays, ...dayElements].map((day, index) => (
      <div key={`calendar-day-${index}`}>{day}</div>
    ));
  }

  // Event listener for previous month button
  const handlePrevMonthClick = () => {
    setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
    setCurrentYear(currentMonth === 0 ? currentYear - 1 : currentYear);
  };

  // Event listener for next month button
  const handleNextMonthClick = () => {
    setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
    setCurrentYear(currentMonth === 11 ? currentYear + 1 : currentYear);
  };

  // Event handler for day click events
  const handleDayClick = (day) => {
    const selectedDate = new Date(currentYear, currentMonth, day);
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const formattedDate = selectedDate.toLocaleDateString(undefined, options);
    setModalDate(formattedDate);
    setModalVisible(true);
  };

  // Event handler for closing the modal
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    // Generate the calendar when the component mounts
    generateCalendar(currentYear, currentMonth);
  }, [currentYear, currentMonth]);

  return (
    <div className="w-[100%] h-[80vh] flex flex-col md:flex-row items-center justify-center">
      <div className="mt-24 mb-5 md:mb-0">
        <img src="https://i.ibb.co/pWh4rx8/undraw-Calendar-re-ki49.png" alt="" />
      </div>
      <div className="lg:w-[90%] md:w-[90%] sm:w-[98%] mx-auto p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-6 py-3 bg-gray-700">
            <button id="prevMonth" onClick={handlePrevMonthClick} className="text-white">
              Previous
            </button>
            <h2 id="currentMonth" className="text-white">
              {`${monthNames[currentMonth]} ${currentYear}`}
            </h2>
            <button id="nextMonth" onClick={handleNextMonthClick} className="text-white">
              Next
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2 p-4" id="calendar">
            {generateCalendar(currentYear, currentMonth)}
          </div>
          {modalVisible && (
            <div className="modal fixed inset-0 flex items-center justify-center z-50">
              <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
              <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 text-left px-6">
                  <div className="flex justify-between items-center pb-3">
                    <p className="text-2xl font-bold">Selected Date</p>
                    <button
                      id="closeModal"
                      onClick={handleCloseModal}
                      className="modal-close px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring"
                    >
                      ✕
                    </button>
                  </div>
                  <div id="modalDate" className="text-xl font-semibold">
                    {modalDate}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Calender;
