import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../../../common/Button";
import Loader from "../../../../common/Loader";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addComment } from "../../../../../../services/operations/blog";

const CommentModal = ({ setCommentModal,blogId }) => {
  const { register, handleSubmit, reset } = useForm();
  const [submitLoading, setSubmitLoading] = React.useState(false);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);
  const onSubmit = async (data) => {
    if (!user) return navigate("/login");
    setSubmitLoading(true);
    try {
      // TODO: API call to submit comment
      // console.log("Submitted Comment:", data.commentText);
      const result = await addComment(user._id, blogId, data);
      reset();
      setCommentModal(false);
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitLoading(false);
    }
  };

  if (submitLoading) return <Loader />;

  return (
    <div
      onClick={() => setCommentModal(false)}
      className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-sm grid place-content-center z-30 scroll-smooth"
    >
      <div
        className="h-[clamp(300px,50vh,600px)] bg-black/50 w-[clamp(300px,50vw,600px)] rounded-xl border-[1px] border-black p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-4xl capitalize mb-2">Add Comment</p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <textarea
            {...register("commentText", { required: true })}
            placeholder="Add your comment here"
            className="FormStyle resize-none outline-1 border-black/50"
            rows={6}
          />

          <Button text={"Submit"} customClasses={"w-fit self-end"} />
        </form>
      </div>
    </div>
  );
};

export default CommentModal;
