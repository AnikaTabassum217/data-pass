
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

    const [fruitCountry]= useState<Fruit[]>([
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

return(
    <> 
    <div >
    <WishList data={fruitCountry}/>
    </div>
    <div >
    <WishTable/>
    </div>
    </>
)
}
export default Page