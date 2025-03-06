import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { getPlans } from "../Data/plans";

interface Plan {
  title: string;
  subtitle: string;
  users: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
}

const PricingPlans = () => {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchPlans = async () => {
      const data = await getPlans();
      setPlans(data);
    };

    fetchPlans();
  }, []);

  return (
    <section className="py-12 px-6 md:px-12 lg:px-24">
      <h2 data-aos="zoom-in" className="text-center text-3xl md:text-4xl font-bold">
        Choose a plan for success
      </h2>
      <p className="text-center text-gray-600 mt-2">
        Don't want to buy courses one by one? Pick a plan to help you, your team, or your organization achieve outcomes faster.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg p-6 bg-white"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <h3 className="text-xl font-semibold">{plan.title}</h3>
            <p className="text-gray-600">{plan.subtitle}</p>
            <p className="text-gray-500 text-sm">{plan.users}</p>

            <p className="mt-4 text-lg font-bold">{plan.price}</p>
            <p className="text-gray-500">{plan.description}</p>

            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {plan.features.map((feature: string, i: number) => (
                <li key={i} className="flex items-center">
                  * {feature}
                </li>
              ))}
            </ul>

            <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
      <div>
      </div>
    </section>
  );
};

export default PricingPlans;
