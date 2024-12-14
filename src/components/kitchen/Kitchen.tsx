'use client'
import React, { useState } from "react";
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
const Kitchen = () => {
    const [setOpen, isSetOpen] = useState(false)
    console.log(setOpen)

    const handleClick = ():void => {
        isSetOpen(true)
    }
    return (
        <>
            <div className="flex justify-center items-center">
                <button className="p-2 bg-blue-300 text-black font-bold">Kitchen</button>
            </div>

            <Sheet>
                <div
                    onClick={() => handleClick(false)}
                    className={`bg-red-300 ${setOpen ? 'hidden bg-green-300' : ''}`}
                >
                    <SheetTrigger asChild>
                        <button >Filter</button>
                    </SheetTrigger>
                </div>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                            Make changes to your profile here. Click save when you're done.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            {/* <Label htmlFor="name" className="text-right"> */}
                            Name
                            {/* </Label> */}
                            {/* <Input id="name" value="Pedro Duarte" className="col-span-3" /> */}
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            {/* <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" /> */}
                        </div>
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <button >Save changes</button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </>
    )
}
export default Kitchen