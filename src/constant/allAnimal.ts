

// import React from "react";

// const animalCard1 = '/assets/images/animal/panda-1.jpg';
// const animalCard2 = '/assets/images/animal/deer.jpg';
// const animalCard3 = '/assets/images/animal/horse.jpg';

// const pandaImage1 = '/assets/images/animal/panda-2.jpg';
// const pandaImage2 = '/assets/images/animal/panda-3.jpg';

// const deerImage1= '/assets/images/animal/deer-1.jpg'
// const deerImage2= '/assets/images/animal/deer-2.jpg'

// const horseImage1= '/assets/images/animal/horse-1.jpg'
// const horseImage2= '/assets/images/animal/horse-2.jpg'

// export const animalInfo = [
//   {
//     id: 1,
//     name: "Panda",
//     image: animalCard1,

//     details: {
//       images: [pandaImage1, pandaImage2],
//       habitat: "Bamboo forests in China",
//       relatedSpecies: ["Red Panda", "Giant Panda"]
//     }
//   },
//   {
//     id: 2,
//     name: "Deer",
//     image: animalCard2,

//     details: {
//       images: [deerImage1, deerImage2],
//       habitat: "Bamboo forests in Korea",
//       relatedSpecies: ["Red Panda", "Giant Panda"]
//     }
//   },
//   {
//     id: 3,
//     name: "Horse",
//     image: animalCard3,

//     details: {
//       images: [horseImage1, horseImage2],
//       habitat: "Bamboo forests in USA",
//       relatedSpecies: ["Red Panda", "Giant Panda"]
//     }
//   }
// ];


// const animalCard1 = '/assets/images/animal/panda-1.jpg';
// const animalCard2 = '/assets/images/animal/deer.jpg';
// const animalCard3 = '/assets/images/animal/horse.jpg';

// const pandaImage1 = '/assets/images/animal/panda-2.jpg';
// const pandaImage2 = '/assets/images/animal/panda-3.jpg';

// const deerImage1= '/assets/images/animal/deer-1.jpg'
// const deerImage2= '/assets/images/animal/deer-2.jpg'

// const horseImage1= '/assets/images/animal/horse-1.jpg'
// const horseImage2= '/assets/images/animal/horse-2.jpg'


// export const animalInfo = [
//   {
//     id: 1,
//     name: "Panda",
//     image: animalCard1,
//     details: {
//       images: [pandaImage1, pandaImage2],
//       habitat: "Bamboo forests in China",
//       relatedSpecies: ["Red Panda", "Giant Panda"]
//     }
//   },
//   {
//     id: 2,
//     name: "Deer",
//     image: animalCard2,
//     details: {
//       images: [deerImage1, deerImage2],
//       habitat: "Forests in various regions",
//       relatedSpecies: ["Red Deer", "Roe Deer"]
//     }
//   },
//   {
//     id: 3,
//     name: "Horse",
//     image: animalCard3,
//     details: {
//       images: [horseImage1, horseImage2],
//       habitat: "Grasslands and farms",
//       relatedSpecies: ["Mustang", "Arabian Horse"]
//     }
//   }
// ];
const animalCard1 = '/assets/images/animal/panda-1.jpg';
const animalCard2 = '/assets/images/animal/deer.jpg';
const animalCard3 = '/assets/images/animal/horse.jpg';

const pandaImage1 = '/assets/images/animal/panda-1.jpg';
const pandaImage2 = '/assets/images/animal/panda-2.jpg';
const pandaImage3 = '/assets/images/animal/panda-3.jpg';

const horseImage = '/assets/images/animal/horse.jpg';
const horseImage1 = '/assets/images/animal/horse-1.jpg';
const horseImage2 = '/assets/images/animal/horse-2.jpg';

export const animalInfo = [
  {
    id: 1,
    name: "Panda",
    image: animalCard1, // This is the main image that will be displayed first

    details: {
      images: [pandaImage1, pandaImage2,pandaImage3],
      habitat: "Bamboo forests in China",
      relatedSpecies: ["Red Panda", "Giant Panda"],
    },
  },
  {
    id: 2,
    name: "Deer",
    image: animalCard2,

    details: {
      images: [], // Add images if needed
      habitat: "Forests",
      relatedSpecies: ["Elk", "Moose"],
    },
  },
  {
    id: 3,
    name: "Horse",
    image: animalCard3,

    details: {
      images: [horseImage, horseImage1, horseImage2],
      habitat: "Grasslands",
      relatedSpecies: ["Zebra", "Donkey"],
    },
  },
];
