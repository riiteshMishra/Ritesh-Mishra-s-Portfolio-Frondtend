import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EditReview = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  if (!user) return navigate("/login");

  return <div>
      
      
  </div>;
};

export default EditReview;
