import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        src="/bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white bg-black/40">
        <p className="text-sm tracking-widest">KEEOLA STORE. 2025</p>
        <h1 className="text-4xl md:text-6xl font-semibold mt-4">
          FASHION THAT STANDS
          <br />
          THE TEST OF TIME
        </h1>
        <p className="mt-4 text-lg max-w-xl">
          We bring fashion that transcends time, a blend of classic aesthetics
          with modern materials.
        </p>
        <div className="mt-6 flex">
          <Link href="/dashboard">
            <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 cursor-pointer transition">
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
