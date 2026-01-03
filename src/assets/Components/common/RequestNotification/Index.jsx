import { useEffect, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import Ui from "./Ui";

const RequestNotification = () => {
  const [panelOpen, setPanelOpen] = useState(false);


  // scroll block 
  useEffect(() => {
    if (panelOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [panelOpen]);
  return (
    <section>
      <IoMdNotificationsOutline
        className={`cursor-pointer text-xl hover:scale-105 hover:text-yellow-200 ${
          panelOpen ? "text-yellow-400" : "text-gray-200"
        }`}
        onClick={() => setPanelOpen((prev) => !prev)}
      />

      {panelOpen && <Ui setPanelOpen={setPanelOpen} />}
    </section>
  );
};

export default RequestNotification;
