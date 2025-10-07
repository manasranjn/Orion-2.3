import React from "react";

const Works = () => {
  const projects = [
    {
      title: "Designing Dashboards",
      year: "2020",
      category: "Dashboard",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      img: "https://miro.medium.com/v2/resize:fit:1400/1*rQ3d_dKG7V2JhX8SrUjs6g.png",
      file: "/files/designing-dashboard.pdf",
    },
    {
      title: "Vibrant Portraits of 2020",
      year: "2018",
      category: "Illustration",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0o_4XRf6b4MP0ITggV74r2G7u9sknU7BahQ&s",
      file: "/files/vibrant-portraits.pdf",
    },
    {
      title: "36 Days of Malayalam type",
      year: "2018",
      category: "Typography",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      img: "https://www.36daysoftype.com/wp-content/uploads/2015/10/36days_icon_app_512px.png",
      file: "/files/malayalam-type.pdf",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-8 bg-white">
      <h1 className="text-2xl font-semibold mb-6">Works</h1>

      <div className="space-y-5">
        {projects.map((work, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-6 border-b pb-4 border-gray-200"
          >
            <div className="min-w-[250px]">
              <img
                src={work.img}
                alt={work.title}
                className="w-full md:w-60 h-40 object-cover rounded-md"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#21243D]">
                  {work.title}
                </h3>
                <div className="flex items-center gap-4 mt-2">
                  <span className="bg-[#142850] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {work.year}
                  </span>
                  <span className="text-[#8695A4] text-sm">
                    {work.category}
                  </span>
                </div>
                <p className="text-[#21243D] mt-3">{work.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
