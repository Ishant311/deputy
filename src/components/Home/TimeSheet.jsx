export default function TimesheetCompliance() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between p-6 lg:p-12 gap-8 bg-white">
      
      <div className="lg:w-1/2 w-full text-center lg:text-left">
        <h1 className="text-3xl xl:text-5xl font-bold text-[#1E1E90] mb-4">
          Simplify timesheets
          <br /> and compliance
        </h1>
        <p className="text-gray-600 text-base xl:text-lg mb-6">
          Help your business avoid costly payroll mistakes or compliance errors. Record accurate timesheets with ease and manage local, state and federal labor laws in one platform.
        </p>
        <a href="#" className="text-[#1E1E90] font-semibold underline">
          Check out timesheets & compliance
        </a>

        <div className="mt-10 p-4 border rounded-xl flex items-center gap-4 shadow-sm">
          <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-[#00BFFF]">
            <img
              src="https://a.storyblok.com/f/64010/300x200/426c974548/treklogo-thumb.png/m/120x0"
              alt="Trek Logo"
              className="w-10"
            />
          </div>
          <div>
            <p className="font-semibold text-[#1E1E90] italic">
              “Deputy is making sure that we have the right labor laws in place.”
            </p>
            <p className="text-sm text-gray-500 mt-1">Trek Bikes</p>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 w-full flex items-center justify-center px-4 lg:px-8">
        <img
          src="https://a.storyblok.com/f/64010/1200x1400/595ae5f4fb/simplify-timesheets-compliance-us.png/m/1200x0"
          alt="Timesheet App"
          className="w-full max-w-[400px] lg:max-w-[500px] h-auto object-contain rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
}
