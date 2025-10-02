import React, { useState } from "react";

const Tags = ({ setValue }) => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        const newTags = [...tags, inputValue.trim()];
        setTags(newTags);
        setValue("tags", newTags); 
      }
      setInputValue("");
    }
  };

  const removeTag = (tagToRemove) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(newTags);
    setValue("tags", newTags);
  };

  return (
    <label className="flex flex-col gap-2">
      <p>Fill Tags (Press Enter after each tag)</p>
      <input
        type="text"
        className="FormStyle w-full"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a tag and press Enter"
      />

      {/* Tags List */}
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-purple-600 text-white px-2 py-1 rounded flex items-center gap-1"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="ml-1 text-sm"
            >
              ✕
            </button>
          </span>
        ))}
      </div>
    </label>
  );
};

export default Tags;
