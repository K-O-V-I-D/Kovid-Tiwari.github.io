// import { useEffect, useState } from "react";

// export default function Preloader() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const handleLoad = () => {
//       setIsLoading(false);
//     };

//     window.addEventListener("load", handleLoad);

//     return () => {
//       window.removeEventListener("load", handleLoad);
//     };
//   }, []);

//   if (!isLoading) {
//     return null;
//   }

//   return (
//     <div className="preloader">
//       <div className="spinner"></div>
//       <style jsx>{`
//         .preloader {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: #000;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           z-index: 9999;
//         }
//         .spinner {
//           border: 4px solid rgba(255, 255, 255, 0.3);
//           border-radius: 50%;
//           border-top: 4px solid #fff;
//           width: 40px;
//           height: 40px;
//           animation: spin 1s linear infinite;
//         }
//         @keyframes spin {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
