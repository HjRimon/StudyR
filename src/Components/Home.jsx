import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Typography } from "@material-tailwind/react";
import { Link, useLoaderData } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/20/solid";
import Cards from "./Cards/Cards";
import Gallery from "./Gallery";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, useScroll, useTransform } from "framer-motion";
const Home = () => {
  const includedFeatures = [
    "Personalized Tutoring",
    "Extensive Resources",
    "Exclusive Workshops",
    "Priority Support",
  ];
  const authInfo = useContext(AuthContext);
  console.log(authInfo);

  useEffect(() => {
    const registrationSuccess = localStorage.getItem("registrationSuccess");
    if (registrationSuccess === "true") {
      toast.success("Registration successful!");
      localStorage.removeItem("registrationSuccess");
    }
  }, []);
  useEffect(() => {
    const loginSuccess = localStorage.getItem("loginSuccess");
    if (loginSuccess === "true") {
      toast.success("Login successful!");
      localStorage.removeItem("loginSuccess");
    }
  }, []);

  // const cards = useLoaderData();
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  // ------------Framer Motion-----
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["-50%", "200%"]);

  return (
    <div className="font-pec">
      <ToastContainer position="top-right" autoClose={3000} />
      <div ref={ref} className="w-full h-screen overflow-hidden relative grid place-items-center">
        <motion.h1
          style={{ y: textY }}
          className="font-bold w-[98%] text-white text-center text-5xl md:text-7xl relative z-10"
        >
          Unlock the Power of Collaborative Learning <br />
          "Your First Step to Success"
        </motion.h1>

        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(https://i.ibb.co/Rg61ts3/image-full.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: backgroundY,
          }}
        >
          <div className="absolute inset-0 z-1 bg-black opacity-30"></div>
        </motion.div>

        <div
          className="absolute inset-0 z-20"
          style={{
            backgroundImage: `url(https://i.ibb.co/VpdF516/image-bottom.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
      </div>

      {/* <Cards cards={cards}></Cards> */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-16 text-center mb-16">
        Our Features
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-around">
        <div>
          <div className="card md:w-[600px] md:h-[450px] bg-base-100 shadow-xl image-full">
            <figure>
              <img src="https://i.ibb.co/zRfSXqY/undraw-Task-re-wi3v.png" alt="assignment" />
            </figure>
            <div className="card-body justify-center items-center">
              <h2 className="card-title text-4xl mb-4">All Assignments</h2>
              <p className="leading-7">
                In this extensive and multifaceted assignment, you will embark on a journey through
                a diverse array of topics and concepts. This assignment serves as a platform for you
                to demonstrate your profound understanding and proficiency across a wide spectrum of
                academic disciplines. It has been meticulously designed to evaluate your knowledge
                and capabilities in a holistic and integrated manner. Please feel free to adjust and
                expand upon this description to better suit the specific requirements and objectives
                of your assignment.
              </p>
              <div className="card-actions justify-end">
                <Link to="/brand">
                  <button className="btn btn-neutral text-white">View</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-9 lg:mt-0 w-auto md:w-[98%] lg:w-auto">
          {/* card 1 */}
          <div className="card w-96 h-[270px] bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-[200px]"
                src="https://i.ibb.co/TqNLQ2J/undraw-Add-tasks-re-s5yj-1.png"
                alt="Creat Assignment"
              />
            </figure>
            <div className="flex justify-around items-center">
              <div>
                <h2 className="card-title text-2xl">Creat Assignmnet</h2>
              </div>
              <div>
                <Link to="/honeymone">
                  <button className="btn btn-neutral text-white">Creat</button>
                </Link>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="card w-96 h-[270px] bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-[200px]"
                src="https://i.ibb.co/9Gbts2M/undraw-Social-media-re-sulg.png"
                alt="Creat Assignment"
              />
            </figure>
            <div className="flex justify-around items-center">
              <div>
                <h2 className="card-title text-2xl">Social Media Intregration</h2>
              </div>
              <div>
                <Link>
                  <button className="btn btn-neutral text-white">View</button>
                </Link>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="card w-96 h-[270px] bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-[200px]"
                src="https://i.ibb.co/L553Cpb/undraw-schedule-meeting-52nu.png"
                alt="Calendar"
              />
            </figure>
            <div className="flex justify-around items-center">
              <div>
                <h2 className="card-title text-2xl">Calendar</h2>
              </div>
              <div>
                <Link to="/calender">
                  <button className="btn btn-neutral text-white">View</button>
                </Link>
              </div>
            </div>
          </div>
          {/* card 4 */}
          <div className="card w-96 h-[270px] bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-[200px]"
                src="https://i.ibb.co/VqFybyN/undraw-Group-video-re-btu7.png"
                alt="Creat Assignment"
              />
            </figure>
            <div className="flex justify-around items-center">
              <div>
                <h2 className="card-title text-2xl">Video Conferencing</h2>
              </div>
              <div>
                <Link>
                  <button className="btn btn-neutral text-white">Join</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* GET Access Pro */}
      <div className="bg-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Studying Pro Membership
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Unlock academic excellence with our Studying Pro Membership. Gain exclusive access to
              premium resources, expert support, and advanced tools for your educational success.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Lifetime membership
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Unlock academic excellence with our Studying Pro Membership. Gain exclusive access
                to premium resources, expert support, and advanced tools for your educational
                success.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                  What’s included
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">$349</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      USD
                    </span>
                  </p>
                  <a
                    href="#"
                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get access
                  </a>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our gallery */}
      <Gallery></Gallery>
      {/* FAQ Question */}
      <div>
        <section className="text-gray-700 w-full">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl text-center title-font text-gray-900 mb-4 font-pec font-bold">
                Frequently Asked Question (FAQ)
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                The most common questions about how our business works and what can do for you.
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    What courses do you offer?
                  </summary>

                  <span>
                    We offer a wide range of courses, including subjects like mathematics, science,
                    history, and more. Explore our course catalog for details.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    Is there a mobile app available for studying on the go?
                  </summary>

                  <span>
                    Yes, we have a mobile app that allows you to access your courses and study
                    materials anytime, anywhere.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How do I contact customer support for assistance?
                  </summary>

                  <span>
                    You can reach our customer support team through our contact page or by emailing
                    support@yourwebsite.com.
                  </span>
                </details>
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Are there any free resources available for learners?
                  </summary>

                  <span className="px-4 py-2">
                    Yes, we offer free resources such as study guides, practice quizzes, and
                    educational articles to help you excel in your studies.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Can I track my progress and performance in the courses?
                  </summary>

                  <span className="px-4 py-2">
                    Absolutely! Our platform provides tools to monitor your progress, view grades,
                    and assess your performance in assignments and exams.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Do you offer certification upon course completion?
                  </summary>

                  <span className="px-4 py-2">
                    Yes, we provide certificates of completion for many of our courses, which can be
                    a valuable addition to your resume or academic achievements.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <img
                src="https://i.ibb.co/tbjZFxf/Screenshot-2023-11-04-203448-removebg-preview.png"
                className="mr-5 h-16 w-16 sm:h-9"
                alt="logo"
              />
              <p className="max-w-xs mt-4 text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.
              </p>
              <div className="flex mt-8 space-x-6 text-gray-600">
                <a className="hover:opacity-75" href target="_blank" rel="noreferrer">
                  <span className="sr-only"> Facebook </span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a className="hover:opacity-75" href target="_blank" rel="noreferrer">
                  <span className="sr-only"> Instagram </span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a className="hover:opacity-75" href target="_blank" rel="noreferrer">
                  <span className="sr-only"> Twitter </span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a className="hover:opacity-75" href target="_blank" rel="noreferrer">
                  <span className="sr-only"> GitHub </span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a className="hover:opacity-75" href target="_blank" rel="noreferrer">
                  <span className="sr-only"> Dribbble </span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="font-medium">Company</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href>
                    {" "}
                    About{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    Meet the Team{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    History{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    Careers{" "}
                  </a>
                </nav>
              </div>
              <div>
                <p className="font-medium">Services</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href>
                    {" "}
                    1on1 Coaching{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    Company Review{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    Accounts Review{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    HR Consulting{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    SEO Optimisation{" "}
                  </a>
                </nav>
              </div>
              <div>
                <p className="font-medium">Helpful Links</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href>
                    {" "}
                    Contact{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    FAQs{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    Live Chat{" "}
                  </a>
                </nav>
              </div>
              <div>
                <p className="font-medium">Legal</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href>
                    {" "}
                    Privacy Policy{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    Terms &amp; Conditions{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    Returns Policy{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    Accessibility{" "}
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <p className="mt-8 text-xs text-gray-800">© 2022 StudyR</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
