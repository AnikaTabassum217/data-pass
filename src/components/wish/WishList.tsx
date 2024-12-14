import React from "react";

interface WishListProps{
    data:{
    id:number;
    name:string;
    country:string;
    }[];
}

const WishList:React.FC<WishListProps>=({data})=>{
return(
    <>
    
    <div className="text-5xl text-blue-400 font-bold flex  justify-center items-center">
        
        WishList is here

    </div>

    <div className="">
    {
           data.map((dt,index)=>{
            return(
                <>
                <div className="flex  justify-center items-center gap-10">
                <div className="w-20">{dt.id}</div>
                <div className="w-20">{dt.name}</div>
                <div className="w-20">{dt.country}</div>
                </div>
                </>
            )
           })    
     }
    </div>
     
    </>
)
}
export default WishList