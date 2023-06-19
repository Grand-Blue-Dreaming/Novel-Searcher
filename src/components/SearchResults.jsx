import React from "react";

const SearchResults = ({results}) => 
{
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="font-bold">Search Results</h1>
      {results.map((book, index) => (
        <div key={index} className="p-4 border border-gray-300 rounded-md">
          <h3 className="text-lg font-bold">{book.title}</h3>
          <p className="text-sm text-gray-500">Author: {book.author}</p>
          <p className="text-sm text-gray-500">Genre: {book.genre}</p>
          <p className="mt-2">{book.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;