import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

interface WishListProps {
    data: {
        id: number;
        name: string;
        country: string;
    }[];
    onDelete: (id: number) => void;
}

const WishList: React.FC<WishListProps> = ({ data, onDelete }) => {
    return (
        <>
            <div className="text-5xl text-blue-400 font-bold flex  justify-center items-center">
                WishList is here
            </div>

            <div className="mt-10">
                {
                    data.map((dt, index) => {
                        return (
                            <>
                                <div className="flex  justify-center items-center gap-10 ">
                                    <div className="w-20">{dt.id}</div>
                                    <div className="w-20">{dt.name}</div>
                                    <div className="w-20">{dt.country}</div>
                                    <RiDeleteBin6Line
                                        size={20}
                                        onClick={() => onDelete(dt.id)}
                                        className="cursor-pointer"
                                    />
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