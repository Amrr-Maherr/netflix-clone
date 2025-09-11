export default function CurveContainer({ children }) {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-24 md:h-40 bg-black"
        style={{
          clipPath: "ellipse(150% 100% at 50% 0%)",
        }}
      ></div>
      <div className="relative z-10 pt-16 md:pt-24 px-6 md:px-12 pb-12 max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
