import React from 'react';

const logos = [
  {
    name: "Dutch Bros",
    url: "https://a.storyblok.com/f/64010/260x120/28494c16ec/dutchbros.png",
  },
  {
    name: "Reliant",
    url: "https://a.storyblok.com/f/64010/260x120/f543a4ce79/reliant-healthcare.png",
  },
  {
    name: "Harper Logistics",
    url: "https://a.storyblok.com/f/64010/260x120/3790b608bb/harper-logistics.png",
  },
  {
    name: "Mercy Urgent Care",
    url: "https://a.storyblok.com/f/64010/260x120/0d74e540e5/mercy-urgent-care.png",
  },
  {
    name: "F45",
    url: "https://a.storyblok.com/f/64010/260x120/0d74e540e5/mercy-urgent-care.png",
  },
  {
    name: "Ace Hardware",
    url: "https://a.storyblok.com/f/64010/390x180/b444dce44a/ace-hardware-3x.png",
  },
];

const TrustedBrandsSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        
        <div className="flex items-center justify-center gap-4">
          <hr className="flex-grow border-t border-gray-300" />
          <h3 className="text-sm sm:text-md font-bold text-blue-900 uppercase tracking-wider">
            Loved by 385,000+ workplaces globally
          </h3>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.url}
              alt={logo.name}
              className="h-10 md:h-12 object-contain "
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrandsSection;
