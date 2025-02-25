import "./Banner.css";
import hero from "../assets/Images/hero-bg.png";
function Banner() {
  return (
    <div className="px-5 md:px-6 lg:px-6">
      <div className="banner" style={{ backgroundImage: `url(${hero})` }}>
        <div className="banner-section">
          <span className="small-letter text-[9vw] text-[#F9CC17] font-extrabold">
            C
          </span>
          <span className="small-letter text-[7vw] text-[#F9CC17] font-extrabold">
            E
          </span>
          <span className="small-letter text-[7vw] text-[#F9CC17] font-extrabold">
            E
          </span>
        </div>
        <div className="banner-section">
          <span className="small-letter text-[9vw] text-[#F9CC17] font-extrabold">
            T
          </span>
          <span className="small-letter text-[7vw] text-[#F9CC17] font-extrabold">
            E
          </span>
          <span className="small-letter text-[7vw] text-[#F9CC17] font-extrabold">
            E
          </span>
        </div>
        <div className="banner-section">
          <span className="small-letter text-[9vw] text-[#F9CC17] font-extrabold">
            W
          </span>
          <span className="small-letter text-[7vw] text-[#F9CC17] font-extrabold">
            O
          </span>
          <span className="small-letter text-[7vw] text-[#F9CC17] font-extrabold">
            R
          </span>
          <span className="small-letter text-[7vw] text-[#F9CC17] font-extrabold">
            L
          </span>
          <span className="small-letter text-[7vw] text-[#F9CC17] font-extrabold">
            D
          </span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
