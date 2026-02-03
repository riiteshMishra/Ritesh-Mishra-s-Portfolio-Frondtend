import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

import CodeUi from "../../../Blog/blog_ui/CodeUi";
import ImageUi from "../../../Blog/blog_ui/ImageUi";
import ListUi from "../../../Blog/blog_ui/ListUi";
import TextUi from "../../../Blog/blog_ui/TextUi";
import VideoUi from "../../../Blog/blog_ui/VideoUi";

const BlogAccordion = ({ contents }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  return (
    <section className="space-y-6">
      {contents?.map((content) => {
        const isOpen = openSection === content._id;

        return (
          <motion.div
            key={content._id}
            layout
            className="
              rounded-xl
              border border-gray-700
              bg-gradient-to-br from-[#1f2933] to-[#111827]
              shadow-lg overflow-hidden
            "
          >
            {/* SECTION HEADER */}
            <motion.div
              onClick={() => toggleSection(content._id)}
              className="
                px-5 py-4 cursor-pointer
                flex justify-between items-start gap-4
                bg-[#1f363d] 
                border-b border-gray-700
              rounded-xl
              "
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-100">
                  {content.sectionName}
                </h2>
                <p className="text-sm text-gray-400">{content.description}</p>
              </div>

              {/* ARROW */}
              <motion.span
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-gray-300 mt-1"
              >
                <IoIosArrowForward />
              </motion.span>
            </motion.div>

            {/* SUB SECTIONS */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  layout
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="divide-y divide-gray-700 overflow-hidden"
                >
                  {content.subSections?.map((subSection) => (
                    <motion.div
                      key={subSection._id}
                      layout
                      className="
                        px-5 py-4
                        bg-black/20
                      "
                    >
                      {/* SUB SECTION TITLE */}
                      <h3 className="mb-2 text-base font-medium text-gray-200">
                        {subSection.title}
                      </h3>

                      {/* SUB SECTION CONTENT */}
                      <div className="text-sm text-gray-300 leading-relaxed">
                        {subSection.type === "text" && (
                          <TextUi data={subSection} />
                        )}

                        {subSection.type === "code" && (
                          <CodeUi data={subSection} />
                        )}

                        {subSection.type === "video" && (
                          <VideoUi data={subSection} />
                        )}

                        {subSection.type === "image" && (
                          <ImageUi data={subSection} />
                        )}

                        {subSection.type === "list" && (
                          <ListUi data={subSection} />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </section>
  );
};

export default BlogAccordion;
