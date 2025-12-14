import React, { useState, useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";

const BackendTechInput = ({ setValue }) => {
  const [backendTech, setBackendTech] = useState([]);
  const [typedWord, setTypedWord] = useState("");
  const [valueChanged, setValueChanged] = useState(false);
  const [backendArr, setBackendArr] = useState([]);
  const backendRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setTypedWord(value);

    // phone me key handle nhi hoti
    const arr = value
      .toLowerCase()
      .split(",")
      .map((v) => v.trim())
      .filter((v) => v !== "");

    setBackendArr(arr);
  };

  const handleKey = (event) => {
    const cleanWord = typedWord.toLowerCase().trim();

    // ENTER or COMMA → Add tag
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();

      if (!cleanWord || backendTech.includes(cleanWord)) return;

      setBackendTech((prev) => [...prev, cleanWord]);
      setTypedWord("");
      setValueChanged(true); // FIX: user changed value
    }

    // BACKSPACE → Remove last tag
    if (event.key === "Backspace" && typedWord === "") {
      setBackendTech((prev) => prev.slice(0, prev.length - 1));
      setValueChanged(true); // FIX
    }
  };

  const removeTag = (index) => {
    setBackendTech((prev) => prev.filter((_, i) => i !== index));
    setValueChanged(true); // FIX
  };

  // set the value
  useEffect(() => {
    setValue("backendTech", valueChanged ? backendTech : backendArr);
  }, [backendTech, backendArr, valueChanged, setValue]);
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
          // ref={backendRef}
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
