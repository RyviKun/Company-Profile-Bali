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
           We are a professional event organizer specializing in B2B exhibitions, conferences, and corporate events across Indonesia. With an excellent team of experts, we don’t just organize events—we partner with our clients to bring their vision to life. From concept to execution, we ensure every detail reflects their goals, while creating impactful platforms that connect businesses, expand networks, and unlock new market opportunities.

          Driven by innovation and professionalism, we deliver events that engage the right audience, open doors to new markets, and strengthen brand presence in Indonesia’s dynamic business landscape.
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