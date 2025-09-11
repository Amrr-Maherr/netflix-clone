import Header from "../../Components/header/Header"
import FadeContent from "../animation/FadeContent/FadeContent";
import SplitText from "../animation/SplitText/SplitText";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
export default function Hero() {
  return (
    <>
      <Header />
      <section
        className="relative h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg_image.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-12 text-center">
          <SplitText
            text="Unlimited movies, TV shows, and more"
            className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-lg max-w-3xl"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <SplitText
            text="Starts at EGP 100. Cancel anytime."
            className="text-white/80 mt-4 sm:mt-6 max-w-xl text-base sm:text-lg md:text-xl leading-relaxed drop-shadow"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <SplitText
            text="Ready to watch? Enter your email to create or restart your
              membership."
            className="text-white/80 mt-4 sm:mt-6 max-w-xl text-base sm:text-lg md:text-xl leading-relaxed drop-shadow"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <FadeContent className="md:w-[830px] w-full">
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full">
              <Input
                type="email"
                placeholder="Email address"
                className="w-full flex-1 h-[60px] py-4 px-4 rounded-md bg-black/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E50914] text-sm sm:text-base border-0"
              />
              <Button className="bg-[#E50914] cursor-pointer w-full md:w-fit hover:bg-[#B00710] text-white font-semibold px-5 sm:px-6 h-[60px] rounded-md transition text-sm sm:text-base">
                Get Started &gt;
              </Button>
            </div>
          </FadeContent>
        </div>
      </section>
    </>
  );
}
