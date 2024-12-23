import PropTypes from "prop-types";
import NewsCard from "../components/NewsCard";
import Banner from "../components/Banner";
import BannerImg from "../assets/Images/Banner.jpeg";
import pdfFile from "../assets/pdf/pdf.pdf";
import thumbnailImage from "../assets/Images/image.png";

function CTWorld({ searchQuery }) {
  const cards = [
    {
      imageSrc: thumbnailImage,
      title: "Breaking News: Global Tech Conference 2024",
      description:
        "The Global Tech Conference 2024 is set to bring together world leaders in the tech industry for an exchange of ideas and innovations...",
      date: "Aug 20, 2024",
      pdfSrc: pdfFile,
      onDownloadFileName: "tech-conference.pdf",
    },
    {
      imageSrc: thumbnailImage,
      title: "Economy Insights: Market Analysis for Q2",
      description:
        "An in-depth market analysis for Q2, highlighting economic trends, forecasts, and key takeaways for businesses and investors...",
      date: "Sep 10, 2024",
      pdfSrc: pdfFile,
      onDownloadFileName: "q2-economy.pdf",
    },
    {
      imageSrc: thumbnailImage,
      title: "AI Breakthrough: How GPT-5 is Transforming Industries",
      description:
        "The next generation of AI models is here. GPT-5 promises faster, more accurate results, revolutionizing multiple industries...",
      date: "Sep 15, 2024",
      pdfSrc: pdfFile,
      onDownloadFileName: "gpt5-ai-news.pdf",
    },
    {
      imageSrc: thumbnailImage,
      title: "Sustainability in Business: A New Era of Environmental Responsibility",
      description:
        "As the world shifts towards a more sustainable future, businesses are adapting to new environmental regulations and practices...",
      date: "Oct 1, 2024",
      pdfSrc: pdfFile,
      onDownloadFileName: "sustainability-in-business.pdf",
    },
    {
      imageSrc: thumbnailImage,
      title: "Cybersecurity Threats: Protecting Your Business in the Digital Age",
      description:
        "With the rise of digital technologies, cybersecurity threats are becoming increasingly common. Learn how to protect your business...",
      date: "Oct 15, 2024",
      pdfSrc: pdfFile,
      onDownloadFileName: "cybersecurity-threats.pdf",
    },
    {
      imageSrc: thumbnailImage,
      title: "The Future of Healthcare: Advances in Medical Technology",
      description:
        "Discover the latest advancements in medical technology and how they are transforming the healthcare industry...",
      date: "Nov 1, 2024",
      pdfSrc: pdfFile,
      onDownloadFileName: "future-of-healthcare.pdf",
    },
  ];

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className=" bg-gray-50 min-h-screen">
      <Banner imageUrl={BannerImg} altText="Banner" />
      <h1 className="text-3xl font-bold text-blue-900 mb-6 mt-10 pl-8">
        CT WORLD
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <NewsCard
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
              date={card.date}
              pdfSrc={card.pdfSrc}
              onDownloadFileName={card.onDownloadFileName}
            />
          ))
        ) : (
          <p className="text-gray-600">No results found.</p>
        )}
      </div>
    </div>
  );
}

CTWorld.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default CTWorld;
