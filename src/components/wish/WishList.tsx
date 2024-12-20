import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import PrintPge from "./PrintPage";

interface WishListProps {
    data: {
        id: number;
        name: string;
        country: string;
    }[];
    onDelete: (id: number) => void;
    onDeleteAll: () => void;
}

const WishList: React.FC<WishListProps> = ({ data, onDelete,onDeleteAll }) => {
    return (
        <>
            <div className="text-5xl text-blue-400 font-bold flex  justify-center items-center">
                WishList is here
            </div>

            <div>
                <PrintPge/>
            </div>

            <div className="flex justify-center items-center gap-2"
            onClick={onDeleteAll}>
            <div className="text-base font-normal">Remove all</div>
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