import React from "react";
import { FaGithub, FaLinkedin, FaDownload, FaWhatsapp } from "react-icons/fa";

const Intro = () => {
  return (
    <section className=" px-6 max-w-[400px] h-fit w-fit">
      <div className="shadow-lg rounded-2xl">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-indigo-600">Ritesh Mishra</span>
          </h1>

          <p className="mt-2 text-lg text-slate-600">Full Stack Developer</p>

          <p className="mt-4 text-slate-700 max-w-2xl">
            I’m a passionate MERN Stack developer who loves building beautiful,
            responsive, and functional web applications. My goal is to create
            impactful digital experiences through clean code and modern UI.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3 justify-between">
            <a
              href="https://wa.me/918765432100" // <-- apna WhatsApp number daalna
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-green-600 text-white font-medium shadow hover:bg-green-700 transition-all duration-200"
            >
              <FaWhatsapp className="text-xl" />
              Whatsapp
            </a>

            <a
              href="#" // yaha Resume ka drive link dalna hai
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-sm font-medium hover:bg-slate-50 hover:text-black"
            >
              <FaDownload />
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
