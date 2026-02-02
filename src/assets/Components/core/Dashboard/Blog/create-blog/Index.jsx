import { useSelector } from "react-redux";
import BlogCreateStep from "./BlogCreateStep";
import BlogInfo from "./BlogInfo";
import BlogStatus from "./BlogStatus";
import BlogContent from "./BlogContent";

const CreateBlogs = () => {
  const { step } = useSelector((state) => state.blog);
  const { blog } = useSelector((state) => state.blog);
  // console.log("Blog", blog)
  return (
    <section className="container text-white ">
      <div className="flex flex-col gap-4">
        {/* creation step */}
        <BlogCreateStep />

        {/* form se data fetch */}
        {step === 1 && <BlogInfo />}
        {step === 2 && <BlogContent />}
        {step === 3 && <BlogStatus />}
      </div>
    </section>
  );
};

export default CreateBlogs;

// isame main steps se kaam krunga
// pahale step me thumbnail,title,slug ,content, categoryId, tags lunga
// second step me
// last step me publish krna hai ki nhi
