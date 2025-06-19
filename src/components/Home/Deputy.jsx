import React from 'react';

const DeputySection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-14">
        
        <div className="w-full lg:w-1/2 flex items-center justify-center px-4 lg:px-8">
          <img 
            src="https://a.storyblok.com/f/64010/1200x1400/915d96af46/build-smart-schedules-us.png/m/1200x0"  
            alt="Scheduling Dashboard" 
            className="w-full max-w-[400px] lg:max-w-[500px] h-auto rounded-xl shadow-xl"
          />
        </div>

        <div className="lg:w-1/2 w-full flex flex-col justify-start items-start space-y-8 p-5">
          
          <h2 className="text-3xl xl:text-5xl font-extrabold text-blue-900 leading-tight">
            Smart schedules,<br className="hidden lg:block" />
            in just a few clicks
          </h2>
          
          <p className="text-gray-700 text-lg xl:text-xl leading-relaxed">
            Make employee schedules better for your team and your bottom line. 
            Create schedules in minutes. Swap shifts without the usual hassle. 
            And keep your labor costs under budget.
          </p>
          
          <a 
            href="#" 
            className="text-blue-800 font-bold text-lg underline underline-offset-4 hover:text-blue-600 transition"
          >
            Check out team scheduling
          </a>

          <div className="border border-gray-300 rounded-2xl p-6 bg-gray-100 w-full shadow-sm">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
              
              <img 
                src="https://a.storyblok.com/f/64010/160x160/4a773bb5b7/customer-logo-juice-press.png/m/120x0" 
                alt="Juice Press Logo" 
                className="w-[110px] h-[80px] p-2 rounded-full border-3 border-purple-400"
              />
              
              <div>
                <p className="text-blue-900 italic text-base xl:text-lg font-bold">
                  “We have saved over $200,000 a year 
                  on front-of-house labor just by being able to put the right people in the right places.”
                </p>
                <span className="not-italic font-semibold text-blue-900 mt-2 block text-sm xl:text-base">
                  — Juice Press
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DeputySection;
