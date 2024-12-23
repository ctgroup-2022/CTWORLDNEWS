import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './BreakingNews.css';

const BreakingNews = () => {
  const newsBarRef = useRef(null);
  const newsTextRef = useRef(null);

  const headlines = [
    'Breaking: Global markets see a sharp rise today.',
    'Tech stocks hit record highs amid AI advancements.',
    'Weather Update: Rain expected in northern regions.',
    'Sports: Championship finals scheduled for this weekend.',
    'Jobs: New employment opportunities in tech sector.'
  ];

  useEffect(() => {
    let currentHeadlineIndex = 0;

    const typewriterEffect = () => {
      const currentHeadline = headlines[currentHeadlineIndex];
      let currentCharIndex = 0;

      const typeNextChar = () => {
        gsap.to(newsTextRef.current, {
          text: currentHeadline.substring(0, currentCharIndex + 1),
          duration: 0.1,
          onComplete: () => {
            if (currentCharIndex < currentHeadline.length - 1) {
              currentCharIndex++;
              typeNextChar();
            } else {
              setTimeout(() => {
                currentHeadlineIndex = (currentHeadlineIndex + 1) % headlines.length;
                newsTextRef.current.textContent = '';
                typewriterEffect();
              }, 2000); // Wait for 2 seconds before starting next headline
            }
          },
        });
      };

      typeNextChar();
    };

    typewriterEffect();
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 via-purple-800 to-black dark:from-gray-800 dark:via-gray-900 dark:to-black">
      {/* News Bar */}
      <div
        ref={newsBarRef}
        className="news-bar w-full h-16 overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg relative flex items-center justify-between"
      >
        {/* Breaking News Text with Red Background */}
        <div className="breaking-news-text flex items-center bg-red-600 text-white font-bold text-2xl px-4 py-2 rounded-l-xl">
          Breaking News
          <div className="triangle ml-2"></div>
        </div>

        {/* Animated News Text */}
        <div className="news-item flex items-center gap-4 text-xl text-white">
          <span className="news-text" ref={newsTextRef}></span>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
