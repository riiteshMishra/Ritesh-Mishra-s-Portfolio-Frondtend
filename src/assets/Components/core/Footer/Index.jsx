import Contact from "./Contact";
import Intro from "./Intro";
import UseFullLinks from "./UseFullLinks";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-white py-12">
      <div className="container  ">
        <div className="grid gap-8 md:gap-10 lg:gap-16 sm:grid-cols-2 lg:grid-cols-3">
          <Intro />
          <Contact />
          <UseFullLinks />
        </div>
        <div className=" h-1 mx-auto border-gray-400 border-b-2 py-4"></div>
        <p className="mt-4 text-gray-500 text-center text-xl">
          © {new Date().getFullYear()} Ritesh Mishra. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
