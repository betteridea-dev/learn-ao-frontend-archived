"use client";

import { useState, useEffect } from "react";
import { CodeCell } from "@betteridea/codecell";
import { fetchCourse } from "@/utils/fetchCourse";

const Projects = () => {
  const [courseData, setCourseData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchCourse();
        console.log(data)
        setCourseData(data);
      } catch (error) {
        console.error("Failed to fetch course data:", error);
      }
    }
    getData();
  }, []);

  return (
    <div>
      Projects
      {error && <p>{error}</p>}
      {courseData &&
        courseData.chapters.map((chapter:any, index: any) => (
          <div key={index}>
            {chapter.type === "text" && (
              <p dangerouslySetInnerHTML={{ __html: chapter.content }} />
            )}
            {chapter.type === "code" && (
              <CodeCell
                nowallet
                cellId={`${index}`}
                appName="LearnAO"
                code={chapter.content}
                onAOProcess={(pid) => console.log("using process: ", pid)}
                onNewMessage={(msgs) => console.log("new messages: ", msgs)}
                onInbox={(inbox) => console.log("got inbox: ", inbox)}
              />
            )}
          </div>
        ))}
    </div>
  );
};

export default Projects;