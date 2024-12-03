import React from "react";

export default function Step() {
  const steps = [
    {
      step: "Step 1",
      title: "Filter & Discover",
      description: "Smart filtering and suggestions make it easy to find",
      color: "bg-red-100 text-red-600",
      image: "",
    },
    {
      step: "Step 2",
      title: "Add to bag",
      description: "Easily select the correct items and add them to the cart",
      color: "bg-blue-100 text-blue-600",
      image: "",
    },
    {
      step: "Step 3",
      title: "Fast Shipping",
      description: "The carrier will confirm and ship quickly to you",
      color: "bg-yellow-100 text-yellow-600",
      image: "",
    },
    {
      step: "Step 4",
      title: "Enjoy the product",
      description: "Have fun and enjoy your 5-star quality products",
      color: "bg-purple-100 text-purple-600",
      image: "",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex flex-wrap justify-between items-center space-y-4 md:space-y-0">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 w-1/2 md:w-1/4"
          >
            <div className="w-20 h-20">
              <img
                src={step.image}
                alt={step.title}
                className="object-contain w-full h-full"
              />
            </div>
            <div className={`mt-4 px-2 py-1 rounded-full ${step.color}`}>
              {step.step}
            </div>
            <h3 className="mt-4 font-bold text-lg">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
