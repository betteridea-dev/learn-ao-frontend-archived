"use client";

import { useState, useEffect } from "react";
import { CodeCell } from "@betteridea/codecell";
import { fetchCourse } from "@/utils/fetchCourse";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import previous from "@/public/courses/previous.svg";
import next from "@/public/courses/next.svg";

const Projects = () => {
  const [courseData, setCourseData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("/utils/projects.json");
        const data = await response.json();
        console.log(data);
        setCourseData(data);
      } catch (error) {
        console.error("Failed to fetch course data:", error);
        setError("Failed to fetch course data");
      }
    }
    getData();
  }, []);

  const handleNext = () => {
    if (courseData && currentPage < courseData.chapters.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <main className="min-h-screen p-0 text-white">
      <div className="bg-black h-full font-plus-jakarta-sans flex flex-col w-full p-2 lg:p-20 relative">
        {error && <p>{error}</p>}
        {courseData && (
          <div>
            <div className="text-center text-white text-[34px] font-bold font-['Lora'] leading-[34px] pb-16">
              Basics of Lua
            </div>
            <h2 className="text-[#E9FF91] font-semibold mb-8 px-4 uppercase">
              {courseData.chapters[currentPage].title}
            </h2>
            <div className="flex w-full">
              <div className="w-1/2 p-4">
                {courseData.chapters[currentPage].content
                  .filter((section: any) => section.type === "text")
                  .map((section: any, idx: any) => (
                    <div key={idx} className="my-4 text-[16px]">
                      <ReactMarkdown>{section.content}</ReactMarkdown>
                    </div>
                  ))}
              </div>
              <div className="w-1/2 p-4 rounded-lg">
                {courseData.chapters[currentPage].content
                  .filter((section: any) => section.type === "code")
                  .map((section: any, idx: any) => (
                    <div key={idx} className="my-4 text-[16px]">
                      <CodeCell
                        nowallet
                        cellId={`${currentPage}-${idx}`}
                        appName="LearnAO"
                        code={section.content}
                        onAOProcess={(pid) =>
                          console.log("using process: ", pid)
                        }
                        onNewMessage={(msgs) =>
                          console.log("new messages: ", msgs)
                        }
                        onInbox={(inbox) => console.log("got inbox: ", inbox)}
                      />
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex justify-between items-center gap-6 mt-10">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 0}
                className="w-1/2 h-[50px] px-2.5 py-[15px] cursor-pointer bg-[#282828] text-[#828282] text-base font-semibold font-plus-jakarta-sans leading-tight rounded-md justify-center items-center gap-2.5 inline-flex"
              >
                <Image
                  src={previous}
                  alt="icon"
                  className="mr-2"
                  width={20}
                  height={20}
                />
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={
                  courseData && currentPage >= courseData.chapters.length - 1
                }
                className="w-1/2 h-[50px] px-2.5 py-[15px] cursor-pointer bg-[#E9FF91] text-[#060606] text-base font-semibold font-plus-jakarta-sans leading-tight rounded-md justify-center items-center gap-2.5 inline-flex"
              >
                Next
                <Image
                  src={next}
                  alt="icon"
                  className="ml-2"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Projects;
