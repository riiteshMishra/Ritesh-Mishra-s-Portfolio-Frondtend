import { Helmet } from "react-helmet-async"
import Ritesh from "/ritesh.jpg"

import Contact from "./Contact"
import Intro from "./Intro"
import UseFullLinks from "./UseFullLinks"

const Footer = () => {

  return (

    <footer
      role="contentinfo"
      aria-label="Ritesh Mishra Portfolio Footer"
      className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-transparent to-white/[0.03] backdrop-blur-xl text-white py-16"
    >

      <Helmet>

        <title>Ritesh Mishra — Full Stack Developer</title>

        <meta
          name="description"
          content="Ritesh Mishra is a MERN Stack Developer specializing in React.js, Node.js, Express.js, MongoDB, Tailwind CSS, and modern web applications."
        />

        <meta
          name="keywords"
          content="Ritesh Mishra, MERN Stack Developer, React Developer, Full Stack Developer, Node.js, MongoDB, Tailwind CSS, Portfolio"
        />

        <meta
          name="author"
          content="Ritesh Mishra"
        />

        <link
          rel="canonical"
          href="https://riteshmishra.online"
        />

        {/* open graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://riteshmishra.online" />
        <meta property="og:title" content="Ritesh Mishra — Full Stack Developer" />
        <meta property="og:description" content="MERN Stack Developer building scalable, responsive web applications with modern UI and clean architecture." />
        <meta property="og:image" content="https://riteshmishra.online/og-image.webp" />

        {/* twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://riteshmishra.online" />
        <meta name="twitter:title" content="Ritesh Mishra — Full Stack Developer" />
        <meta name="twitter:description" content="MERN Stack Developer building scalable, responsive web applications with modern UI and clean architecture." />
        <meta name="twitter:image" content="https://riteshmishra.online/og-image.webp" />

        {/* structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ritesh Mishra",
            "url": "https://riteshmishra.online",
            "email": "riteshmishra.dev@gmail.com",
            "jobTitle": "Full Stack Developer",
            "description": "MERN Stack Developer specializing in React.js, Node.js, Express.js, MongoDB, Tailwind CSS, and modern web applications.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lucknow",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://github.com/riiteshMishra",
              "https://www.linkedin.com/in/ritesh-mishra-059519352"
            ]
          })}
        </script>

      </Helmet>

      {/* background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1300px] mx-auto px-6">

        {/* hidden seo text */}
        <p className="sr-only">
          Ritesh Mishra is a Full Stack MERN Developer specializing in React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Framer Motion, and modern web applications.
        </p>

        {/* footer grid */}
        <div className="flex justify-between flex-col gap-14 sm:flex-row flex-wrap">

          {/* intro */}
          <section aria-labelledby="footer-about">
            <h2 id="footer-about" className="sr-only">About Ritesh Mishra</h2>
            <Intro />
          </section>

          {/* contact */}
          <section aria-labelledby="footer-contact">
            <h2 id="footer-contact" className="sr-only">Contact Information</h2>
            <Contact />
          </section>

          {/* links */}
          <nav aria-labelledby="footer-links">
            <h2 id="footer-links" className="sr-only">Quick Links</h2>
            <UseFullLinks />
          </nav>

        </div>

        {/* divider */}
        <div className="my-10 h-px w-full bg-white/10" />

        {/* bottom — avatar + copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="flex items-center gap-3">

            <div className="relative shrink-0">

              <img
                src={Ritesh}
                alt="Ritesh Mishra — Full Stack Developer from Lucknow India"
                className="w-9 h-9 rounded-full object-cover object-top border border-white/15 pointer-events-none"
              />

              {/* online dot */}
              <span
                className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0a0a0a]"
                aria-label="Online"
              />

            </div>

            <p className="text-sm text-white/45">
              © {new Date().getFullYear()} Ritesh Mishra. All rights reserved.
            </p>

          </div>

          <p className="text-sm text-white/30">
            Built with React, Tailwind CSS & Framer Motion
          </p>

        </div>

      </div>

    </footer>

  )
}

export default Footer