import { useEffect, useState } from "react";
import { getCompanies } from "../Data/companies";

const CompanySection = () => {
  interface Company {
    url: string;
    altText: string;
  }

  const [data, setData] = useState<{ heading: string; contents: Company[] }>({
    heading: "",
    contents: [],
  });

  useEffect(() => {
    setData(getCompanies());
  }, []);

  return (
    <section className="py-10 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-6">{data.heading}</h2>

      <div className="relative overflow-hidden w-full">
        <div className="flex items-center gap-10 animate-scroll">

          {/* Duplicate the logos to create an infinite scrolling effect */}
          {[...data.contents, ...data.contents].map((company, index) => (
            <img
              key={index}
              src={company.url}
              alt={company.altText}
              className="w-40 h-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
