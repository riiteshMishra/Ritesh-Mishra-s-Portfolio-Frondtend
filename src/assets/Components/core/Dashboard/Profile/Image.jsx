import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import Edit from "../../../common/Edit";

const Image = () => {
  const { user } = useSelector((state) => state.profile);
  const socialLinks = user?.profile?.socials || {};

  //   console.log("social links", socialLinks);

  return (
    <div className="flex items-center gap-10 md:flex-row flex-col relative">
      <img
        src={user?.image}
        alt="user-avatar"
        className="h-[200px] w-[200px] rounded-full object-cover cursor-pointer active:border active:border-gray-300"
      />

      {/* socials link and email and user name */}
      <div className="flex lg:flex-row flex-col gap-x-10 lg:items-center gap-y-5">
      
        <div className=" flex  flex-col gap-y-5">

          {/*  Social links */}
          <div className="flex gap-x-5 text-2xl text-white border-[1px] w-fit px-6 py-2 rounded-lg border-gray-500 flex-wrap">
            {/* Facebook */}
            {socialLinks.facebook ? (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform text-blue-600"
              >
                <FaFacebook />
              </a>
            ) : (
              <FaFacebook className="opacity-50 cursor-not-allowed" />
            )}

            {/* Instagram */}
            {socialLinks.instagram ? (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform text-pink-500"
              >
                <FaInstagram />
              </a>
            ) : (
              <FaInstagram className="opacity-50 cursor-not-allowed" />
            )}

            {/* LinkedIn */}
            {socialLinks.linkedin ? (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform text-blue-700"
              >
                <FaLinkedin />
              </a>
            ) : (
              <FaLinkedin className="opacity-50 cursor-not-allowed" />
            )}

            {/* Twitter */}
            {socialLinks.x ? (
              <a
                href={socialLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform text-sky-500"
              >
                <FaTwitter />
              </a>
            ) : (
              <FaTwitter className="opacity-50 cursor-not-allowed" />
            )}

            {/* GitHub */}
            {socialLinks.github ? (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform text-gray-400"
              >
                <FaGithub />
              </a>
            ) : (
              <FaGithub className="opacity-50 cursor-not-allowed" />
            )}
          </div>

          {/* user name */}

          <div className="text-3xl capitalize  flex gap-x-6 flex-col">
            <p>
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-2xl">{user?.email}</p>
          </div>
        </div>

        <Edit path={"/dashboard/settings"} />
      </div>
    </div>
  );
};

export default Image;
