
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/core/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <section className="text-white flex flex-col sm:flex-row  gap-y-2">
      {/* left aside */}
      <aside className="sm:w-[250px] w-full sm:min-h-screen bg-gray-800 py-2">
        <Sidebar />
      </aside>

      {/* right main */}
      <main className=" sm:w-[calc(100% - 250px)] w-full">
        <Outlet />
      </main>
    </section>
  );
};

export default Dashboard;
