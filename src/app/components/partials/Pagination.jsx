import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  function handlePreviousPage() {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }
  function handleNextPage() {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  }
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="w-full flex items-center justify-center gap-2 py-4 mt-10">
      <button
        className="w-6 h-6 rounded-sm border border-zinc-500 flex items-center justify-center"
        onClick={handlePreviousPage}
      >
        <ChevronLeft size={20} color="white" />
      </button>
      {pageNumbers.map((pageNumber, index) => (
        <button
          key={index}
          className={
            pageNumber === currentPage
              ? "font-bold bg-zinc-100 text-black w-6 h-6 rounded-sm"
              : " text-zinc-50 w-6 h-6 rounded-sm border border-slate-500"
          }
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className="w-6 h-6 rounded-sm border border-zinc-500 flex items-center justify-center"
        onClick={handleNextPage}
      >
        <ChevronRight size={20} color="white" />
      </button>
    </div>
  );
}

export default Pagination;
