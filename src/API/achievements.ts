// src/api/achievements.ts

export const getAchievements = async () => {
  return {
    heading: "See what others are achieving through learning",
    contents: [
      {
        heading: "StackOverflow",
        description: "37,076 responses collected",
        image: {
          url: "https://cms-images.udemycdn.com/96883mtakkm8/2PBcNgsQa3SvYWklkiN27r/5b8707cc79c8cae5774d5eb3b88b4001/logo_stackoverflow.svg",
        },
      },
      {
        heading: "Alvin Lim",
        description: "Technical Co-Founder, CTO at Dimensional",
        image: {
          url: "https://cms-images.udemycdn.com/96883mtakkm8/1Djz6c0gZLaCG5SQS3PgUY/54b6fb8c85d8da01da95cbb94fa6335f/Alvin_Lim.jpeg",
        },
      },
      {
        heading: "William A. Wachlin",
        description: "Partner Account Manager at Amazon Web Services",
        image: {
          url: "https://cms-images.udemycdn.com/96883mtakkm8/6dT7xusLHYoOUizXeVqgUk/4317f63fe25b2e07ad8c70cda641014b/William_A_Wachlin.jpeg",
        },
      },
      {
        heading: "Ian Stevens",
        description: "Head of Capability Development, North America at Publicis Sapient",
        image: {
          url: "https://cms-images.udemycdn.com/96883mtakkm8/4w9dYD4F64ibQwsaAB01Z4/c4610e9b1ac65589d8b1374ad10714e2/Ian_Stevens.png",
        },
      },
    ],
  };
};
