import React from "react";

interface PageIndicatorProps {
  currentPage: number;
  lastPage: number;
}

const PageIndicator: React.FC<PageIndicatorProps> = ({ currentPage, lastPage }) => {
  const generatePages = (current: number, last: number): (number | string)[] => {
    const pages: (number | string)[] = [];

    if (last <= 7) {
      // Show all pages if total pages are less than or equal to 7
      for (let i = 1; i <= last; i++) {
        pages.push(i);
      }
    } else {
      // Always show the first page
      pages.push(1);

      if (current > 4) pages.push("..."); // Add leading ellipsis if current is far from the start

      // Show current page and its neighbors (max 3 middle pages)
      for (let i = Math.max(2, current - 1); i <= Math.min(last - 1, current + 1); i++) {
        pages.push(i);
      }

      if (current < last - 3) pages.push("..."); // Add trailing ellipsis if current is far from the end

      // Always show the last page
      pages.push(last);
    }

    return pages;
  };

  const pages = generatePages(currentPage, lastPage);

  return (
    <div className="flex gap-4">
      {pages.map((page, index) => (
        <div
          key={index}
          className={`py-[18px] rounded border border-[#d0d5dd] flex justify-center items-center ${
            page === currentPage ? "bg-gray-200 font-bold" : ""
          }`}
        >
          <div className="text-black text-xl font-medium font-['Montserrat']">
            {page}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PageIndicator;
