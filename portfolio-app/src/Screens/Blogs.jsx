import React from "react";

const Blogs = () => {
  const blogPosts = [
    {
      title: "UI Interactions of the week",
      date: "12 Feb 2019",
      tags: ["Express", "Handlebars"],
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "UI Interactions of the week",
      date: "12 Feb 2019",
      tags: ["Express", "Handlebars"],
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "UI Interactions of the week",
      date: "12 Feb 2019",
      tags: ["Express", "Handlebars"],
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "UI Interactions of the week",
      date: "12 Feb 2019",
      tags: ["Handlebars", "Express", "Handlebars"],
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Blog</h1>
      {blogPosts.map((post, index) => (
        <div
          key={index}
          className="border-b border-gray-300 py-4 last:border-none"
        >
          <h2 className="text-lg font-semibold mb-1">{post.title}</h2>
          <div className="flex flex-wrap items-center text-sm text-gray-700 mb-2">
            <time className="mr-3">{post.date}</time>
            <span className="hidden sm:inline">|</span>
            <div className="flex space-x-2 ml-3 text-gray-400 font-medium">
              {post.tags.map((tag, i) => (
                <span key={i}>
                  {tag}
                  {i !== post.tags.length - 1 && ","}
                </span>
              ))}
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            {post.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
