"use client";

import Link from "next/link";

const Materials = () => {
  const materials = [
    {
      title: "Teams Outreach Presentation",
      file: "/teams outreach.pptx",
      thumbnail: "https://www.shutterstock.com/image-vector/outreach-vector-typography-banner-on-260nw-1492519814.jpg",
    },
    {
      title: "Teams Outreach Presentation",
      file: "/teams outreach.pptx",
      thumbnail: "https://www.shutterstock.com/image-vector/outreach-vector-typography-banner-on-260nw-1492519814.jpg",
    },
  ];

  const googleDriveFolderLink = "https://drive.google.com/drive/folders/1UXvuUopsY_yMHj9e0JG7l_D0sM8oeBa4?usp=sharing"

  return (
    <section className="py-8 px-6 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl dark:text-black font-bold">Hackathon Materials</h1>
          <Link
            href={googleDriveFolderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-200 text-gray-700 dark:bg-dark dark:text-white dark:hover:bg-gray-400 rounded-md hover:bg-dark hover:text-white transition-colors"
          >
            View All
          </Link>
        </div>
        <p className="text-left mb-6 text-gray-700">
          Access all the materials for the hackathon here. More materials will be uploaded as they become available.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
              <img
                src={material.thumbnail}
                alt={`${material.title} Thumbnail`}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{material.title}</h2>
              <Link
                href={material.file}
                target="_blank"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Download
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Materials;