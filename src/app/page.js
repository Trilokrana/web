"use client";
import React, { useState } from "react";

const page = () => {
  const [toggle, setToggle] = useState("full_screen");

  const handleToggle = () => {
    setToggle(toggle === "full_screen" ? "left" : "full_screen");
  };

  return (
    <main className="flex flex-row h-screen bg-gray-50 p-4">
      <div className={`mb-4 ${toggle === "left" ? "w-full" : "w-1/2"} `}>
        <div className="mt-[600px]">
          <div className="bg-white rounded-lg shadow p-4 relative flex flex-row space-x-2 ">
            <input
              type="text"
              placeholder="Enter prompt here..."
              className="w-full border rounded-lg px-4 py-2 "
            />
            <button className="px-6 py-2 rounded-xl bg-green-500 cursor-pointer ">
              send
            </button>
          </div>
        </div>
      </div>

      {toggle === "left" && (
        <button
          onClick={handleToggle}
          className="h-10 self-start ml-2 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg"
        >
          &lt;
        </button>
      )}

      {toggle === "full_screen" && (
        <div className="bg-white rounded-lg shadow flex flex-col ml-4 flex-1">
          <div className="flex items-center justify-between">
            <div className="p-4 text-lg">Companies List</div>
            <button
              className="px-4 py-1 text-lg rounded-lg bg-gray-200 hover:bg-gray-300 cursor-pointer"
              onClick={handleToggle}
            >
              x
            </button>
          </div>

          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex space-x-2">
              <button className="border rounded-xl p-2 flex items-center bg-gray-100 hover:bg-gray-200">
                Delete
              </button>
              <button className="border rounded-xl p-2 flex items-center bg-gray-100 hover:bg-gray-200">
                Copy
              </button>
            </div>
            <div className="flex space-x-2">
              <button className="border rounded-xl p-2 flex items-center bg-gray-100 hover:bg-gray-200">
                Add Column <span className="ml-2">+</span>
              </button>
              <button className="border rounded-xl p-2 flex items-center bg-gray-100 hover:bg-gray-200">
                Export
              </button>
            </div>
          </div>

          <div className="grid grid-cols-6 bg-gray-100 p-2">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />#
            </div>
            <div className="font-medium">Company</div>
            <div className="font-medium col-span-2">Description</div>
            <div className="font-medium">Country</div>
            <div className="font-medium">Similarity</div>
          </div>

          <div className="flex-1">
            {[
              {
                id: 1,
                name: "Aleph Alpha",
                logo: "A",
                Desc: "We are ai company in advance video graphy featuress",
                Country: "Germany",
                similarity: "55.2%",
              },
              {
                id: 2,
                name: "Bita",
                logo: "B",
                Desc: "We are ai company in advance video graphy featuress",
                Country: "Spain",
                similarity: "49.7%",
              },
              {
                id: 3,
                name: "init AG",
                logo: "C",
                Desc: "init AG is a provider of digital transformation solutions and services, active in the technology and public sector",
                Country: "America",
                similarity: "47.6%",
              },
              {
                id: 4,
                name: "Smart Steel",
                logo: "D",
                Desc: "Smart Steel technologies is a provider of AI-based software solutions active in the steel industry",
                Country: "asustrila",
                similarity: "45.3%",
              },
              {
                id: 5,
                name: "AskUI",
                logo: "E",
                Desc: "AskUI is a provider of automation solutions active in the software industry. The company specializes in",
                Country: "Berlin",
                similarity: "45.1%",
              },
            ].map((company) => (
              <div
                key={company.id}
                className="grid grid-cols-6 border-b p-2 hover:bg-gray-50 "
              >
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  {company.id}
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-white mr-2">
                    {company.logo}
                  </div>
                  {company.name}
                </div>
                <div className="col-span-2 text-sm text-gray-600">
                  {company.Desc}
                </div>
                <div>{company.Country}</div>
                <div>{company.similarity}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default page;
