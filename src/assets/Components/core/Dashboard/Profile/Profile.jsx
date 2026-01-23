import { useSelector } from "react-redux";
import Edit from "../../../common/Edit";
import Image from "./Image";
import ProfileDetails from "./ProfileDetails";
const Profile = () => {
  const { user } = useSelector((state) => state.profile);
  const { bio } = user.profile;
  return (
    <section className=" scroll-smooth max-w-[1200px] mx-auto text-white shadow-lg overflow-x-hidden overflow-y-auto min-h-[calc(100vh-60px)]">
      {/* image */}
      <div className=" max-w-[1200px] mx-auto my-8 rounded w-11/12">
        <Image />
      </div>

      {/* bio */}
      <div className=" p-4 flex items-center gap-10 flex-col md:flex-row justify-between bg-gray-800 max-w-[1200px] mx-auto my-8 border-[1px] border-gray-600 rounded w-11/12">
        <div>
          <h2 className="text-2xl capitalize">bio</h2>
          <p className="text-lg capitalize text-gray-400">
            {bio ?? "this field is not available"}
          </p>
        </div>
        <Edit path={"/dashboard/settings"} />
      </div>

      {/* user profile details */}
      <div className=" p-4 flex items-center gap-10 flex-col md:flex-row justify-between bg-gray-800 max-w-[1200px] mx-auto my-8 border-[1px] border-gray-600 rounded w-11/12">
        <ProfileDetails />
      </div>
    </section>
  );
};
export default Profile;
