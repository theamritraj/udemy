import { useEffect, useState } from "react";
import { getAchievements } from "../Data/achievements";
import AOS from "aos";
import "aos/dist/aos.css";

const AchievementSection = () => {
  interface Achievement {
    image: { url: string };
    heading: string;
    description: string;
  }

  const [data, setData] = useState<{ heading: string; contents: Achievement[] }>({
    heading: "",
    contents: [],
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
