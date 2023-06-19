import React, { useState } from 'react'
import { styles } from '../styles'
import { BookCanvas } from './canvas'
import SearchResults from './SearchResults'

const Background = () => 
{
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = () => 
  {
    const results = performSearch(searchQuery);
    setSearchResults(results);
  }

  const performSearch = (query) =>
  {
    return [{title: "Harry Potter", author: "J.K. Rowling", genre: "Magic", summary: "Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie"},
    {title: "Harry Potter", author: "J.K. Rowling", genre: "Magic", summary: "Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie"},
    {title: "Harry Potter", author: "J.K. Rowling", genre: "Magic", summary: "Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie"},
    {title: "Harry Potter", author: "J.K. Rowling", genre: "Magic", summary: "Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie"},
    {title: "Harry Potter", author: "J.K. Rowling", genre: "Magic", summary: "Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie Go watch the movie"}]
  }

  const clearSearch = () =>
  {
    setSearchResults([])
    setSearchQuery('')
  }

  return (
    <section className="relative w-full h-screen mx-auto" style={{ overflow: 'hidden'}}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col items-center gap-5`} style={{ overflow: 'auto', maxHeight: 'calc(100% - 120px)'}}>
        <BookCanvas />
        <h2 className="text-2xl font-bold text-center" style={{marginTop: "-200px"}}>Novel Searcher &nbsp;|&nbsp; A Search Engine for Novels</h2>
        <input
          type="text"
          placeholder="Describe the plot or synopsis of your novel..."
          className="px-4 py-2 border border-gray-300 rounded-md"
          style={{width: "550px"}}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="bg-gray-900 px-4 py-2 rounded-md ml-2"
          onClick={handleSearch}
        >
          Search
        </button>
        {searchResults.length > 0 && <SearchResults results={searchResults} />}
      </div>
    </section>
  )
}

export default Background