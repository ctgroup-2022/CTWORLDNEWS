import React, { useState } from 'react';
import shahpur from "../../assets/Images/shahpur.png";
import maqsudan from "../../assets/Images/maqsudan.png";
import ctuniversity from "../../assets/Images/university.png";
import ctpublic from "../../assets/Images/public.png";
import ctworld from "../../assets/Images/world.png";
import ctglobal from "../../assets/Images/global.png";
import { useNavigate } from 'react-router-dom';
export default function JoinedImageArches() {
  const [theme, setTheme] = useState('dark'); // Default theme state
  const navigate = useNavigate();

  // Placeholder images using API placeholder service
  const campusImages = [
    ctpublic,
    maqsudan,
    shahpur,
    ctuniversity,
    ctworld,
    ctglobal
  ];

  const cards = [
    { id: 1, image: campusImages[0], route: "/ctpublic" },
    { id: 2, image: campusImages[1], route: "/ctmaqsudan" },
    { id: 3, image: campusImages[2], route: "/ctshahpur" },
    { id: 4, image: campusImages[3], route: "/ctuniversity" },
    { id: 5, image: campusImages[4], route: "/ctworld" },
    { id: 6, image: campusImages[5], route: "/ctglobal" },
  ];

  const handleCardClick = (route) => {
    navigate(route);
  };

  const Card = ({ image, route, id }) => (
    <div
      className={`relative w-full h-48 sm:h-80 bg-cover bg-center opacity-90 cursor-pointer`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      onClick={() => handleCardClick(route)}
    >
      <div className={`absolute inset-0 ${theme === "light" ? " opacity-30" : " opacity-50"}`}></div>

      <div className={`absolute ${id === 5 ? 'bottom-8' : 'bottom-10'} left-0 right-0 flex justify-center`}>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent double navigation
            handleCardClick(route);
          }}
          className="backdrop-blur-sm bg-[#003B95]/70 hover:bg-[#155DA8]/80 
            text-white font-medium px-4 py-2 rounded-lg
            border border-white/20 
            shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
            transition-all duration-200 
            hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.57)]
            hover:border-white/30
            max-sm:text-[10px] max-[330px]:px-2"
        >
          Explore More
        </button>
      </div>
    </div>
  );

  // Update in the return statement


  return (
    <div className={`h-full p-4 ${theme === "light" ? "bg-gray-50" : ""}`}>
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {cards.map((card) => (
            <div key={card.id} className={card.id !== 5 ? "pt-2" : ""}>
              <Card image={card.image} route={card.route} id={card.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}