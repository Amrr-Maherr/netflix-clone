export default function Hero() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg_image.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-12 text-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-lg max-w-3xl">
          Unlimited movies, TV shows, and more
        </h1>

        <p className="text-white/80 mt-4 sm:mt-6 max-w-xl text-base sm:text-lg md:text-xl leading-relaxed drop-shadow">
          Starts at EGP 100. Cancel anytime.
        </p>
        <p className="text-white/80 mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed drop-shadow">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full max-w-[830px]">
          <input
            type="email"
            placeholder="Email address"
            className="w-full flex-1 px-4 py-3 rounded-md bg-black/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm sm:text-base"
          />
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 sm:px-6 py-3 rounded-md transition text-sm sm:text-base">
            Get Started &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
