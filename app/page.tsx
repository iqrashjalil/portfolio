"use client";
import {
  Code,
  Cog,
  FilePenLine,
  FolderDot,
  Github,
  House,
  Instagram,
  Link,
  Linkedin,
  Monitor,
  Send,
  SquareCode,
  Star,
  StarIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/iqrashjalil.pdf";
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <main className="relative bg-black">
      <section
        id="home"
        className="p-10 min-h-[100vh] w-full flex flex-col lg:flex-row justify-center lg:h-[100vh] gap-6"
      >
        <div className="flex flex-col w-full lg:w-72 gap-6">
          <div className="bg-[#252525] flex flex-col gap-4 p-4  rounded-3xl">
            <div className="flex gap-2 justify-center items-center">
              <div className="w-8 h-8 bg-[#FF3131] rounded-full"></div>
              <h1
                style={{ fontFamily: "var(--font-grechen)" }}
                className="font-extrabold  text-white text-2xl"
              >
                Iqrash Jalil
              </h1>
            </div>
            <div
              className="w-full rounded-3xl h-50 relative aspect-[4/1]"
              style={{
                backgroundImage:
                  "conic-gradient(from 150deg at 50% 45%, hsl(358,80%,20%) 0deg, hsl(358,80%,48%) 140deg, hsl(358,80%,20%) 360deg)",
              }}
            >
              <Image
                src="/images/2.png"
                alt="My Image"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="text-white text-sm">
              With knowledge in web development and design, I offer the best
              projects resulting in quality work.
            </p>
            <button
              onClick={handleDownload}
              className="bg-[#ff3131] rounded-3xl font-extrabold text-white p-3 cursor-pointer hover:bg-red-600 transition-all duration-150"
            >
              Download CV
            </button>
          </div>
          <div className="bg-[#252525] rounded-3xl p-4">
            <h1 className="font-extrabold text-white text-xl">Skills</h1>
            <div className="mt-4 flex gap-6 flex-wrap justify-center">
              <div className="bg-white rounded-full w-[40px] flex justify-center items-center">
                {" "}
                <Image
                  src="/images/nextjs.png"
                  alt="My Image"
                  width={40}
                  height={40}
                />
              </div>
              <Image
                src="/images/react.png"
                alt="My Image"
                width={40}
                height={40}
              />
              <Image
                src="/images/redux.png"
                alt="My Image"
                width={40}
                height={40}
              />
              <Image
                src="/images/tailwindcss.png"
                alt="My Image"
                width={40}
                height={40}
              />
              <Image
                src="/images/typescript.png"
                alt="My Image"
                width={40}
                height={40}
              />
              <Image
                src="/images/javascript.png"
                alt="My Image"
                width={40}
                height={40}
              />
              <Image
                src="/images/nodejs.png"
                alt="My Image"
                width={40}
                height={40}
              />{" "}
              <div className="bg-white rounded-full w-[40px] flex justify-center items-center">
                {" "}
                <Image
                  src="/images/express.png"
                  alt="My Image"
                  width={40}
                  height={40}
                />
              </div>
              <Image
                src="/images/mongodb.png"
                alt="My Image"
                width={40}
                height={40}
              />
              <Image
                src="/images/git.png"
                alt="My Image"
                width={40}
                height={40}
              />
              <div className="bg-white rounded-full w-[40px] flex justify-center items-center">
                {" "}
                <Image
                  src="/images/github.png"
                  alt="My Image"
                  width={40}
                  height={40}
                />
              </div>
              <Image
                src="/images/postman.png"
                alt="My Image"
                width={40}
                height={40}
              />
            </div>
            <p className="text-sm text-white mt-4">
              Visit the projects section to see the work done by these
              technologies
            </p>
          </div>
        </div>
        <div className=" lg:w-[40rem] w-full lg:h-auto h-[25rem] relative aspect-[4/1] rounded-3xl">
          <Image
            src="/images/4.jpg"
            alt="My Image"
            className="rounded-[5rem] lg:rounded-full"
            fill
            style={{ objectFit: "contain" }}
          />
          <div className="absolute lg:w-80  bottom-8 border left-5 lg:left-10 border-white bg-white/10 backdrop-blur-md rounded-3xl p-4 shadow-md">
            <h1
              style={{ fontFamily: "var(--font-grechen)" }}
              className="text-5xl font-extrabold text-[#ff3131]"
            >
              Iqrash
            </h1>
            <h1
              className="text-5xl font-extrabold text-[#ff3131]"
              style={{ fontFamily: "var(--font-grechen)" }}
            >
              Jalil
            </h1>
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="w-[47.5%] bg-[#ff3131] rounded-3xl font-extrabold text-white p-3 cursor-pointer hover:bg-red-600 transition-all duration-150"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="w-[47.5%] bg-[#252525] rounded-3xl font-extrabold text-white p-3 cursor-pointer hover:bg-[#0a0a0a] transition-all duration-150"
              >
                Services
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[20rem] lg:h-[83vh] pt-20 rounded-3xl p-4 bg-[#252525]">
          <div className="flex">
            <h1 className="text-lg text-white">
              Iqrash Jalil -{" "}
              <span className="font-bold">Full Stack Developer</span>
            </h1>
          </div>
          <p className="text-sm text-white mt-6">
            Located in Chakwal,I have several years of experience in web
            development,carrying out many successfull projects.
          </p>
          <div className="mt-6 flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/iqrashjalil/"
              className="bg-white group cursor-pointer transition-all duration-150 rounded-full p-2 flex justify-center items-center"
            >
              <Linkedin className="text-black group-hover:text-[#FF3131]" />
            </a>
            <a
              href="https://github.com/iqrashjalil"
              className="bg-white group cursor-pointer transition-all duration-150 rounded-full p-2 flex justify-center items-center"
            >
              <Github className="text-black group-hover:text-[#FF3131]" />
            </a>
            <a
              href="https://www.instagram.com/iqrashjalil/"
              className="bg-white group cursor-pointer transition-all duration-150 rounded-full p-2 flex justify-center items-center"
            >
              <Instagram className="text-black group-hover:text-[#FF3131]" />
            </a>
          </div>
          <div
            className="w-full mt-10 rounded-3xl h-50 relative aspect-[4/1]"
            style={{
              backgroundImage:
                "conic-gradient(from 150deg at 50% 45%, hsl(358,80%,20%) 0deg, hsl(358,80%,48%) 140deg, hsl(358,80%,20%) 360deg)",
            }}
          >
            <Image
              src="/images/2.png"
              alt="My Image"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <p className="text-white mt-10 text-sm">
            Contact me through the button below or email me at
            iqrashjalil@gmail.com
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-[#ff3131] rounded-3xl font-extrabold w-full mt-10 text-white p-3 cursor-pointer hover:bg-red-600 transition-all duration-150"
          >
            Contact Me
          </button>
        </div>
      </section>
      <div className="fixed lg:border-0 border border-[#ff3131] flex bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-10 lg:top-[40%] lg:bottom-auto lg:flex-col gap-5 bg-[#252525] p-4 rounded-full z-50">
        <button
          onClick={() => scrollToSection("home")}
          className={`rounded-full cursor-pointer w-10 h-10 flex justify-center items-center  text-white ${
            activeSection === "home" ? "bg-[#ff3131]" : ""
          }`}
        >
          <House />
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className={`rounded-full cursor-pointer w-10 h-10 flex justify-center items-center  text-white ${
            activeSection === "projects" ? "bg-[#ff3131]" : ""
          }`}
        >
          {" "}
          <FolderDot />
        </button>
        <button
          onClick={() => scrollToSection("services")}
          className={`rounded-full cursor-pointer w-10 h-10 flex justify-center items-center  text-white ${
            activeSection === "services" ? "bg-[#ff3131]" : ""
          }`}
        >
          <FilePenLine />
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className={`rounded-full cursor-pointer w-10 h-10 flex justify-center items-center  text-white ${
            activeSection === "experience" ? "bg-[#ff3131]" : ""
          }`}
        >
          <Star />
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className={`rounded-full cursor-pointer w-10 h-10 flex justify-center items-center  text-white ${
            activeSection === "contact" ? "bg-[#ff3131]" : ""
          }`}
        >
          <Send />
        </button>
      </div>
      <section id="projects" className="min-h-[100vh] p-10 w-full text-white">
        <div className="w-full flex justify-center items-center">
          {" "}
          <h1 className="font-bold text-2xl lg:text-5xl">
            RECENT <span className="text-[#ff3131]">PROJECTS</span>
          </h1>
        </div>
        <div className="mt-10 flex gap-10 flex-wrap justify-center">
          <div className="bg-[#252525] w-full lg:w-72 p-4 rounded-3xl">
            <div className="w-full flex justify-center ">
              {" "}
              <Image
                src="/images/streamsupport.png"
                alt="My Image"
                width={300}
                height={100}
                className="rounded-3xl"
                style={{ objectFit: "contain" }}
              />
            </div>
            <h1 className="text-lg font-bold uppercase mt-4">stream Support</h1>
            <p className="text-sm mt-2">
              Stream Support is a utility tool designed for Pakistani content
              creators to enable Super Chat functionality, which is not
              officially supported by YouTube in Pakistan. It provides an
              alternative system for viewers to financially support their
              favorite streamers in real time.
            </p>
            <div className="flex p-2 w-fit rounded-full bg-[#000000] gap-2 mt-2 items-center flex-wrap">
              <Image
                src="/images/react.png"
                alt="My Image"
                width={20}
                height={20}
              />
              <Image
                src="/images/redux.png"
                alt="My Image"
                width={20}
                height={20}
              />
              <Image
                src="/images/javascript.png"
                alt="My Image"
                width={20}
                height={20}
              />
              <div className="bg-white rounded-full w-[20px] flex justify-center items-center">
                {" "}
                <Image
                  src="/images/express.png"
                  alt="My Image"
                  width={20}
                  height={20}
                />
              </div>
              <Image
                src="/images/nodejs.png"
                alt="My Image"
                width={20}
                height={20}
              />
              <Image
                src="/images/tailwindcss.png"
                alt="My Image"
                width={20}
                height={20}
              />
              <Image
                src="/images/git.png"
                alt="My Image"
                width={20}
                height={20}
              />
            </div>
            <button className="mt-4 flex items-center gap-2">
              <Link />{" "}
              <a href="https://streamsupport.vercel.app">Visit Project</a>
            </button>{" "}
          </div>
          <div className="bg-[#252525] w-full lg:w-72 p-4 rounded-3xl">
            <div className="w-full flex justify-center ">
              {" "}
              <Image
                src="/images/teamtrackpic.png"
                alt="My Image"
                width={300}
                height={100}
                className="rounded-3xl"
                style={{ objectFit: "contain" }}
              />
            </div>
            <h1 className="text-lg font-bold uppercase mt-4">Team Track</h1>
            <p className="text-sm mt-2">
              TeamTrack is a project management tool that helps teams
              efficiently collaborate by assigning tasks, tracking progress, and
              managing deadlines. It features role-based access, and a dynamic
              manager-team structure for seamless workflow.
            </p>
            <div className="flex p-2 w-fit rounded-full bg-[#000000] gap-2 mt-2 items-center flex-wrap">
              <Image
                src="/images/react.png"
                alt="My Image"
                width={20}
                height={20}
              />
              <Image
                src="/images/redux.png"
                alt="My Image"
                width={20}
                height={20}
              />
              <Image
                src="/images/tailwindcss.png"
                alt="My Image"
                width={20}
                height={20}
              />
              <div className="bg-white rounded-full w-[20px] flex justify-center items-center">
                {" "}
                <Image
                  src="/images/express.png"
                  alt="My Image"
                  width={20}
                  height={20}
                />
              </div>
              <Image
                src="/images/nodejs.png"
                alt="My Image"
                width={20}
                height={20}
              />
            </div>
            <button className="mt-4 flex items-center gap-2">
              <Link /> <a href="https://teamtrack.vercel.app">Visit Project</a>
            </button>{" "}
          </div>
          <div className="bg-[#252525] w-full lg:w-72 p-4 rounded-3xl">
            <div className="w-full flex justify-center ">
              {" "}
              <Image
                src="/images/moviemingle.png"
                alt="My Image"
                width={300}
                height={100}
                className="rounded-3xl"
                style={{ objectFit: "contain" }}
              />
            </div>
            <h1 className="text-lg font-bold uppercase mt-4">Movie Mingle</h1>
            <p className="text-sm mt-2">
              Movie Mingle is a movie and TV show platform that lets users
              search, filter, and request content based on genres, year, and
              popularity. It includes an admin panel for managing the library
              and fulfilling user requests, and ensuring a smooth experience.
            </p>
            <div className="flex p-2 w-fit rounded-full bg-[#000000] gap-2 mt-2 items-center flex-wrap">
              <Image
                src="/images/react.png"
                alt="My Image"
                width={20}
                height={20}
              />
              <Image
                src="/images/redux.png"
                alt="My Image"
                width={20}
                height={20}
              />
              <Image
                src="/images/tailwindcss.png"
                alt="My Image"
                width={20}
                height={20}
              />
              <div className="bg-white rounded-full w-[20px] flex justify-center items-center">
                {" "}
                <Image
                  src="/images/express.png"
                  alt="My Image"
                  width={20}
                  height={20}
                />
              </div>
              <Image
                src="/images/nodejs.png"
                alt="My Image"
                width={20}
                height={20}
              />
              <Image
                src="/images/mongodb.png"
                alt="My Image"
                width={20}
                height={20}
              />
            </div>
            <button className="mt-4 flex items-center gap-2">
              <Link />{" "}
              <a href="https://movie-mingle-mern-app.vercel.app/">
                Visit Project
              </a>
            </button>
          </div>
          <div className="bg-[#252525] w-full lg:w-72 p-4 rounded-3xl">
            <div className="w-full flex justify-center ">
              {" "}
              <Image
                src="/images/dukaanpk.png"
                alt="My Image"
                width={300}
                height={100}
                className="rounded-3xl"
                style={{ objectFit: "contain" }}
              />
            </div>
            <h1 className="text-lg font-bold uppercase mt-4">Dukaan.pk</h1>
            <p className="text-sm mt-2">
              Dukaan.pk is a full-featured e-commerce platform built for
              Pakistani sellers to manage and grow their online stores. It
              offers product management, secure checkout, and a user-friendly
              interface for a seamless shopping experience.
            </p>
            <div className="flex p-2 w-fit rounded-full bg-[#000000] gap-2 mt-2 items-center flex-wrap">
              <Image
                src="/images/react.png"
                alt="My Image"
                width={20}
                height={20}
              />
              <Image
                src="/images/redux.png"
                alt="My Image"
                width={20}
                height={20}
              />

              <div className="bg-white rounded-full w-[20px] flex justify-center items-center">
                {" "}
                <Image
                  src="/images/express.png"
                  alt="My Image"
                  width={20}
                  height={20}
                />
              </div>
              <Image
                src="/images/nodejs.png"
                alt="My Image"
                width={20}
                height={20}
              />
              <Image
                src="/images/mongodb.png"
                alt="My Image"
                width={20}
                height={20}
              />
            </div>
            <button className="mt-4 flex items-center gap-2">
              <Link /> <a href="https://dukaan-pk.vercel.app/">Visit Project</a>
            </button>
          </div>
        </div>
      </section>
      <section
        id="services"
        className="min-h-[100vh] p-10 w-full text-white bg-black]"
      >
        <div className="w-full uppercase flex justify-center items-center">
          {" "}
          <h1 className="font-bold text-2xl lg:text-5xl">
            Services I <span className="text-[#ff3131]">Offer</span>
          </h1>
        </div>
        <div className="mt-10 lg:h-[40rem] items-center flex flex-wrap justify-center gap-10">
          <div className="w-full lg:w-96 relative bg-[#252525] p-4 rounded-3xl h-72">
            <Code className="absolute text-blue-500 rotate-120 top-10 right-10" />

            <Code className="absolute text-lime-400 rotate-200 bottom-10 left-10" />

            <StarIcon className="absolute text-amber-400 rotate-120 top-20 right-40" />

            <StarIcon className="absolute text-[#ff3131] rotate-120 bottom-20 right-20" />
            <div className="mb-4">
              <div className="w-20 relative h-20 bg-[#ff3131] rounded-full">
                <SquareCode className="absolute bottom-0" size={40} />
              </div>
            </div>
            <h1 className="font-bold">Full Stack Web Development</h1>
            <p className="text-gray-400 text-sm">
              Build complete web apps using the MERN stack with frontend,
              backend, and database integration.
            </p>
          </div>
          <div className="w-full lg:w-96 relative bg-[#252525] p-4 rounded-3xl h-72">
            <Code className="absolute text-blue-500 rotate-120 top-10 right-10" />

            <Code className="absolute text-lime-400 rotate-200 bottom-10 left-10" />

            <StarIcon className="absolute text-amber-400 rotate-120 top-20 right-40" />

            <StarIcon className="absolute text-[#ff3131] rotate-120 bottom-20 right-20" />
            <div className="mb-4">
              <div className="w-20 relative h-20 bg-[#ff3131] rounded-full">
                <Monitor className="absolute bottom-0" size={40} />
              </div>
            </div>
            <h1 className="font-bold">Frontend Web Development</h1>
            <p className="text-gray-400 text-sm">
              Design responsive and modern user interfaces using React.js,
              Tailwind CSS, and Bootstrap.
            </p>
          </div>
          <div className="w-full lg:w-96 relative bg-[#252525] p-4 rounded-3xl h-72">
            <Code className="absolute text-blue-500 rotate-120 top-10 right-10" />

            <Code className="absolute text-lime-400 rotate-200 bottom-10 left-10" />

            <StarIcon className="absolute text-amber-400 rotate-120 top-20 right-40" />

            <StarIcon className="absolute text-[#ff3131] rotate-120 bottom-20 right-20" />
            <div className="mb-4">
              <div className="w-20 relative h-20 bg-[#ff3131] rounded-full">
                <Cog className="absolute bottom-0" size={40} />
              </div>
            </div>
            <h1 className="font-bold">Backend Web Development</h1>
            <p className="text-gray-400 text-sm">
              Create secure APIs, handle databases, and implement server-side
              logic with Node.js and Express.
            </p>
          </div>
        </div>
      </section>
      <section
        id="experience"
        className="min-h-[100vh] p-10 w-full text-white bg-black"
      >
        {" "}
        <div className="w-full flex justify-center items-center">
          {" "}
          <h1 className="font-bold uppercase text-2xl lg:text-5xl">
            Experience or <span className="text-[#ff3131]">work</span>
          </h1>
        </div>
        <div className="mt-10">
          <div className="lg:flex">
            <div className="lg:w-[50%] lg:flex lg:justify-center lg:items-center">
              <h1 className="text-white text-2xl font-extrabold">
                Lloyds Knight, Lahore
              </h1>
            </div>
            <div className="bg-[#252525] lg:w-[30%] mt-4 rounded-3xl p-4">
              <h1 className="font-bold">Full Stack Developer</h1>
              <p className="text-gray-400 text-sm">Oct 2024 - Present</p>
              <p className=" text-sm">
                At Llyods Knight, I’ve grown significantly as a Full Stack
                Developer, building and maintaining scalable web applications
                using the MERN stack. I’ve developed services including team
                collaboration tools, ecommerce platforms, and real-time
                messaging systems. My responsibilities included creating secure
                REST APIs, implementing real-time communication with Socket.IO
                and handling authentication. This role has enhanced my expertise
                in agile development, clean architecture, and end-to-end product
                delivery.
              </p>
            </div>
          </div>
          <div className="lg:flex mt-6">
            <div className="lg:w-[50%] lg:flex lg:justify-center lg:items-center">
              <h1 className="text-white text-2xl font-extrabold">
                InVision, Islamabad
              </h1>
            </div>
            <div className="bg-[#252525] lg:w-[30%] mt-4 rounded-3xl p-4">
              <h1 className="font-bold">Full Stack Developer</h1>
              <p className="text-gray-400 text-sm">Mar 2024 - Sep 2024</p>
              <p className=" text-sm">
                I’ve had the opportunity to work on cutting-edge web solutions
                that blend performance with user-centric design. As a Full Stack
                Developer, I’ve been involved in building interactive
                dashboards, admin panels, and complex backend systems using
                MongoDB, Express, React, and Node.js. I played a key role in
                optimizing API performance, managing database structures, and
                integrating third-party services.
              </p>
            </div>
          </div>
          <div className="lg:flex mt-6">
            <div className="lg:w-[50%] lg:flex lg:justify-center lg:items-center">
              <h1 className="text-white text-2xl font-extrabold">CodSoft</h1>
            </div>
            <div className="bg-[#252525] lg:w-[30%] mt-4 rounded-3xl p-4">
              <h1 className="font-bold">Web Developer</h1>
              <p className="text-gray-400 text-sm">1 Month</p>
              <p className=" text-sm">
                At CodSoft, I gained hands-on experience in full stack
                development, contributing to feature development, debugging, and
                coding under the guidance of senior developers. This internship
                strengthened my skills in team collaboration, version control,
                and agile workflows.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="min-h-screen w-full p-10 text-white bg-black"
      >
        <div className="w-full flex justify-center items-center">
          <h1 className="font-bold uppercase text-2xl lg:text-5xl">
            Contact <span className="text-[#ff3131]">Me</span>
          </h1>
        </div>
        <div className="flex justify-center mt-20">
          <form action="https://formspree.io/f/mdkgdayp" method="POST">
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="bg-gray-600 w-full lg:w-72 p-4 rounded-full border-none outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-gray-600 lg:w-72 w-full p-4 rounded-full border-none outline-none"
              />
            </div>
            <div className="mt-4 w-full">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className="bg-gray-600 min-h-72 w-full p-4 rounded-3xl border-none outline-none"
              ></textarea>
            </div>
            <div className="flex justify-center items-center mt-4">
              <button
                type="submit"
                className="bg-[#ff3131] cursor-pointer rounded-full w-60 font-bold text-lg p-4"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
