import React from "react";
import { Link } from "react-router-dom";

const RecentPosts = () => {
  const posts = [
    {
      title: "Making a design system from scratch",
      date: "12 Feb 2020",
      category: "Design, Pattern",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "Creating pixel perfect icons in Figma",
      date: "12 Feb 2020",
      category: "Figma, Icon Design",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <section className="bg-[#EDF7FA] py-4 md:py-6 px-6 md:px-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[#21243D] text-2xl font-semibold">
            Recent posts
          </h2>
          <Link
            to="/blogs"
            className="text-[#00A8CC] hover:underline font-medium text-sm md:text-base"
          >
            View all
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-md shadow-sm hover:shadow-md transition duration-300"
            >
              <h3 className="text-[#21243D] text-xl md:text-2xl font-bold mb-4">
                {post.title}
              </h3>
              <div className="flex flex-wrap items-center text-[#21243D] text-sm mb-4">
                <span>{post.date}</span>
                <span className="mx-3">|</span>
                <span>{post.category}</span>
              </div>
              <p className="text-[#21243D] text-base leading-relaxed">
                {post.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
