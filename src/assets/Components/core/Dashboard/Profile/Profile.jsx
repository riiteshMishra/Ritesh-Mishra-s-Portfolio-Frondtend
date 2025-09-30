import { useSelector } from "react-redux";
import Edit from "../../../common/Edit";
const Profile = () => {
  const { user } = useSelector((state) => state.profile);
  return (
    <div className=" max-w-[1200px] mx-auto text-white shadow-lg">
      {" "}
      {/* user image and first name , last name, email*/}{" "}
      <div className=" p-4 flex items-center gap-10 flex-col md:flex-row justify-between bg-gray-800 max-w-[1200px] mx-auto my-8 border-[1px] border-gray-600 rounded w-11/12">
        {" "}
        <div className="flex items-center gap-10 md:flex-row flex-col">
          {" "}
          <img
            src={user?.image}
            alt="user-avatar"
            className="h-[200px] rounded-full object-center object-cover active:border-[1px] border-gray-300 cursor-pointer"
          />{" "}
          <div>
            {" "}
            <p className="capitalize text-4xl">
              {" "}
              {user?.firstName} {user.lastName}{" "}
            </p>{" "}
            <p className="capitalize text-2xl">{user?.email}</p>{" "}
          </div>{" "}
        </div>{" "}
        {/* <Link to={"/dashboard/settings"}> edit</Link> */}{" "}
        <Edit path="/dashboard/settings" />{" "}
      </div>{" "}
      {/* user details */}{" "}
      <div className=" p-4 bg-gray-800 max-w-[1200px] mx-auto my-8 border-[1px] border-gray-600 rounded w-11/12 flex justify-between items-center md:flex-row flex-col gap-6">
        {" "}
        {/* bio */}{" "}
        <div>
          {" "}
          <h2 className="text-2xl">About</h2>{" "}
          <p className="text-lg">
            {" "}
            {user?.bio ?? "write something about your self"}{" "}
          </p>{" "}
        </div>{" "}
        {/* navigate */} <Edit path="/dashboard/settings" />{" "}
      </div>{" "}
      {/* personal details */}{" "}
      <div className=" p-4 bg-gray-800 max-w-[1200px] mx-auto my-8 border-[1px] border-gray-600 rounded w-11/12 flex justify-between items-center md:flex-row flex-col gap-6 capitalize">
        {" "}
        <div className="flex flex-col gap-y-3  max-w-[400px] w-11/12">
          {" "}
          <h2 className="text-2xl">Personal details</h2>{" "}
          {/* FIRST NAME OR LAST NAME */}{" "}
          <div className="flex justify-between flex-wrap ">
            {" "}
            <div>
              {" "}
              <p className="text-gray-400">first Name</p>{" "}
              <p className=" capitalize">{user?.firstName}</p>{" "}
            </div>{" "}
            <div>
              {" "}
              <p className="text-gray-400">last Name</p>{" "}
              <p className=" capitalize">{user?.lastName}</p>{" "}
            </div>{" "}
          </div>{" "}
          {/* EMAIL OR GENDER */}{" "}
          <div className="flex justify-between flex-wrap ">
            {" "}
            {/* email */}{" "}
            <div>
              {" "}
              <p className="text-gray-400 capitalize text-wrap">email</p>{" "}
              <p className=" capitalize">{user?.email}</p>{" "}
            </div>{" "}
            {/* gender */}{" "}
            <div>
              {" "}
              <p className="text-gray-400 capitalize">Gender</p>{" "}
              <p className=" capitalize">{user?.gender ?? "not specified"}</p>{" "}
            </div>{" "}
          </div>{" "}
          {/* PHONE NUMBER OR DATE OF BIRTH */}{" "}
          <div className="flex justify-between flex-wrap">
            {" "}
            {/* email */}{" "}
            <div>
              {" "}
              <p className="text-gray-400 capitalize">PHONE number</p>{" "}
              <p className=" capitalize">{user?.contactNumber ?? "N/A"}</p>{" "}
            </div>{" "}
            {/* gender */}{" "}
            <div>
              {" "}
              <p className="text-gray-400 capitalize">date of birth</p>{" "}
              <p className=" capitalize">{user?.dob ?? "not specified"}</p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* edit */} <Edit />{" "}
      </div>{" "}
    </div>
  );
};
export default Profile;
