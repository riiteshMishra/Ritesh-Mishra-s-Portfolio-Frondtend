// pehle import karein
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

export const address = {
  name: {
    label: "Name",
    text: "Ritesh Mishra",
  },
  location: {
    label: "Location",
    text: "Balua - 274207, Sukrauli, Kushinagar, Uttar Pradesh, India",
    icon: FaMapMarkerAlt,
  },
  email: {
    label: "Email",
    text: "riteshmishra.dev@gmail.com",
    icon: FaEnvelope,
  },
  phone: {
    label: "Phone",
    text: "+91 95XXXXXX52",
    icon: FaPhoneAlt,
  },
  workingHours: {
    label: "Working Hours",
    text: "Mon – Sat: 10 AM – 6 PM",
    icon: FaClock,
  },
  social: {
    label: "Social",
    links: [
      {
        name: "LinkedIn",
        url: "#",
        icon: FaLinkedin,
      },
      {
        name: "GitHub",
        url: "#",
        icon: FaGithub,
      },
      {
        name: "Twitter",
        url: "#",
        icon: FaTwitter,
      },
    ],
  },
};
