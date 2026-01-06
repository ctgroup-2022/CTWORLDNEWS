
import React, { useState } from "react";
import PropTypes from "prop-types";
import NewsCard from "../components/NewsCard";
import Banner from "../components/Banner";
import SubNavLinks from "../components/Navbar/SubNavLinks";
import BreakingNews from "../components/Navbar/BreakingNews";
import { useTheme } from "../context/ThemeContext";
import BannerImg from "../assets/Images/Banner.jpeg";
import pdfFile from "../assets/pdf/1.pdf";
import pdfFile1 from "../assets/pdf/2.pdf";
import pdfFile2 from "../assets/pdf/3.pdf";
import pdfFile3 from "../assets/pdf/4.pdf";
import pdfFile4 from "../assets/pdf/5.pdf";
import pdfFile5 from "../assets/pdf/6.pdf";
import pdfFile6 from "../assets/pdf/7.pdf";
import pdfFile7 from "../assets/pdf/8.pdf";
import thumbnailImage from "../assets/Images/2.png";
import thumbnail1 from "../assets/Images/3.png";
import thumbnail2 from "../assets/Images/4.png";
import thumbnail3 from "../assets/Images/5.png";
import thumbnail4 from "../assets/Images/6.png";
import thumbnail5 from "../assets/Images/7.png";
import thumbnail6 from "../assets/Images/8.jpg";
import thumbnail7 from "../assets/Images/9.jpg";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing icons for previous and next buttons
import '../index.css';
import JoinedImageArches from "../components/Navbar/joined-image-arches";
import SplitScreenBlob from "../components/SplitScreenBlob";
import Landing from "./LandingPage";

function Home({ searchQuery }) {
  const { theme } = useTheme();

  const cards = [
    {
      imageSrc: thumbnailImage,
      title: "",
      description:
        "",
      date: "January, 2026",
      pdfSrc: pdfFile,
   
      onDownloadFileName: "1.pdf",
    },
    {
      imageSrc: thumbnail1,
      title: "",
      description:
        "",
      date: "December, 2025",
      pdfSrc: pdfFile1,
     
      onDownloadFileName: "2.pdf",
    },
     
    {
      imageSrc: thumbnail2,
      title: "",
      description:
        "",
      date: "September, 2025",
      pdfSrc: pdfFile2,
     
      onDownloadFileName: "3.pdf",
    },
    {
      imageSrc: thumbnail3,
      title: "",
      description:
        "",
      date: "August, 2025",
      pdfSrc: pdfFile3,
    
      onDownloadFileName: "4.pdf",
    },
    {
      imageSrc: thumbnail4,
      title: "",
      description:
        "",
      date: "January, 2026",
      pdfSrc: pdfFile4,
   
      onDownloadFileName: "5.pdf",
    },
    {
      imageSrc: thumbnail5,
      title: "",
      description:
        "",
      date: "December, 2025",
      pdfSrc: pdfFile5,
     
      onDownloadFileName: "6.pdf",
    },
     
    {
      imageSrc: thumbnail6,
      title: "",
      description:
        "",
      date: "September, 2025",
      pdfSrc: pdfFile6,
     
      onDownloadFileName: "7.pdf",
    },
    {
      imageSrc: thumbnail7,
      title: "",
      description:
        "",
      date: "August, 2025",
      pdfSrc: pdfFile7,
    
      onDownloadFileName: "8.pdf",
    },
    // {
    //   imageSrc: thumbnail4,
    //   title: "",
    //   description:
    //     "",
    //   date: "July, 2024",
    //   pdfSrc: pdfFile4,
   
    //   onDownloadFileName: "5.pdf",
    // },


  ];


  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 8;
  const pageCount = Math.ceil(filteredCards.length / cardsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * cardsPerPage;
  const currentCards = filteredCards.slice(offset, offset + cardsPerPage);

  const subNavLinks = [
    { name: "CT University", gradient: "from-red-400 to-pink-500", route: "/ctuniversity" },
    { name: "CT Public", gradient: "from-green-400 to-blue-500", route: "/ctpublic" },
    { name: "CT World", gradient: "from-purple-400 to-indigo-500", route: "/ctworld" },
    { name: "CT Global", gradient: "from-yellow-400 to-orange-500", route: "/ctglobal" },
    { name: "CT Shahpur", gradient: "from-teal-400 to-cyan-500", route: "/ctshahpur" },
    { name: "CT Maqsudan", gradient: "from-gray-400 to-gray-600", route: "/ctmaqsudan" },
  ];

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-50 text-gray-900' : 'bg-gray-800 text-white'}`}>


      <div className={`mt-[88px] px-5 md:px-6 lg:px-6 py-4 ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-800'}`}>
        <BreakingNews />
      </div>
      <div className={`${theme === 'light' ? 'bg-gray-50' : 'bg-gray-800'}`}>
        <Banner imageUrl={BannerImg} altText="Banner" />
      </div>


      <div className="relative flex flex-col items-center">
        {/* Heading */}
        <h1
          className={`text-4xl text-center mt-4 font-bold ${theme === 'light' ? 'text-[#195CA0]' : 'text-[#FBCC12]'
            }`}
        >
          HOME
        </h1>

        {/* SVG Underline */}
        <svg
          width="180"
          height="10"
          viewBox="0 0 180 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-2"
        >
          <line
            x1="0"
            y1="5"
            x2="180"
            y2="5"
            stroke={theme === 'light' ? '#195CA0' : '#FBCC12'}
            strokeWidth="4"
            strokeLinecap="round"
            className="animate-draw"
          />
        </svg>
      </div>

      {/* SubNavLinks directly after Banner */}
      <div className={` my-8 ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-800'}`}>
        <JoinedImageArches />
      </div>


      {/* Pagination */}
      <div className="flex justify-center mb-6">
        <ReactPaginate
          breakLabel={"..."}
          breakClassName="break-me text-sm text-gray-500"
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={`pagination flex flex-wrap justify-center items-center space-x-1 sm:space-x-3 ${theme === "light" ? "text-black" : "text-white"}`}
          pageClassName={`page-item w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex justify-center items-center rounded-full transition-all duration-300 ease-in-out font-bold text-sm sm:text-base lg:text-lg ${theme === "light"
            ? "bg-gray-100 text-black shadow-[0_4px_8px_rgba(0,0,0,0.2),0_6px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
            : "bg-gray-800 text-white shadow-[0_4px_8px_rgba(255,255,255,0.1),0_6px_12px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_16px_rgba(255,255,255,0.2)]"
            }`}
          pageLinkClassName="page-link cursor-pointer rounded-full w-full h-full flex justify-center items-center"
          activeClassName={`active font-bold ${theme === "light"
            ? "bg-[#195CA0] text-black shadow-[0_8px_16px_rgba(25,92,160,0.35)]"
            : "bg-[#FBCC12] text-black shadow-[0_8px_16px_rgba(251,204,18,0.4)]"
            }`}
          previousClassName={`previous-page w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center rounded-full cursor-pointer transition-all duration-300 ease-in-out ${theme === "light"
            ? "bg-gray-100 text-black shadow-[0_4px_8px_rgba(0,0,0,0.2),0_6px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
            : "bg-gray-800 text-white shadow-[0_4px_8px_rgba(255,255,255,0.1),0_6px_12px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_16px_rgba(255,255,255,0.2)]"
            }`}
          nextClassName={`next-page w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center rounded-full cursor-pointer transition-all duration-300 ease-in-out ${theme === "light"
            ? "bg-gray-100 text-black shadow-[0_4px_8px_rgba(0,0,0,0.2),0_6px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
            : "bg-gray-800 text-white shadow-[0_4px_8px_rgba(255,255,255,0.1),0_6px_12px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_16px_rgba(255,255,255,0.2)]"
            }`}
          previousLabel={
            <FaChevronLeft
              className={`text-base sm:text-lg ${theme === "light" ? "text-black" : "text-white"}`}
            />
          }
          nextLabel={
            <FaChevronRight
              className={`text-base sm:text-lg ${theme === "light" ? "text-black" : "text-white"}`}
            />
          }
        />
      </div>



      <div className="flex flex-wrap justify-center gap-6">
        {currentCards.length > 0 ? (
          currentCards.map((card, index) => (
            <NewsCard
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
              date={card.date}
              categories={card.categories}
              pdfSrc={card.pdfSrc}
              onDownloadFileName={card.onDownloadFileName}
            />
          ))
        ) : (
          <p className={`${theme === 'light' ? 'text-gray-50' : 'text-gray-600'}`}>No results found.</p>
        )}
      </div>
      <div className="">
        <SplitScreenBlob />
      </div>
    </div>
  );
}

Home.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default Home;
