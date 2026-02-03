const TextUi = ({ data }) => {
  return (
    <div >
      <p className="sr-only">{data?.title}</p>
      <p>{data?.text}</p>
    </div>
  );
};

export default TextUi;
