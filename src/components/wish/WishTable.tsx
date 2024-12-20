import React from "react";

interface WishTableProps{
  data:{
    id:number;
    name:string;
    country:string;
  }[],
 // onDelete:(id:number)=>void

}
const WishTable:React.FC<WishTableProps> = ({data}) => {
    return (
        <>
            <div className="text-5xl text-red-400 font-bold flex justify-center items-center mt-20">WishTable is here</div>

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

            
        </>
    )
}
export default WishTable