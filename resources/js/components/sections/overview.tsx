export default function OverviewSection() {
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 gap-10">
        
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-background leading-snug mb-4">
            We Help Business Grow <br /> and Become Successful
          </h2>
          <p className="text-background mb-6">
            Our 50 years’ experienced minds are the top consulting firm worldwide.
          </p>
          
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/aboutus-banner.jpg"
            alt="Business Team"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </>
  );
}