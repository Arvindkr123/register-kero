"use client";

import ContactUs from "@/components/contact-us/ContactUs";
import FaqQuestions from "@/components/faq-questions/Faq-questions";
import MainHero from "@/components/hero/MainHero";
import ManageService from "@/components/manage_service/ManageService";
import { JobsFormData } from "@/components/new-jobs-forms/JobsFormData";

import TestimonialSlider from "@/components/testimonial_sider/TestiMonialSider";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-[585px] relative p-5 sm:p-20">
        {/* <video
          className="absolute inset-0 w-full aspect-video h-[585px]  object-cover -z-10"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/queuevideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <Image
          src={"/works/logoWebsite.webp"}
          alt="logo"
          width={600}
          height={600}
          className="absolute inset-0 w-full h-full  object-fill -z-10"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="w-auto sm:w-[700px] h-[466px] z-50">
          <div className="google-section relative">
            <Image
              src={"/ratingStar.png"}
              width={210}
              height={20}
              alt="rating"
            />
            <h1 className="text-white absolute -top-[3px] left-6 bottom-2 font-bold tracking-tighter">
              Google Rating
            </h1>
          </div>

          <div className="content-section bg-black bg-opacity-60 p-2 my-4">
            <h1 className="text-gray-50 text-xl sm:text-3xl font-medium my-4">
              Simplify Your Business Compliance with Online Help 24X7 – Your
              One-Stop Solution for Online work, School home works, and online
              projects, online Job forms, for goverment and private sectors.
            </h1>
          </div>

          <div className="buttons flex my-4 cursor-pointer">
            <p className="bg-blue-950 text-white p-2 cursor-pointer">
              Talk to us for help - Arun Sharma(B.Tech) IT
            </p>
            <p className="bg-blue-950 text-white p-2 cursor-pointer">
              Call us 9086269401
            </p>
          </div>
        </div>
      </div>

      {/* company services start here */}
      <div id="ourServicesId">
        <video
          className="aspect-video object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/queuevideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div id="jobsFormId" className="container mx-auto p-5 bg-white">
        <h3 className="text-center text-xl text-red-600">
          New Jobs Form Available
        </h3>
        <ul>
          {JobsFormData.map((jobform, index) => {
            return (
              <li key={index} className="text-black hover:bg-slate-400 p-3">
                <Link href={jobform?.thirdHref}>{jobform.second}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* about section  */}
      <div
        id="aboutIdRegisterKero"
        className="about-section bg-white flex flex-col md:flex-row sm:flex-wrap lg:flex-nowrap gap-5 md:justify-between p-5 sm:p-10"
      >
        {/* Content Section */}
        <div className="content flex flex-col w-full md:w-[664px] space-y-6">
          <h1 className="text-[#EB8D15]">WELCOME TO ONLINE HELP 24X7</h1>
          <h2 className="text-2xl font-bold tracking-wider text-[#EB8D15]">
            <span className="text-black">About</span> Online HELP 24X7
          </h2>
          <p className="text-gray-800 leading-relaxed">
            क्या आपको भी दुकान पर जाकर काम करवाने में समय और मेहनत लगती है? लंबी
            लाइन, भीड़, और समय की बर्बादी... ये सब परेशानियाँ अब खत्म हो सकती
            हैं
            <br />
            <br />
            अब आप घर बैठे, ऑनलाइन अपना काम आसानी से कर सकते हैं। बस कुछ क्लिक्स
            में, आपका काम हो जाएगा!
          </p>

          <div className="buttons flex my-4 cursor-pointer">
            <p className="bg-blue-950 text-white p-2 cursor-pointer">
              Talk to us for help - Arun Sharma(B.Tech) IT
            </p>
            <p className="bg-blue-950 text-white p-2 cursor-pointer">
              Call us 9086269401
            </p>
          </div>
        </div>

        {/* Image Section */}
        <Image
          src="/team-members.jpg"
          width={584}
          height={422}
          alt="Team collaboration illustration"
          className="rounded-md shadow-lg"
        />
      </div>

      {/* Contact Us start here */}
      <ContactUs />
      {/* Contact Us END here */}

      {/* choose section area */}
      <div
        className="bg-white p-5 sm:p-10 flex flex-col sm:flex-row sm:justify-evenly
      "
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row justify-between gap-5">
            <div className="content">
              <h1 className="text-[#EB8D15] tracking-wider">
                WHY ONLINE HLEP 24X7
              </h1>
              <h1 className="text-[#272D37] font-bold text-3xl tracking-wider my-5">
                Why Choose ONLINE HLEP 24X7
              </h1>
              <p className="text-[#0D1216] text-lg leading-relaxed">
                लगातार सेवाओं और परिणामों के साथ ही लोगों के साथ विश्वास बनता
                है, <br />
                और यही हमें व्यवसाय को बेहतर ढंग से सेवा प्रदान करने में मदद
                करता है।
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-5">
              <div className="card bg-[#FCDDEC] w-[288px] h-[215px] text-black flex flex-col items-center p-5">
                <svg
                  width="38"
                  height="41"
                  viewBox="0 0 38 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.3763 6.5625C36.7825 7.1875 37.72 8.51562 37.72 10C37.72 27.3438 27.095 36.9531 20.3763 39.7656C19.4388 40.1562 18.4231 40.1562 17.4856 39.7656C9.12625 36.25 0.220001 25.5469 0.220001 10C0.220001 8.51562 1.07938 7.1875 2.48563 6.5625L17.4856 0.3125C17.9544 0.15625 18.4231 0.078125 18.97 0.078125C19.4388 0.078125 19.9075 0.15625 20.3763 0.3125L35.3763 6.5625ZM18.97 34.9219C26.2356 31.25 32.4075 22.6562 32.6419 10.8594L18.97 5.15625V34.9219Z"
                    fill="#F45C20"
                  />
                </svg>
                <h1 className="text-black font-bold text-center my-4">
                  गोपनीय और सुरक्षित
                </h1>
                <h1 className="text-center text-gray-500">
                  आपकी सारी निजी जानकारी हमारे साथ <br />
                  सुरक्षित है
                </h1>
              </div>
              <div className="card bg-[#F1FBF3] w-[288px] h-[215px] text-black flex flex-col items-center p-5">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.395 20C39.395 30.7031 30.645 39.375 20.02 39.375C9.31689 39.375 0.64502 30.7031 0.64502 20C0.64502 9.375 9.31689 0.625 20.02 0.625C30.645 0.625 39.395 9.375 39.395 20ZM17.7544 30.3125L32.1294 15.9375C32.5981 15.4688 32.5981 14.6094 32.1294 14.1406L30.3325 12.4219C29.8638 11.875 29.0825 11.875 28.6138 12.4219L16.895 24.1406L11.3481 18.6719C10.8794 18.125 10.0981 18.125 9.62939 18.6719L7.83252 20.3906C7.36377 20.8594 7.36377 21.7188 7.83252 22.1875L15.9575 30.3125C16.4263 30.7812 17.2856 30.7812 17.7544 30.3125Z"
                    fill="#3DCD5C"
                  />
                </svg>

                <h1 className="text-black font-bold text-center my-4">
                  कोई छुपा हुआ शुल्क नहीं
                </h1>
                <h1 className="text-center text-gray-500">
                  आपके सामने सब कुछ स्पष्ट है, <br />
                  बिना किसी छुपे हुए शुल्क या शर्तों के
                </h1>
              </div>
            </div>
          </div>
          <div className="flex gap-5 flex-col lg:flex-row justify-end">
            <div className="card bg-[#EDF3FF] w-[288px] h-[215px] text-black flex flex-col items-center p-5">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.985 0.625C30.6881 0.625 39.36 9.29688 39.36 20C39.36 30.7031 30.6881 39.375 19.985 39.375C9.28189 39.375 0.610016 30.7031 0.610016 20C0.610016 9.29688 9.28189 0.625 19.985 0.625ZM26.235 13.75C24.8288 13.75 23.735 14.9219 23.735 16.25C23.735 17.6562 24.8288 18.75 26.235 18.75C27.5631 18.75 28.735 17.6562 28.735 16.25C28.735 14.9219 27.5631 13.75 26.235 13.75ZM13.735 13.75C12.3288 13.75 11.235 14.9219 11.235 16.25C11.235 17.6562 12.3288 18.75 13.735 18.75C15.0631 18.75 16.235 17.6562 16.235 16.25C16.235 14.9219 15.0631 13.75 13.735 13.75ZM28.8913 27.1094C29.985 25.7812 28.0319 24.2188 27.0163 25.4688C25.2194 27.5781 22.7194 28.75 19.985 28.75C17.2506 28.75 14.6725 27.5781 12.8756 25.4688C11.86 24.2188 9.90689 25.7812 11.0006 27.1094C13.1881 29.7656 16.4694 31.25 19.985 31.25C23.4225 31.25 26.7038 29.7656 28.8913 27.1094Z"
                  fill="#2F6AE1"
                />
              </svg>

              <h1 className="text-black font-bold text-center my-4">
                गारंटीड संतुष्टि
              </h1>
              <h1 className="text-center text-gray-500">
                हम सुनिश्चित करते हैं कि आप हमारी दी गई सेवाओं से <br />
                100% संतुष्ट रहें
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Blogs start here */}
      <div id="blogRegisterId" className="bg-white h-auto  p-5">
        <div className="main text-center">
          <h1 className="text-[#EB8D15] tracking-wider my-5">
            EXPLORE OUR WORKS
          </h1>
          <h1 className="text-black text-2xl tracking-wide font-bold">
            Accelerate Digital Transformation
          </h1>
        </div>

        <div className="blog-sections w-auto xl:w-[1280px] mt-5 m-auto">
          <div className="blogs flex flex-wrap gap-5 justify-center">
            {/* blog card start here */}
            <div className="card w-[384px] flex flex-col justify-around border-2 border-blue-600 p-3 rounded">
              <Image
                src={"/IMG-20250209-WA0004.jpg"}
                width={384}
                height={250}
                className="object-fill w-full hover:scale-90 transition-all"
                alt="ब्लॉग छवि"
              />

              <div className="content text-black">
                <p
                  target="_blank"
                  className="flex items-center justify-between font-bold text-black cursor-pointer text-xl "
                >
                  Academic, Educational, Medical, Health, School, Lectures,
                  Student, Course, Assignment, Webinar & Events Presentation
                </p>
                <div className="flex flex-wrap gap-3 p-4">
                  {[
                    "1st class",
                    "2nd class",
                    "3rd class",
                    "4th Class",
                    "5th class",
                    "6th class",
                    "7th class",
                    "Any Class",
                    "Assignments",
                    "Engineering Assigments And PPT",
                    "Any Class Assigments And PPT",
                  ].map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-500 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p>
                  Let me handle your assignment or project presentation
                  effectively as you maximize your time on some other important
                  tasks, while working with your budget and getting it done
                  swiftly within 24hrs.
                </p>
              </div>
            </div>
            <div className="card w-[384px]  flex flex-col justify-around border-2 border-blue-600 p-3 rounded">
              <Image
                src={
                  "/works/do-school-software-project-for-developer-students.png"
                }
                width={384}
                height={250}
                className="object-fill w-full hover:scale-90 transition-all"
                alt="ब्लॉग छवि"
              />

              <div className="content text-black">
                <p
                  target="_blank"
                  className="flex items-center justify-between font-bold text-black cursor-pointer text-xl "
                >
                  I will do school software project for developer students in
                  HTML, CSS, JavaScript, React JS, Nodejs, other contact us
                </p>
                <div className="flex flex-wrap gap-3 p-4">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React JS",
                    "FullStack Project",
                    "NodeJS",
                    "NextJs",
                    "MongoDB",
                    "Sql",
                    "PHP",
                  ].map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-500 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="card w-[384px] flex flex-col justify-around border-2 border-blue-600 p-3 rounded">
              <Image
                src={"/IMG-20250209-WA0003.jpg"}
                width={384}
                height={250}
                className="object-fill w-full hover:scale-90 transition-all"
                alt="ब्लॉग छवि"
              />

              <div className="content text-black">
                <p
                  target="_blank"
                  className="flex items-center justify-between font-bold text-black text-xl"
                >
                  I will write, edit your CV, resume, cover letter and linkedin
                  profile
                </p>
                <div className="flex flex-wrap gap-3 p-4">
                  {[
                    "HR Consulting",
                    "Recruitment",
                    "CV Writing",
                    "CV Editing",
                    "Resume Design",
                    "Proofreading",
                    "Editing",
                    "Career Advice",
                    "Career Coaching",
                    "HR Management",
                  ].map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-500 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="card w-[384px] flex flex-col justify-around border-2 border-blue-600 p-3 rounded">
              <Image
                src={"/Government-Jobs.png"}
                width={384}
                height={250}
                className="object-fill w-full hover:scale-90 transition-all"
                alt="ब्लॉग छवि"
              />

              <div className="content text-black">
                <p
                  target="_blank"
                  className="flex items-center justify-between font-bold text-black text-xl"
                >
                  I will search and apply for jobs on your behalf
                </p>
                <div className="flex flex-wrap gap-3 p-4">
                  {[
                    "HR Consulting",
                    "Recruitment",
                    "Linkedin recruiting",
                    "Job application",
                    "Job search",
                    "Web research jobs",
                    "Search & apply career consulting",
                    "Resume design",
                    "Job posting",
                    "Private Job",
                    "Industrial Jobs Any Fields",
                  ].map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-500 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card w-[384px]  flex flex-col justify-around border-2 border-blue-600 p-3 rounded">
              <Image
                src={"/eBook.avif"}
                width={384}
                height={250}
                className="object-fill w-full hover:scale-90 transition-all"
                alt="ब्लॉग छवि"
              />

              <div className="content text-black">
                <p
                  target="_blank"
                  className="flex items-center justify-between font-bold text-black text-xl"
                >
                  Are you looking to transform your ordinary documents like
                  EBooks/PDFs/Novels etc into engaging and visually enticing
                  designs that are ready to publish and print ready?
                </p>

                <div className="flex flex-wrap gap-3 p-4">
                  {[
                    "Ebook Layout design",
                    "eBook formatting and layout",
                    "Book Formatting and Layout",
                    "PDF edit",
                  ].map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-500 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="card w-[384px] h-[400px] flex flex-col justify-between border-2 border-blue-600 p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src={
                  "/works/make-tour-booking-hotel-booking-bus-ticket-selling-seat-reservation-in-wp.png"
                }
                width={384}
                height={250}
                className="object-cover w-full hover:scale-95 transition-transform rounded-md"
                alt="ब्लॉग छवि"
              />
              <div className="content text-black mt-3">
                <p className="flex items-center justify-between font-bold text-black text-xl">
                  I will make tour booking, hotel booking, bus ticket selling,
                  seat reservation in wp
                </p>

                <div className="services flex flex-wrap gap-2 mt-3">
                  {[
                    "Flight Booking",
                    "Bus Booking",
                    "Railway Booking",
                    "Other Services",
                  ].map((service, index) => (
                    <span
                      key={index}
                      className="bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md hover:bg-blue-600 transition-colors"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer reviews goes here  */}
      <TestimonialSlider />
    </>
  );
}
