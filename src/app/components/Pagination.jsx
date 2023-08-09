import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      console.log(currentPage)
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      console.log(currentPage)
    }
  };

  return (
    <div className="w-full flex items-center justify-center gap-2 py-4 mt-10">
      <button className="w-6 h-6 rounded-sm border border-zinc-500 flex items-center justify-center"   onClick={handlePreviousPage}>
        <ChevronLeft size={20} color="white" />
      </button>
      <span>{currentPage}</span>
      <button className="w-6 h-6 rounded-sm border border-zinc-500 flex items-center justify-center"  onClick={handleNextPage}>
        <ChevronRight size={20} color="white" />
      </button>
    </div>
  );
}

export default Pagination;
