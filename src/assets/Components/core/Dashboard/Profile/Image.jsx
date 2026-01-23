import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import Edit from "../../../common/Edit";
import { motion } from "framer-motion";

// animations
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// gradients
const gradients = [
  "from-pink-500/30 via-purple-500/20 to-indigo-500/30",
  "from-emerald-500/30 via-teal-500/20 to-cyan-500/30",
  "from-orange-500/30 via-amber-500/20 to-yellow-500/30",
  "from-sky-500/30 via-blue-500/20 to-indigo-500/30",
  "from-rose-500/30 via-fuchsia-500/20 to-purple-500/30",
  "from-lime-500/30 via-green-500/20 to-emerald-500/30",
];

const Image = () => {
  const { user } = useSelector((state) => state.profile);
  const socialLinks = user?.profile?.socials || {};

  const randomGradient =
    gradients[Math.floor(Math.random() * gradients.length)];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.15 } } }}
      className={`relative backdrop-blur border border-gray-700 
      rounded-2xl p-6 flex flex-col lg:flex-row gap-8 
      items-center bg-gradient-to-br ${randomGradient}`}
    >
      {/* Edit */}
      <motion.div variants={fadeUp} className="absolute top-4 right-4">
        <Edit path="/dashboard/settings" />
      </motion.div>

      {/* Avatar */}
      <motion.div variants={fadeUp} whileHover={{ scale: 1.05 }}>
        <img
          src={user?.image}
          alt="user-avatar"
          className="w-[180px] h-[180px] rounded-full object-cover ring-4 ring-gray-700"
        />
      </motion.div>

      {/* Info */}
      <div className="flex flex-col gap-5">
        {/* Name & email */}
        <motion.div variants={fadeUp} className="text-center lg:text-left">
          <h2 className="text-3xl font-semibold capitalize">
            {user?.firstName} {user?.lastName}
          </h2>
          <p className="text-gray-300 mt-1">{user?.email}</p>
        </motion.div>

        {/* Socials */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap gap-4 bg-black/40 border border-gray-700 rounded-xl px-5 py-3 w-fit"
        >
          {socialLinks.facebook ? (
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-2xl"
            >
              <FaFacebook />
            </motion.a>
          ) : (
            <FaFacebook className="opacity-30 text-2xl" />
          )}

          {socialLinks.instagram ? (
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 text-2xl"
            >
              <FaInstagram />
            </motion.a>
          ) : (
            <FaInstagram className="opacity-30 text-2xl" />
          )}

          {socialLinks.linkedin ? (
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 text-2xl"
            >
              <FaLinkedin />
            </motion.a>
          ) : (
            <FaLinkedin className="opacity-30 text-2xl" />
          )}

          {socialLinks.x ? (
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={socialLinks.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 text-2xl"
            >
              <FaTwitter />
            </motion.a>
          ) : (
            <FaTwitter className="opacity-30 text-2xl" />
          )}

          {socialLinks.github ? (
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 text-2xl"
            >
              <FaGithub />
            </motion.a>
          ) : (
            <FaGithub className="opacity-30 text-2xl" />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Image;
