const getPlans = async () => {
  return [
    {
      title: "Personal Plan",
      subtitle: "For you",
      users: "Individual",
      price: "₹850 per month",
      description: "Billed monthly or annually. Cancel anytime.",
      features: [
        "Access to 12,000+ top courses",
        "Certification prep",
        "Goal-focused recommendations",
        "AI-powered coding exercises",
      ],
      buttonText: "Start subscription",
    },
    {
      title: "Team Plan",
      subtitle: "For your team",
      users: "2 to 20 people",
      price: "₹2,000 a month per user",
      description: "Billed annually. Cancel anytime.",
      features: [
        "Access to 12,000+ top courses",
        "Certification prep",
        "Goal-focused recommendations",
        "AI-powered coding exercises",
        "Analytics and adoption reports",
      ],
      buttonText: "Start subscription",
    },
    {
      title: "Enterprise Plan",
      subtitle: "For your whole organization",
      users: "More than 20 people",
      price: "Contact sales for pricing",
      description: "",
      features: [
        "Access to 27,000+ top courses",
        "Certification prep",
        "Goal-focused recommendations",
        "AI-powered coding exercises",
        "Advanced analytics and insights",
        "Dedicated customer success team",
        "International course collection featuring 15 languages",
        "Customizable content",
        "Hands-on tech training with add-on",
        "Strategic implementation services with add-on",
      ],
      buttonText: "Request a demo",
    },
  ];
};
export default getPlans;
