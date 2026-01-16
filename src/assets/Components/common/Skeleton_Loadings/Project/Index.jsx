import React from "react";

const ProjectSkeleton = () => {
  return (
    <div className="flex flex-col gap-8">
      {Array.from({ length: 3 }).map((_, idx) => (
        <div
          key={idx}
          className="
            flex justify-between items-center
            flex-col sm:flex-row flex-wrap
            gap-x-2 gap-y-6
            border rounded-xl p-4
            w-full
            animate-pulse
          "
        >
          {/* LEFT SKELETON */}
          <div className="w-full lg:w-fit flex justify-center">
            <div className="space-y-4 max-w-[500px] w-full">
              {/* Title */}
              <div className="h-6 w-3/4 bg-gray-700 rounded" />

              {/* Description */}
              <div className="space-y-2">
                <div className="h-3 w-full bg-gray-700 rounded" />
                <div className="h-3 w-11/12 bg-gray-700 rounded" />
                <div className="h-3 w-10/12 bg-gray-700 rounded" />
              </div>

              {/* Frontend tech */}
              <div className="flex gap-2 flex-wrap">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-5 w-16 bg-blue-700/50 rounded" />
                ))}
              </div>

              {/* Backend tech */}
              <div className="flex gap-2 flex-wrap">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-5 w-16 bg-green-700/50 rounded" />
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-2">
                <div className="h-4 w-16 bg-amber-700/50 rounded" />
                <div className="h-4 w-20 bg-amber-700/50 rounded" />
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="w-1 bg-gray-700 h-40 rounded-full lg:block hidden" />

          {/* RIGHT SKELETON */}
          <div className="w-full lg:w-[400px] flex justify-center">
            <div className="relative max-w-[500px] w-full">
              {/* Laptop frame */}
              <div className="w-full h-56 bg-gray-700 rounded-xl" />

              {/* Screen */}
              <div
                className="

                  absolute
                  top-[12%] left-[10%]
                  w-[80%] h-[65%]
                  bg-gray-800 rounded-md
                "
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectSkeleton;
