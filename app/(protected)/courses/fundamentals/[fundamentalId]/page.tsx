"use client";

import { useEffect, useState } from "react";
import { CodeCell } from "@betteridea/codecell";

const Fundamentals = () => {
  const [courseData, setCourseData] = useState(null);
  const url = process.env.NEXT_PUBLIC_BACKEND_BASE + "/course";

  useEffect(() => {
    const fetchData = async () => {
      const jwt = localStorage.getItem("jwt-token");
      if (!jwt) {
        console.error("JWT not found in localStorage");
        return;
      }

      try {
        const response = await fetch(url, {
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${jwt}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setCourseData(data);
        } else {
          console.error("Failed to fetch course data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Fundamentals</h1>
      {courseData ? (
        <div>
          <h2>Course Data:</h2>
          <pre>{JSON.stringify(courseData, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading course data...</p>
      )}
      <CodeCell
        nowallet
        cellId="1"
        appName="BetterIDEa-Code-Cell"
        code="print('Portable code cell ftw!')"
        onAOProcess={(pid) => console.log("using process: ", pid)}
        onNewMessage={(msgs) => console.log("new messages: ", msgs)}
        onInbox={(inbox) => console.log("got inbox: ", inbox)}
      />
    </div>
  );
};

export default Fundamentals;
