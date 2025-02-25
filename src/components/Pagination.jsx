import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange, theme }) => {
  const getPageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    if (currentPage <= 4) {
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(totalPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push(1);
      pages.push('...');
      for (let i = totalPages - 4; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push('...');
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  const buttonBaseClasses = `
    w-10 h-10 flex items-center justify-center rounded-full
    transition-all duration-200 ease-in-out
    ${theme === 'light' 
      ? 'hover:bg-blue-100 text-gray-700' 
      : 'hover:bg-gray-700 text-gray-300'}
  `;

  const activeButtonClasses = `
    ${theme === 'light'
      ? 'bg-blue-500 text-white hover:bg-blue-600'
      : 'bg-yellow-500 text-black hover:bg-yellow-600'}
  `;

  return (
    <nav className="flex items-center justify-center space-x-2" aria-label="Pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${buttonBaseClasses} ${
          currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        <span className="sr-only">Previous</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' ? onPageChange(page) : null}
          className={`
            ${buttonBaseClasses}
            ${typeof page === 'number' && page === currentPage ? activeButtonClasses : ''}
            ${page === '...' ? 'cursor-default' : 'cursor-pointer'}
          `}
          disabled={page === '...'}
        >
          <span className="w-full h-full flex items-center justify-center">{page}</span>
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${buttonBaseClasses} ${
          currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        <span className="sr-only">Next</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>
  );
};

export default Pagination;
