const StatsSection = () => {
  return (
    <section className="pt-20 bg-white text-center md:pb-30 pb-10">
      <div className="max-w-xl md:max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-blue-900 px-4">
        <div className="space-y-2 lg:border-r-2 border-r-amber-300 flex items-center flex-col justify-center">
          <p className="text-base md:text-lg lg:text-xl text-gray-600">Used in</p>
          <p className="text-xl md:text-2xl lg:text-4xl font-extrabold">100+</p>
          <p className="text-sm md:text-lg lg:text-xl font-bold">countries</p>
        </div>
        <div className="space-y-2 lg:border-r-2 border-r-amber-300 flex items-center flex-col justify-center">
          <p className="text-base md:text-lg lg:text-xl text-gray-600">Supporting</p>
          <p className="text-xl md:text-2xl lg:text-4xl font-extrabold">380,000+</p>
          <p className="text-sm md:text-lg lg:text-xl font-bold">workplaces</p>
        </div>
        <div className="space-y-2 lg:border-r-2 border-r-amber-300 flex items-center flex-col justify-center">
          <p className="text-base md:text-lg lg:text-xl text-gray-600">Loved By</p>
          <p className="text-xl md:text-2xl lg:text-4xl font-extrabold">1.4 million</p>
          <p className="text-sm md:text-lg lg:text-xl font-bold">shift workers</p>
        </div>
        <div className="space-y-2 flex items-center flex-col justify-center">
          <p className="text-base md:text-lg lg:text-xl text-gray-600">Over</p>
          <p className="text-xl md:text-2xl lg:text-4xl font-extrabold">700 million</p>
          <p className="text-sm md:text-lg lg:text-xl font-bold">shifts scheduled</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
