import React from 'react';

function ReviewSection() {
  return (
    <>
      <div className="bg-[#FFF9EB] w-[70%] m-auto max-w-7xl rounded-bl-4xl rounded-tr-4xl mt-12 flex flex-col lg:flex-row items-center p-6 lg:p-12 gap-6">
        <div className="lg:w-1/2 w-full">
          <img
            src="https://a.storyblok.com/f/64010/1000x672/212e6c58a0/compliance-corner-federal-hero-1-amer.png/m/1000x0"
            alt="Labor Law Compliance"
            className="w-full max-h-60 sm:max-h-72 md:max-h-80 object-contain rounded-3xl"
          />
        </div>
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <p className="text-[#B0006D] font-semibold text-sm uppercase mb-2">
            Simplify Timesheets, Payroll and Labor Compliance
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#1E1E90] mb-4">
            Uncomplicate labor law compliance
          </h2>
          <p className="text-gray-600 text-base mb-4">
            With Deputy's comprehensive workforce management solution, you can take the headache out of compliance so your business can thrive.
          </p>
          <a href="#" className="text-[#1E1E90] font-semibold underline">
            Learn more
          </a>
        </div>
      </div>

      <div className="w-full max-w-6xl mt-12 px-6 text-center pb-20 m-auto">
        <div className="flex items-center justify-center gap-4 pb-10">
          <hr className="flex-grow border-t border-gray-300" />
          <h3 className="text-sm sm:text-md font-bold text-blue-900 uppercase tracking-wider">
            Link with your existing software
          </h3>
          <hr className="flex-grow border-t border-gray-300" />
        </div>


        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 items-center justify-center ">
          {[
            ["https://a.storyblok.com/f/64010/320x120/6a3dbd60c8/integration-run-by-adp.png/m/0x0", "RUN by ADP"],
            ["https://a.storyblok.com/f/64010/320x50/95ce4bc7a5/integration-bamboohr.png/m/0x0", "BambooHR"],
            ["https://a.storyblok.com/f/64010/320x176/0b61e68c9f/integration-vend.png/m/0x0", "Vend"],
            ["https://a.storyblok.com/f/64010/320x80/2294a3563f/integration-square.png/m/0x0", "Square"],
            ["https://a.storyblok.com/f/64010/320x150/942ed9978d/integration-adp.png/m/0x0", "ADP"],
            ["https://a.storyblok.com/f/64010/320x60/a092427e73/integration-quickbooks.png/m/0x0", "QuickBooks"]
          ].map(([src, alt]) => (
            <img
              key={alt}
              src={src}
              alt={alt}
              className="h-6 sm:h-8 md:h-10 object-contain mx-auto"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ReviewSection;
