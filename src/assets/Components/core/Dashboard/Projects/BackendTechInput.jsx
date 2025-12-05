import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

const BackendTechInput = ({ setValue }) => {
  const [backendTech, setBackendTech] = useState([]);
  const [typedWord, setTypedWord] = useState("");

  const handleChange = (e) => {
    setTypedWord(e.target.value);
  };

  const handleKey = (event) => {
    const cleanWord = typedWord.toLowerCase().trim();

    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();

      if (!cleanWord || backendTech.includes(cleanWord)) return;

      setBackendTech((prev) => [...prev, cleanWord]);
      setTypedWord("");
    }

    if (event.key === "Backspace" && typedWord === "") {
      setBackendTech((prev) => prev.slice(0, prev.length - 1));
    }
  };

  const removeTag = (index) => {
    setBackendTech((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    setValue("backendTech", backendTech); // RHF field name
  }, [backendTech, setValue]);

  return (
    <div className="flex flex-col gap-2 w-full">
      <label>
        <p className="text-xl cursor-pointer">Backend tech</p>

        <input
          type="text"
          placeholder="Node, Express, MongoDB..."
          className="FormStyle w-full py-2 px-3"
          value={typedWord}
          onChange={handleChange}
          onKeyDown={handleKey}
        />
      </label>

      <div className="flex gap-2 flex-wrap mt-1">
        {backendTech.map((tech, index) => (
          <div
            key={index}
            className="
              bg-[#1b7288] text-white rounded px-3 py-1 
              flex items-center gap-2 capitalize
              transition-all duration-300
              hover:bg-[#219ebc] hover:shadow-lg
              animate-fadeIn
            "
          >
            <p className="text-sm">{tech}</p>

            <button
              onClick={() => removeTag(index)}
              className="text-white/80 hover:text-white 
                         hover:bg-white/20 p-[2px] rounded-full transition"
            >
              <RxCross2 size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BackendTechInput;
