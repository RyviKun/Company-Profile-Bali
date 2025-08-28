export default function OverviewSection() {
  return (
    <div className="max-w-7xl mx-auto px-0 md:px-12">
      <div className="relative flex flex-col md:flex-row items-center gap-10">

        {/* Mobile Image with Overlay Text */}
        <div className="md:hidden relative w-full">
          <img
            src="/images/aboutus-banner.jpg"
            alt="Business Team"
            className="w-auto h-[400px] object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-0 inset-x-0 bg-black/40 rounded-b-lg p-6">
            <h2 className="text-2xl font-bold text-white leading-snug mb-4">
              We Help Business Grow <br /> and Become Successful
            </h2>
            <p className="text-white text-sm">
              We are a professional event organizer specializing in B2B exhibitions, conferences, and corporate events across Indonesia. With an excellent team of experts, we don’t just organize events—we partner with our clients to bring their vision to life. From concept to execution, we ensure every detail reflects their goals, while creating impactful platforms that connect businesses, expand networks, and unlock new market opportunities.

              Driven by innovation and professionalism, we deliver events that engage the right audience, open doors to new markets, and strengthen brand presence in Indonesia’s dynamic business landscape.
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-1">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-background leading-snug mb-4">
              We Help Business Grow <br /> and Become Successful
            </h2>
            <p className="text-background mb-6">
              We are a professional event organizer specializing in B2B exhibitions, conferences, and corporate events across Indonesia. With an excellent team of experts, we don’t just organize events—we partner with our clients to bring their vision to life. From concept to execution, we ensure every detail reflects their goals, while creating impactful platforms that connect businesses, expand networks, and unlock new market opportunities.

              Driven by innovation and professionalism, we deliver events that engage the right audience, open doors to new markets, and strengthen brand presence in Indonesia’s dynamic business landscape.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/images/aboutus-banner.jpg"
              alt="Business Team"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}