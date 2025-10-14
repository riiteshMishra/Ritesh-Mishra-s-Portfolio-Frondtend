const Button = ({ text, customClasses, onClick }) => {
  return (
    <button
      className={`bg-cyan-800 py-1 px-6 rounded-full hover:scale-95 active:scale-80 transition-all duration-200 cursor-pointer shadow-md hover:shadow-xl shadow-black ${
        customClasses && customClasses
      }`}
      onClick={onClick}
    >
      {text ? text : "click me"}
    </button>
  );
};

export default Button;
