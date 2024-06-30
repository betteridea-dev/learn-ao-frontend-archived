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

        const response = await axios.get(
          `http://localhost:8000/course/${params.courseId}`,
          {
            headers: {
              accept: "*/*",
              Authorization: `Bearer ${token}`,
            },
          }
        );
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
      {course ? (
        <div>
          <h2>{course.name}</h2>
          <p>
            <strong>Small Description:</strong> {course.descriptionSmall}
          </p>
          <p>
            <strong>Large Description:</strong> {course.descriptionLarge}
          </p>
          <ul>
            {course.descriptionPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <p>
            <strong>Tags:</strong> {course.tags.join(", ")}
          </p>
          <p>
            <strong>Created At:</strong>{" "}
            {new Date(course.createdAt).toLocaleString()}
          </p>
          <p>
            <strong>Updated At:</strong>{" "}
            {new Date(course.updatedAt).toLocaleString()}
          </p>
          <h3>Enrollments:</h3>
          <ul>
            {course.enrollments.map((enrollment) => (
              <li key={enrollment.id}>
                Enrollment ID: {enrollment.id}, User ID: {enrollment.userId},
                Enrolled At: {new Date(enrollment.createdAt).toLocaleString()}
              </li>
            ))}
          </ul>
          <h3>Modules:</h3>
          <ul>
            {course.Module.map((module) => (
              <li key={module.id}>
                Module ID: {module.id}, Index: {module.index}, Title:{" "}
                {module.title}, Created At:{" "}
                {new Date(module.createdAt).toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>No course data found</div>
      )}
    </div>
  );
}