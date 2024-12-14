// This component is designed to display all animals in a simple layout. It uses the Image 
// component from Next.js to show the images of the animals.

import Image from "next/image";
import React from "react";

const Animal=()=>{
    return(
        <>
         <p className="text-center"> All Animals</p>
          <div className="flex justify-center items-center gap-4 p-8">
          <div>
          <Image src={'/assets/images/animal/panda-1.jpg'} alt="Animal"
           width={300} height={300}></Image>
          </div>

          <div>
          <Image src={'/assets/images/animal/deer.jpg'} alt="Animal"
           width={300} height={300}></Image>
          </div>

          <div>
          <Image src={'/assets/images/animal/horse.jpg'} alt="Animal"
           width={300} height={300}></Image>
          </div>
          </div>
        </>
    )
}
export default Animal