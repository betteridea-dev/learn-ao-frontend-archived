import todo from "@/public/courses/todo.svg";
import chatroom from "@/public/courses/chatroom.svg";

export interface Course {
  id: number;
  name: string;
  exercises: number;
  completedExercises: number;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  image: any;
  width: number;
  height: number;
}

export interface Idea {
  id: number;
  name: string;
}

export const courses: Course[] = [
  {
    id: 1,
    name: "Basics of Lua",
    exercises: 4,
    completedExercises: 0,
  },
  {
    id: 2,
    name: "AO Fundamentals",
    exercises: 9,
    completedExercises: 0,
  },
];

export const projects: Project[] = [
  {
    id: 1,
    name: "To-do List",
    description:
      "Dumdum's big idea - Dumdum decides to create a to-do list to manage his tasks and help others do the same.",
    image: todo,
    width: 200,
    height: 200,
  },
  {
    id: 2,
    name: "To-do List",
    description:
      "Dumdum's big idea - Dumdum decides to create a to-do list to manage his tasks and help others do the same.",
    image: chatroom,
    width: 140,
    height: 140,
  },
];

export const ideas: Idea[] = [
    {
        id: 1,
        name: "GatherTown on AO"
    },
    {
        id: 2,
        name: "Processing encrypted data on AO"
    }
];