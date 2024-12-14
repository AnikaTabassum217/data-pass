// This page renders a list of AnimalCard components,one for each animal in the animalInfo array.

// The animalInfo array is mapped over, and for each animal, an AnimalCard component is rendered.

// The AnimalCard component is passed the animal object as a prop.

import AnimalCard from "@/components/shared/animal-card/AnimalCard";
import { animalInfo } from "@/constant/allAnimal";
import React from "react";


const page = () => {
    return (
        <>
            {
                animalInfo.map((animal, index) => {
                    return (
                        <div key={index}>
                            <AnimalCard key={animal.id} animal={animal}></AnimalCard>
                        </div>
                    )
                })
            }
        </>
    )
}
export default page