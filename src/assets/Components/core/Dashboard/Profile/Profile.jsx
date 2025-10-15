import { useSelector } from "react-redux";
import Edit from "../../../common/Edit";
import Image from "./Image";
const Profile = () => {
  const { user } = useSelector((state) => state.profile);

  return (
    <section className=" max-w-[1200px] mx-auto text-white shadow-lg">
      {/* image */}
      <div className=" p-4 flex items-center gap-10 flex-col md:flex-row justify-between bg-gray-800 max-w-[1200px] mx-auto my-8 border-[1px] border-gray-600 rounded w-11/12">
        <Image />
      </div>
    </section>
  );
};
export default Profile;
