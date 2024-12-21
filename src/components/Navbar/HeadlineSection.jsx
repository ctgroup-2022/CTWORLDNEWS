import { useEffect, useRef } from "react";

const HeadlineSection = () => {
  const headlines = [
    "Welcome to CEETEEWORLD - Your Ultimate Destination!",
    "Admissions Open for 2024 - Apply Now!",
    "Explore Our State-of-the-Art Facilities.",
    "Empowering Minds, Transforming Futures.",
    "Discover Excellence in Education at CEETEEWORLD.",
  ];

  const scrollContainer = useRef(null);

  useEffect(() => {
    const container = scrollContainer.current;
    let animationFrame;

    const scrollStep = () => {
      container.scrollLeft += 1;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      animationFrame = requestAnimationFrame(scrollStep);
    };

    animationFrame = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="bg-white shadow-md py-1 flex items-center ">
      {/* Breaking News Label */}
      <div className=" font-bold px-4 py-2 text-xl flex-shrink-0 rounded-l-md ml-3">
        Breaking News:
      </div>
      {/* Scrolling Headlines */}
      <div
        ref={scrollContainer}
        className="overflow-hidden whitespace-nowrap relative flex text-gray-800 text-lg font-semibold"
        style={{ display: "flex", animation: "scroll 30s linear infinite" }}
      >
        <div className="flex">
          {headlines.map((headline, index) => (
            <span
              key={index}
              className="px-8 py-2 mx-4 border-r border-gray-300"
              style={{ display: "inline-block" }}
            >
              {headline}
            </span>
          ))}
          {/* Repeat headlines for seamless scrolling */}
          {headlines.map((headline, index) => (
            <span
              key={`${index}-repeat`}
              className="px-8 py-2 mx-4 border-r border-gray-300"
              style={{ display: "inline-block" }}
            >
              {headline}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeadlineSection;
