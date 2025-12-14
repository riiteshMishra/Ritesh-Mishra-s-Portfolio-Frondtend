import React, { useState, useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";

const FrontendStackInput = ({ setValue }) => {
  const [frontendTech, setFrontendTech] = useState([]);
  const [typedWord, setTypedWord] = useState("");
  const [valueChanged, setValueChanged] = useState(false);
  const [frontendArr, setFrontendArr] = useState([]);
  // const frontendRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setTypedWord(value);

    const arr = value
      .toLowerCase()
      .trim()
      .split(",")
      .map((i) => i.trim())
      .filter((i) => i != "");

    setFrontendArr(arr);
  };

  const handleKey = (event) => {
    const cleanWord = typedWord.toLowerCase().trim();

    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();

      if (!cleanWord || frontendTech.includes(cleanWord)) return;

      setFrontendTech((prev) => [...prev, cleanWord]);
      setTypedWord("");
      setFrontendArr([]);
      setValueChanged(true);
    }

    // Backspace → delete last tag when input empty
    if (event.key === "Backspace" && typedWord === "") {
      setFrontendTech((prev) => prev.slice(0, prev.length - 1));
      setValueChanged(true);
    }
  };

  // Remove tag
  const removeTag = (index) => {
    setFrontendTech((prev) => prev.filter((_, i) => i !== index));
    setValueChanged(true);
  };
  //  value set
  useEffect(() => {
    setValue("frontendTech", valueChanged ? frontendTech : frontendArr);
  }, [frontendTech, frontendArr, valueChanged, setValue]);
  return (
    <div className="flex flex-col gap-2 w-full">
      <label>
        <p className="text-xl cursor-pointer">Frontend tech</p>

        <input
          type="text"
          placeholder="React, Tailwind, Redux..."
          className="FormStyle w-full py-2 px-3"
          value={typedWord}
          onChange={handleChange}
          onKeyDown={handleKey}
          // ref={frontendRef}
        />
      </label>

      {/* tags */}
      <div className="flex gap-2 flex-wrap mt-1">
        {frontendTech.map((tech, index) => (
          <div
            key={index}
            className="
              bg-[#1b7288] text-white rounded px-3 py-1 
              flex items-center gap-2 
              transition-all duration-300
              hover:bg-[#219ebc] hover:shadow-lg
              animate-fadeIn
              capitalize
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

export default FrontendStackInput;
