"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

type CourseDetailProps = {
  params: {
    courseId: string;
  };
};

type Enrollment = {
  id: number;
  userId: number;
  courseId: number;
  createdAt: string;
};

type Module = {
  id: number;
  index: number;
  title: string;
  createdAt: string;
  updatedAt: string;
};

type Course = {
  id: number;
  name: string;
  tags: string[];
  descriptionSmall: string;
  descriptionLarge: string;
  descriptionPoints: string[];
  enrollments: Enrollment[];
  Module: Module[];
  createdAt: string;
  updatedAt: string;
};

export default function CourseDetail({ params }: CourseDetailProps) {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const token = localStorage.getItem("jwt-token");

        if (!token) {
          setError("JWT token not found");
          setLoading(false);
          return;
        }

        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_BASE}/course`, {
          headers: {
            accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response)
        setCourse(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching course data");
        setLoading(false);
      }
    };

    fetchCourse();
  }, [params.courseId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Course Detail: {course?.name}</h1>
    </div>
  );
}