// The AnimalCard component is passed the animal object as a prop in (animal->page.tsx).

// 1.This component represents a single animal card. It displays the animal's name, and it links
//  to the animal's detail page using Next.js Link component.

// 2.The card structure includes a header (CardHeader), content (CardContent), 
// and footer (CardFooter).

// 3.The animal prop contains details of a specific animal, such as id, name, and image.


import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface Animal {
  id: number;
  name: string;
  image: string;
}

const AnimalCard: FC<{ animal: Animal }> = ({ animal }) => {
  return (
    <>
      <Link key={animal.id} href={`/animal/animal-details/${animal.id}`}>
        <Card>
          <CardHeader>
            <CardTitle>{animal.name}</CardTitle>
            <CardDescription>View details</CardDescription>
          </CardHeader>
          <CardContent>
            <Image src={animal.image} alt={animal.name} width={300} height={300} />
          </CardContent>
          <CardFooter>
            <p>Click to see more</p>
          </CardFooter>
        </Card>
      </Link>
    </>
  );
};

export default AnimalCard;
