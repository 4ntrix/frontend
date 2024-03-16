"use client";
import React from "react";
import { ContainerScroll } from "./components/ui/container-scroll-animation"

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
            Transforming events with 4NTRIX <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Secure, Transparent & Decentralized
              <br />
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
}

export const users = [
    {
      name: "Concert",
      designation: "Rock and Blues Concert, Los Angeles",
      image: "https://cdn.dribbble.com/userupload/3591572/file/original-ff20bb6af28deb22fa278fe7d9d3ea06.jpg?resize=1024x811&vertical=center",
      badge: "Concert",
    },
    {
      name: "Concert",
      designation: "Guitar OP, USA",
      image: "https://cdn.dribbble.com/users/7107436/screenshots/16609903/media/bf95eb7dcb815100aa0ce8ce5bd4fa43.jpg?resize=1000x750&vertical=center",
      badge: "Concert",
    },
    {
      name: "Concert",
      designation: "Jazz Night, New York City",
      image: "https://cdn.dribbble.com/userupload/7183579/file/original-21ab046c511797d4493f9b5a4c84eecc.png?resize=1200x900",
      badge: "Concert",
    },
    {
      name: "Concert",
      designation: "Folk Music Festival, Nashville",
      image: "https://cdn.dribbble.com/userupload/4496355/file/original-3ebc72ceaefaf83ff739c659372d75d9.png?resize=400x300&vertical=center",
      badge: "Concert",
    },
    {
      name: "Concert",
      designation: "Indie Rock Showcase, Seattle",
      image: "https://cdn.dribbble.com/userupload/3498088/file/original-74bbe9b60fc214b2894d430da6496007.jpg?crop=0x719-1296x1691&resize=400x300&vertical=center",
      badge: "Concert",
    },
    {
      name: "Concert",
      designation: "Electronic Dance Party, Miami",
      image: "https://cdn.dribbble.com/userupload/12030901/file/original-c87da95c21543f9bded9eb0ff8cdcd00.png?resize=1200x16070",
      badge: "Concert",
    },
    {
      name: "Concert",
      designation: "Hip Hop Extravaganza, Chicago",
      image: "https://cdn.dribbble.com/users/3073041/screenshots/15997478/media/7d520dd775f3a8dfb2fb324c1f35aba0.jpg?resize=1000x750&vertical=center",
      badge: "Concert",
    },
    {
      name: "Concert",
      designation: "Pop Music Concert, San Francisco",
      image: "https://cdn.dribbble.com/users/6551830/screenshots/18578662/media/a93d0a9ba4a3e5cb5fe8188c378f5557.jpg?resize=1000x750&vertical=center",
      badge: "Concert",
    },
    {
      name: "Concert",
      designation: "Classical Symphony, Boston",
      image: "https://cdn.dribbble.com/userupload/8113195/file/original-096e5c48f6c3f440c37413ba4da695f2.png?resize=1200x1698",
      badge: "Concert",
    },
    {
      name: "Concert",
      designation: "Country Music Fest, Nashville",
      image: "https://cdn.dribbble.com/userupload/9351251/file/original-6f77e3e49a1b7a0d63b1482e35ac579e.jpg?resize=1200x900",
      badge: "Concert",
    },
  ];
  
