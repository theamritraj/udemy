import React, { useEffect, useState } from "react";
import getAchievements from "../Data/achievements";
import AOS from "aos";
import "aos/dist/aos.css";

interface ContentType {
  image: {
    url: string;
  };
  heading: string;
  description: string;
}

interface Achievement {
  labelText: string;
  description: string;
  contentUrl?: string;
  contentUrlText?: string;
  contents?: ContentType[];
}

const AchievementSection: React.FC = () => {
  const [achievements, setAchievements] = useState<{ heading: string; contents: Achievement[] } | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const fetchData = async () => {
      const data = await getAchievements();
      setAchievements(data);
    };
    fetchData();
  }, []);

  if (!achievements) return <p>Loading...</p>;

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8" data-aos="fade-up">
          {achievements.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.contents.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <p className="text-sm font-semibold text-gray-500 mb-2">{item.labelText}</p>
              <div dangerouslySetInnerHTML={{ __html: item.description }} className="text-gray-700 mb-4" />
              {item.contentUrl && (
              <a
                href={item.contentUrl}
                className="text-blue-600 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                dangerouslySetInnerHTML={{ __html: item.contentUrlText || "" }}
              />
              )}
              {(item.contents as ContentType[])?.map((content, idx) => (
              <div key={idx} className="mt-4 flex items-center">
                <img src={content.image.url} alt={content.heading} className="w-12 h-12 rounded-full mr-4" />
                <div>
                <h4 className="font-semibold">{content.heading}</h4>
                <div className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: content.description }} />
                </div>
              </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
