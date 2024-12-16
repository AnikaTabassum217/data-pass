
"use client"
import React, {  useState } from "react";

import WishList from "@/components/wish/WishList";
import WishTable from "@/components/wish/WishTable";


interface Fruit{
    id:number;
    name:string;
    country:string;
   
}

const Page=()=>{

    const [fruitCountry,setFruitCountry] = useState<Fruit[]>([
        {
               id:1,
               name:'Jack fruits',
               country:'Bangladesh'
        },
        {
            id:2,
            name:'Mango',
            country:'India'
        },
        {
            id:3,
            name:'Apple',
            country:'Russia'
        },
        {
            id:4,
            name:'Grapes',
            country:'Turkey'
         
        }

    ])
    // If I call handleDelete(2) means id is 2
    //Filter the array- Keep items with id not equal to 2
    //Resulting array: [1,2]
    const handleDelete=(id:number):void =>{
       setFruitCountry(fruitCountry.filter(item => item.id !== id))
    }

return(
    <> 
    <div >
    <WishList data={fruitCountry} onDelete={handleDelete}/>
    </div>
    <div >
    <WishTable data={fruitCountry} onDelete={handleDelete}/>
    </div>
    </>
)
}
export default Page