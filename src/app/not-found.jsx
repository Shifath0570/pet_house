
"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-5">
      <div className="text-center space-y-6">

        <h1 className="text-7xl font-bold text-amber-700">
          404
        </h1>

        <h2 className="text-3xl font-semibold">
          Page Not Found
        </h2>

        <p className="text-gray-500 max-w-md mx-auto">
          Sorry, the page you are looking for does not exist
          or may have been moved.
        </p>

        <Link href="/">
          <Button className="bg-amber-700 text-white flex items-center gap-2 mx-auto">
            <FaArrowLeft />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;






















// import Image from 'next/image';
// import Link from 'next/link';
// import ErrorImage from "../../public/NotFound.png"

// const NotFound = () => {
//     return (
//         <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">

//             <h1 className="text-7xl font-bold text-red-500">404</h1>

//             <h2 className="text-2xl font-semibold mt-4">
//                 Oops! Page not found
//             </h2>

//             <p className="text-gray-600 mt-2 max-w-md">
//                 The page you are looking for does not exist or has been moved.
//             </p>

//             <Link href="/">
//                 <button className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
//                     Go Back Home
//                 </button>
//             </Link>

//             <Image
//                 src={ErrorImage}
//                 alt="Not found"
//                 width={250}
//                 height={250}
//             />
//         </div>
//     );
// };

// export default NotFound;