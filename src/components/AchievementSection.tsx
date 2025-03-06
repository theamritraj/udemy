import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Achievement {
  image: { url: string };
  heading: string;
  description: string;
}

const getAchievements = async (): Promise<{ heading: string; contents: Achievement[] }> => {
  return {
    heading: "See what others are achieving through learning",
    contents: [
      {
        heading: "StackOverflow",
        description: "37,076 responses collected",
        image: {
          url: "https://cms-images.udemycdn.com/96883mtakkm8/2PBcNgsQa3SvYWklkiN27r/5b8707cc79c8cae5774d5eb3b88b4001/logo_stackoverflow.svg"
        }
      },
      {
        heading: "Alvin Lim",
        description: "Technical Co-Founder, CTO at Dimensional",
        image: {
          url: "https://cms-images.udemycdn.com/96883mtakkm8/1Djz6c0gZLaCG5SQS3PgUY/54b6fb8c85d8da01da95cbb94fa6335f/Alvin_Lim.jpeg"
        }
      },
      {
        heading: "William A. Wachlin",
        description: "Partner Account Manager at Amazon Web Services",
        image: {
          url: "https://cms-images.udemycdn.com/96883mtakkm8/6dT7xusLHYoOUizXeVqgUk/4317f63fe25b2e07ad8c70cda641014b/William_A_Wachlin.jpeg"
        }
      },
      {
        heading: "Ian Stevens",
        description: "Head of Capability Development, North America at Publicis Sapient",
        image: {
          url: "https://cms-images.udemycdn.com/96883mtakkm8/4w9dYD4F64ibQwsaAB01Z4/c4610e9b1ac65589d8b1374ad10714e2/Ian_Stevens.png"
        }
      }
    ]
  };
};

const AchievementSection: React.FC = () => {
  const [data, setData] = useState<{ heading: string; contents: Achievement[] }>({
    heading: "",
    contents: []
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchAchievements = async () => {
      const achievementsData = await getAchievements();
      setData(achievementsData);
    };

    fetchAchievements();
  }, []);

  return (
    <section className="py-10 bg-white text-center">
      <h2 className="text-2xl font-bold mb-6">{data.heading}</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {data.contents.map((achievement, index) => (
          <div
            key={index}
            className="max-w-xs p-4 shadow-lg rounded-xl hover:scale-105 transition-transform duration-300"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img
              src={achievement.image.url}
              alt={achievement.heading}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="font-semibold">{achievement.heading}</h3>
            <p className="text-gray-600">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementSection;
