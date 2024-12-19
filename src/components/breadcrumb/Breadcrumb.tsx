'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Breadcrumb: React.FC = () => {
  const pathname = usePathname(); // Get the current path
  const pathArray = pathname.split('/').filter((path) => path);

  return (
    <div className="flex space-x-2 text-gray-600 text-sm">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      {pathArray.map((path, index) => {
        const href = '/' + pathArray.slice(0, index + 1).join('/');
        const isLast = index === pathArray.length - 1;
        return (
          <React.Fragment key={href}>
            <span className="mx-2">/</span>
            {isLast ? (
              <span className="text-gray-700 font-semibold capitalize">
                {path}
              </span>
            ) : (
              <Link href={href} className="hover:underline capitalize">
                {path}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;


// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import React from 'react';

// const Breadcrumb: React.FC = () => {
//   const pathname = usePathname(); // Get the current path
//   const pathArray = pathname.split('/').filter((path) => path);

//   return (
//     <div className="flex space-x-2 text-gray-600 text-sm">
//       <Link href="/" className="hover:underline">
//         Home
//       </Link>
//       {pathArray.map((path, index) => {
//         const href = '/' + pathArray.slice(0, index + 1).join('/');
//         const isLast = index === pathArray.length - 1;
//         return (
//           <React.Fragment key={href}>
//             <span className="mx-2">/</span>
//             {isLast ? (
//               <span className="text-gray-700 font-semibold capitalize">
//                 {path.replace('-', ' ')}
//               </span>
//             ) : (
//               <Link href={href} className="hover:underline capitalize">
//                 {path.replace('-', ' ')}
//               </Link>
//             )}
//           </React.Fragment>
//         );
//       })}
//     </div>
//   );
// };

// export default Breadcrumb;
