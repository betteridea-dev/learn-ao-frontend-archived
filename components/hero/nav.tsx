"use client";

import React, { useState, useEffect } from "react";
import { FaCaretRight } from "react-icons/fa";
import Link from "next/link";

const navItems: { name: string; href: string }[] = [
  { name: "Browse", href: "/browse" },
  { name: "Courses", href: "/courses" },
  { name: "Ideas to build", href: "/ideas-to-build" },
  { name: "Fundamentals", href: "/fundamentals" },
];

const Nav: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [enterPressed, setEnterPressed] = useState<boolean>(false);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      setSelectedIndex((prevIndex) =>
        prevIndex === navItems.length - 1 ? 0 : prevIndex + 1
      );
    } else if (event.key === "ArrowUp") {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? navItems.length - 1 : prevIndex - 1
      );
    } else if (event.key === "Enter") {
      setEnterPressed(true);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (enterPressed) {
      document.getElementById(`nav-item-${selectedIndex}`)?.click();
      setEnterPressed(false);
    }
  }, [enterPressed, selectedIndex]);

  return (
    <div className="flex flex-col text-[#AAAAAA] justify-start items-start">
      {navItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <div
            id={`nav-item-${index}`}
            className={`flex items-center gap-1 ${
              selectedIndex === index ? "text-white scale-105 transition-all" : "text-[#AAAAAA]"
            }`}
          >
            {item.name}
            {selectedIndex === index && <FaCaretRight />}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Nav;
