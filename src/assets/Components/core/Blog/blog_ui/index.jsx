import React from 'react'

const BlogUi = ({blogs}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10  place-items-center ">
      {blogs.map((blog) => (
        <div
          key={blog?._id}
          className="bg-gray-800 hover:bg-gray-700 transition rounded-xl shadow-lg overflow-hidden cursor-pointer"
          onClick={() => navigate(`blog/${blog?._id}`)}
        >
          {/* Thumbnail */}
          {/* <img
                    src={blog?.thumbnail}
                    alt={blog?.title}
                    className="w-full h-48 object-cover"
                  /> */}

          {/* Blog details */}
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{blog?.title}</h2>
            <p className="text-sm text-gray-400 mb-2">{blog?.slug}</p>

            {/* substring to limit content preview */}
            <p className="text-sm text-gray-300 mb-3">
              {blog?.content
                ? blog.content.substring(0, 100) + "..."
                : "No description available."}
            </p>

            {/* Likes & Comments */}
            <div className="flex items-center gap-6 text-gray-300">
              <div className="flex items-center gap-1">
                <FaHeart className="text-red-500" />
                <span>{blog?.likes?.length ?? 0}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaComment className="text-blue-400" />
                <span>{blog?.comments?.length ?? 0}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogUi