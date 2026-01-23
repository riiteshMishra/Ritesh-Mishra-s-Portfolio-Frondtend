import { useSelector } from "react-redux";
import Edit from "../../../common/Edit";
import Image from "./Image";
import ProfileDetails from "./ProfileDetails";
import BioCard from "./BioCard";
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
      <BioCard />

      {/* user profile details */}
      <ProfileDetails />
    </section>
  );
};
export default Profile;
