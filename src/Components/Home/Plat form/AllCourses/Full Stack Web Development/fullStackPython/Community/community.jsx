import React from "react";
import CommunityImg from "../../../../../../../assetss/fullstackwebdev/community.png";

const Community = () => {
  return (
    <div className="relative flex justify-center max-w-full h-48 md:h-96">
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: `url(${CommunityImg})`,
        }}
      ></div>
      <div className="relative text-center z-10 flex flex-col items-center justify-center space-y-2">
        <h1 className=" font-bold text-[#0098F1] md:text-xl">
          Join Our Thriving Community
        </h1>
        <p className="text-[#0098F1] md:text-lg">7,05,07,278</p>
        <button className="px-8 py-2 bg-[#0098F1] text-white font-semibold rounded-full shadow-md">
          Join Today
        </button>
      </div>
    </div>
  );
};

export default Community;

// import React from "react";
// import techimage from "../../../../../../../assets/techimage.png";
// import kid1 from "../../../../../../../assets/kid1.png";
// import kid2 from "../../../../../../../assets/kid2.png";
// import women1 from "../../../../../../../assets/women1.png";
// import women2 from "../../../../../../../assets/women2.png";
// import artificialigence from "../../../../../../../assets/artificialinteligence.png";
// import discussion from "../../../../../../../assets/discussion.png";
// import gathering from "../../../../../../../assets/gathering.png";
// import internationalimage from "../../../../../../../assets/internationalimage.png";
// import success from "../../../../../../../assets/success.png";
// import thinking from "../../../../../../../assets/thinking.png";
// function Community() {
//   const calculatePosition = (total, index) => {
//     const angle = (index / total) * Math.PI * 2;
//     const radius = 120; // adjust the radius as needed
//     const centerX = 0;
//     const centerY = 0;
//     const x = centerX + radius * Math.cos(angle);
//     const y = centerY + radius * Math.sin(angle);
//     return { x, y };
//   };

//   const images = [
//     kid1,
//     kid2,
//     women1,
//     women2,
//     artificialigence,
//     discussion,
//     gathering,
//     internationalimage,
//     success,
//     thinking,
//   ];

//   return (
//     <div className="bg-[#6a4c93] min-h-screen flex items-center justify-center pt-20 text-white">
//       <div className="container mx-auto px-4 py-8 text-center relative">
//         <div className="relative mb-8">
//           <div className="images-container absolute inset-0 flex justify-between items-center pointer-events-none">
//             {/* Place the techimage in the center */}
//             <img
//               src={techimage}
//               alt="Tech"
//               className="random-image w-16 h-16 absolute rounded-full"
//               style={{
//                 left: "50%",
//                 marginTop: "300px",
//                 transform: "translate(-50%, -50%)",
//                 height: "120px",
//                 width: "120px",
//               }}
//             />
//             {/* Calculate positions for each image */}
//             {images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`Image ${index}`}
//                 className="random-image w-16 h-16 absolute rounded-full "
//                 style={{
//                   left: `calc(50% + ${
//                     calculatePosition(images.length, index).x
//                   }px)`,
//                   top: `calc(50% + ${
//                     calculatePosition(images.length, index).y
//                   }px)`,
//                   transform: "translate(-50%, -50%)",
//                   marginTop: "90px",
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//         <h1
//           className="text-4xl font-bold font text-white "
//           style={{ marginTop: "250px" }}
//         >
//           Join Our Thriving Community
//         </h1>
//         <h2 className="text-5xl font-bold text-black mb-4">7,05,07,278</h2>
//         <p className="text-lg text-white mb-6">
//           Share your code today and design beautiful, responsive, and dynamic
//           websites.
//         </p>
//         <button className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300">
//           Join Today
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Community;
