import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import RequestCard from "./RequestCard";
import NoNotification from "./NoNotification";
import { getRequests } from "../../../../../services/operations/contact-us";
import RequestSkeleton from "../../../common/Loading";

const RequestCards = () => {
  const { requests } = useSelector((state) => state.contact);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);

  //  API CALL (only once when requests empty)
  useEffect(() => {
    const fetchClientRequests = async () => {
      setLoading(true);
      await getRequests(token, dispatch);
      setLoading(false);
    };

    fetchClientRequests();
  }, [token, dispatch]);

  //  Loading state
  if (loading) {
    return <RequestSkeleton />;
  }

  //  Still no data after API
  if (!requests || requests.length === 0) {
    return <NoNotification />;
  }

  //  Filtering
  const filteredRequests = requests.filter((req) => {
    const status = req.status || "pending";
    if (filter === "pending") return status === "pending";
    if (filter === "resolved") return status === "resolved";
    if (filter === "rejected") return status === "rejected";
    return true;
  });

  return (
    <div>
      {/* FILTER BAR */}
      <div className="flex gap-2 mb-5 flex-wrap">
        {["all", "pending", "resolved", "rejected"].map((key) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`
              px-4 py-1.5
              text-xs sm:text-sm
              rounded-full
              transition
              ${
                filter === key
                  ? "bg-indigo-500/30 text-indigo-300 shadow-inner"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }
            `}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      {/* FILTER RESULT EMPTY */}
      {filteredRequests.length === 0 ? (
        <NoNotification />
      ) : (
        <RequestCard filteredRequests={filteredRequests} />
      )}
    </div>
  );
};

export default RequestCards;
