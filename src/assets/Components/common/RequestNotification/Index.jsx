import { useEffect, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import Ui from "./Ui";

const RequestNotification = () => {
  const [panelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = panelOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [panelOpen]);

  return (
    <section className="relative">
      {/* Bell Icon */}
      <IoMdNotificationsOutline
        className={`cursor-pointer text-xl transition
          hover:scale-105 hover:text-yellow-200
          ${panelOpen ? "text-yellow-400" : "text-gray-200"}
        `}
        onClick={(e) => {
          e.stopPropagation();
          setPanelOpen((prev) => !prev);
        }}
      />

      {/* Panel (anchored) */}
      {panelOpen && <Ui setPanelOpen={setPanelOpen} />}
    </section>
  );
};

export default RequestNotification;
