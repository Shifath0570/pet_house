"use client"
import "animate.css";
import { useSpring, animated } from "@react-spring/web";

export default function Loading() {
  const pulse = useSpring({
    loop: { reverse: true },
    from: { scale: 0.9 },
    to: { scale: 1.1 },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <animated.div
        style={pulse}
        className="w-16 h-16 bg-red-500 rounded-full"
      />
      <h2 className="mt-6 text-xl animate__animated animate__fadeInUp">
        Loading your animals...
      </h2>

    </div>
  );
}