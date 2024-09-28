"use client";
import Image from "next/image";
import github from "../../public/assets/images/social.png";
import linkedin from "../../public/assets/images/linkedin.png";
import twitter from "../../public/assets/images/twitter.png";
import favicon from "../../public/assets/images/social.png";
import { useEffect, useState } from "react";

export default function Header() {
  const [bgcolor, setBgColor] = useState("black");
  const [intervalId, setIntervalId] = useState(null); // Initialize with null

  // Function to generate a random background color
  const bgChanger = () => {
    let hex = "0123456789ABCDEF";
    let color = "#";
    for (let index = 0; index < 6; index++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    setBgColor(color);
  };

  // Start the interval on mouse enter
  const handleOnMouseEnter = () => {
    // Avoid creating multiple intervals
    if (!intervalId) {
      const id = setInterval(bgChanger, 500); // Reduced to 500ms for quicker changes
      setIntervalId(id);
    }
  };

  // Clear the interval on mouse leave
  const handleOnMouseLeave = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null); // Reset interval ID to null after clearing
    }
  };

  // Clean up when component unmounts
  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId); // Ensure interval is cleared
    };
  }, [intervalId]);

  return (
    <>
      <header className="mt-2">
        <nav className="flex flex-wrap justify-around">
          <ul className="flex flex-wrap gap-4">
            <li>
              <a href="" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                Blogs
              </a>
            </li>
          </ul>

          {/* Circle Logo */}
          <div
            id="circleLogo"
            className="rounded-full place-content-center"
            style={{ backgroundColor: bgcolor }}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          >
            <a
              href=""
              className="text-3xl h-16 w-16 text-center flex items-center justify-center text-white font-semibold"
            >
              AQ
            </a>
          </div>

          <ul className="flex flex-wrap gap-4">
            <li>
              <a href="">
                <Image
                  className="hover:animate-spin"
                  src={github}
                  alt="github"
                  width={25}
                  height={15}
                />
              </a>
            </li>
            <li>
              <a href="">
                <Image
                  src={linkedin}
                  className="hover:animate-spin"
                  alt="linkedin"
                  width={25}
                  height={15}
                />
              </a>
            </li>
            <li>
              <a href="">
                <Image
                  src={twitter}
                  className="hover:animate-spin"
                  alt="twitter"
                  width={25}
                  height={15}
                />
              </a>
            </li>
            <li>
              <a href="">
                <Image
                  src={favicon}
                  className="hover:animate-spin"
                  alt="favicon"
                  width={25}
                  height={15}
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
