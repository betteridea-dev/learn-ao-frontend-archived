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
        const data = await fetchCourse();
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
      <div className="bg-black min-h-screen h-full font-plus-jakarta-sans flex flex-col w-full p-4 lg:p-20 relative">
        {error && <p>{error}</p>}
        {courseData && (
          <div>
            <div className="text-center text-white text-2xl lg:text-4xl mt-8 lg:mt-0 font-bold font-['Lora'] leading-tight pb-16">
              {courseData.heading[currentPage]?.title}
            </div>
            <h2 className="text-[#E9FF91] font-semibold mb-8 uppercase text-xl px-4 lg:text-2xl">
              {courseData.chapters[currentPage].title}
            </h2>
            <div className="flex flex-wrap w-full">
              {courseData.chapters[currentPage].content.map(
                (section: any, idx: any) => (
                  <div key={idx} className="w-full lg:w-1/2 px-4">
                    {section.type === "text" && (
                      <div className="text-lg lg:text-xl leading-relaxed">
                        <ReactMarkdown>{section.content}</ReactMarkdown>
                      </div>
                    )}
                    {section.type === "code" && (
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
                    )}
                  </div>
                )
              )}
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