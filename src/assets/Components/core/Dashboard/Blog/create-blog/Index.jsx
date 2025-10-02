import { useSelector } from "react-redux";
import BlogCreateStep from "./BlogCreateStep";
import BlogInfo from "./BlogInfo";
import { useForm } from "react-hook-form";
import BlogStatus from "./BlogStatus";
import { useEffect } from "react";

const CreateBlogs = () => {
  const { step } = useSelector((state) => state.blog);
  return (
    <section className="container text-white ">
      <div className="flex flex-col gap-4">
        {/* creation step */}
        <BlogCreateStep />

        {/* form se data fetch */}
        {step === 1 && <BlogInfo />}
        {step === 2 && <BlogStatus  />}
        {/* {step === 3 && <></>} */}
      </div>
    </section>
  );
};

export default CreateBlogs;

// isame main steps se kaam krunga
// pahale step me thumbnail,title,slug ,content, categoryId, tags lunga
// second step me
// last step me publish krna hai ki nhi
