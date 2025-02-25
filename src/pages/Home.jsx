
import React, { useState } from "react";
import PropTypes from "prop-types";
import NewsCard from "../components/NewsCard";
import Banner from "../components/Banner";
import SubNavLinks from "../components/Navbar/SubNavLinks";
import BreakingNews from "../components/Navbar/BreakingNews";
import { useTheme } from "../context/ThemeContext";
import BannerImg from "../assets/Images/Banner.jpeg";
import pdfFile from "../assets/pdf/pdf.pdf";
import thumbnailImage from "../assets/Images/image.png";
import thumbnail1 from "../assets/Images/thumb1.png";
import thumbnail2 from "../assets/Images/thumb2.png";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing icons for previous and next buttons
import '../index.css';
import JoinedImageArches from "../components/Navbar/joined-image-arches";
import SplitScreenBlob from "../components/SplitScreenBlob";

function Home({ searchQuery }) {
  const { theme } = useTheme();

  const cards = [
    {
      imageSrc: thumbnailImage,
      title: "Breaking News: Global Tech Conference 2024",
      description:
        "The Global Tech Conference 2024 is set to bring together world leaders in the tech industry for an exchange of ideas and innovations...",
      date: "Aug 20, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "tech-conference.pdf",
    },
    {
      imageSrc: thumbnail1,
      title: "Economy Insights: Market Analysis for Q2",
      description:
        "An in-depth market analysis for Q2, highlighting economic trends, forecasts, and key takeaways for businesses and investors...",
      date: "Sep 10, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "q2-economy.pdf",
    },
    {
      imageSrc: thumbnail2,
      title: "AI Breakthrough: How GPT-5 is Transforming Industries",
      description:
        "The next generation of AI models is here. GPT-5 promises faster, more accurate results, revolutionizing multiple industries...",
      date: "Sep 15, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech"],
      onDownloadFileName: "gpt5-ai-news.pdf",
    },
    {
      imageSrc: thumbnail1,
      title: "Sustainability in Business: A New Era of Environmental Responsibility",
      description:
        "As the world shifts towards a more sustainable future, businesses are adapting to new environmental regulations and practices...",
      date: "Oct 1, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "sustainability-in-business.pdf",
    },
    {
      imageSrc: thumbnailImage,
      title: "Cybersecurity Threats: Protecting Your Business in the Digital Age",
      description:
        "With the rise of digital technologies, cybersecurity threats are becoming increasingly common. Learn how to protect your business...",
      date: "Oct 15, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "cybersecurity-threats.pdf",
    },
    {
      imageSrc: thumbnail2,
      title: "The Future of Healthcare: Advances in Medical Technology",
      description:
        "Discover the latest advancements in medical technology and how they are transforming the healthcare industry...",
      date: "Nov 1, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "future-of-healthcare.pdf",
    },
    {
      imageSrc: thumbnailImage,
      title: "Breaking News: Global Tech Conference 2024",
      description:
        "The Global Tech Conference 2024 is set to bring together world leaders in the tech industry for an exchange of ideas and innovations...",
      date: "Aug 20, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "tech-conference.pdf",
    },
    {
      imageSrc: thumbnail1,
      title: "Economy Insights: Market Analysis for Q2",
      description:
        "An in-depth market analysis for Q2, highlighting economic trends, forecasts, and key takeaways for businesses and investors...",
      date: "Sep 10, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "q2-economy.pdf",
    },
    {
      imageSrc: thumbnail2,
      title: "AI Breakthrough: How GPT-5 is Transforming Industries",
      description:
        "The next generation of AI models is here. GPT-5 promises faster, more accurate results, revolutionizing multiple industries...",
      date: "Sep 15, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech"],
      onDownloadFileName: "gpt5-ai-news.pdf",
    },
    {
      imageSrc: thumbnail1,
      title: "Sustainability in Business: A New Era of Environmental Responsibility",
      description:
        "As the world shifts towards a more sustainable future, businesses are adapting to new environmental regulations and practices...",
      date: "Oct 1, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "sustainability-in-business.pdf",
    },
    {
      imageSrc: thumbnailImage,
      title: "Cybersecurity Threats: Protecting Your Business in the Digital Age",
      description:
        "With the rise of digital technologies, cybersecurity threats are becoming increasingly common. Learn how to protect your business...",
      date: "Oct 15, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "cybersecurity-threats.pdf",
    },
    {
      imageSrc: thumbnail2,
      title: "The Future of Healthcare: Advances in Medical Technology",
      description:
        "Discover the latest advancements in medical technology and how they are transforming the healthcare industry...",
      date: "Nov 1, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "future-of-healthcare.pdf",
    },
    {
      imageSrc: thumbnailImage,
      title: "Breaking News: Global Tech Conference 2024",
      description:
        "The Global Tech Conference 2024 is set to bring together world leaders in the tech industry for an exchange of ideas and innovations...",
      date: "Aug 20, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "tech-conference.pdf",
    },
    {
      imageSrc: thumbnail1,
      title: "Economy Insights: Market Analysis for Q2",
      description:
        "An in-depth market analysis for Q2, highlighting economic trends, forecasts, and key takeaways for businesses and investors...",
      date: "Sep 10, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "q2-economy.pdf",
    },
    {
      imageSrc: thumbnail2,
      title: "AI Breakthrough: How GPT-5 is Transforming Industries",
      description:
        "The next generation of AI models is here. GPT-5 promises faster, more accurate results, revolutionizing multiple industries...",
      date: "Sep 15, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech"],
      onDownloadFileName: "gpt5-ai-news.pdf",
    },
    {
      imageSrc: thumbnail1,
      title: "Sustainability in Business: A New Era of Environmental Responsibility",
      description:
        "As the world shifts towards a more sustainable future, businesses are adapting to new environmental regulations and practices...",
      date: "Oct 1, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "sustainability-in-business.pdf",
    },
    {
      imageSrc: thumbnailImage,
      title: "Cybersecurity Threats: Protecting Your Business in the Digital Age",
      description:
        "With the rise of digital technologies, cybersecurity threats are becoming increasingly common. Learn how to protect your business...",
      date: "Oct 15, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "cybersecurity-threats.pdf",
    },
    {
      imageSrc: thumbnail2,
      title: "The Future of Healthcare: Advances in Medical Technology",
      description:
        "Discover the latest advancements in medical technology and how they are transforming the healthcare industry...",
      date: "Nov 1, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "future-of-healthcare.pdf",
    },
    {
      imageSrc: thumbnailImage,
      title: "Breaking News: Global Tech Conference 2024",
      description:
        "The Global Tech Conference 2024 is set to bring together world leaders in the tech industry for an exchange of ideas and innovations...",
      date: "Aug 20, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "tech-conference.pdf",
    },
    {
      imageSrc: thumbnail1,
      title: "Economy Insights: Market Analysis for Q2",
      description:
        "An in-depth market analysis for Q2, highlighting economic trends, forecasts, and key takeaways for businesses and investors...",
      date: "Sep 10, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "q2-economy.pdf",
    },
    {
      imageSrc: thumbnail2,
      title: "AI Breakthrough: How GPT-5 is Transforming Industries",
      description:
        "The next generation of AI models is here. GPT-5 promises faster, more accurate results, revolutionizing multiple industries...",
      date: "Sep 15, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech"],
      onDownloadFileName: "gpt5-ai-news.pdf",
    },
    {
      imageSrc: thumbnail1,
      title: "Sustainability in Business: A New Era of Environmental Responsibility",
      description:
        "As the world shifts towards a more sustainable future, businesses are adapting to new environmental regulations and practices...",
      date: "Oct 1, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "sustainability-in-business.pdf",
    },
    {
      imageSrc: thumbnailImage,
      title: "Cybersecurity Threats: Protecting Your Business in the Digital Age",
      description:
        "With the rise of digital technologies, cybersecurity threats are becoming increasingly common. Learn how to protect your business...",
      date: "Oct 15, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "cybersecurity-threats.pdf",
    },
    {
      imageSrc: thumbnail2,
      title: "The Future of Healthcare: Advances in Medical Technology",
      description:
        "Discover the latest advancements in medical technology and how they are transforming the healthcare industry...",
      date: "Nov 1, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "future-of-healthcare.pdf",
    },
    {
      imageSrc: thumbnailImage,
      title: "Breaking News: Global Tech Conference 2024",
      description:
        "The Global Tech Conference 2024 is set to bring together world leaders in the tech industry for an exchange of ideas and innovations...",
      date: "Aug 20, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "tech-conference.pdf",
    },
    {
      imageSrc: thumbnail1,
      title: "Economy Insights: Market Analysis for Q2",
      description:
        "An in-depth market analysis for Q2, highlighting economic trends, forecasts, and key takeaways for businesses and investors...",
      date: "Sep 10, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "q2-economy.pdf",
    },
    {
      imageSrc: thumbnail2,
      title: "AI Breakthrough: How GPT-5 is Transforming Industries",
      description:
        "The next generation of AI models is here. GPT-5 promises faster, more accurate results, revolutionizing multiple industries...",
      date: "Sep 15, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech"],
      onDownloadFileName: "gpt5-ai-news.pdf",
    },
    {
      imageSrc: thumbnail1,
      title: "Sustainability in Business: A New Era of Environmental Responsibility",
      description:
        "As the world shifts towards a more sustainable future, businesses are adapting to new environmental regulations and practices...",
      date: "Oct 1, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "sustainability-in-business.pdf",
    },
    {
      imageSrc: thumbnailImage,
      title: "Cybersecurity Threats: Protecting Your Business in the Digital Age",
      description:
        "With the rise of digital technologies, cybersecurity threats are becoming increasingly common. Learn how to protect your business...",
      date: "Oct 15, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "cybersecurity-threats.pdf",
    },
    {
      imageSrc: thumbnail2,
      title: "The Future of Healthcare: Advances in Medical Technology",
      description:
        "Discover the latest advancements in medical technology and how they are transforming the healthcare industry...",
      date: "Nov 1, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "future-of-healthcare.pdf",
    },
    {
      imageSrc: thumbnailImage,
      title: "Breaking News: Global Tech Conference 2024",
      description:
        "The Global Tech Conference 2024 is set to bring together world leaders in the tech industry for an exchange of ideas and innovations...",
      date: "Aug 20, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "tech-conference.pdf",
    },
    {
      imageSrc: thumbnail1,
      title: "Economy Insights: Market Analysis for Q2",
      description:
        "An in-depth market analysis for Q2, highlighting economic trends, forecasts, and key takeaways for businesses and investors...",
      date: "Sep 10, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "q2-economy.pdf",
    },
    {
      imageSrc: thumbnail2,
      title: "AI Breakthrough: How GPT-5 is Transforming Industries",
      description:
        "The next generation of AI models is here. GPT-5 promises faster, more accurate results, revolutionizing multiple industries...",
      date: "Sep 15, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech"],
      onDownloadFileName: "gpt5-ai-news.pdf",
    },
    {
      imageSrc: thumbnail1,
      title: "Sustainability in Business: A New Era of Environmental Responsibility",
      description:
        "As the world shifts towards a more sustainable future, businesses are adapting to new environmental regulations and practices...",
      date: "Oct 1, 2024",
      pdfSrc: pdfFile,
      categories: ["Tech", "Business"],
      onDownloadFileName: "sustainability-in-business.pdf",
    },

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
