import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { BookCanvas } from './canvas'

const Background = () => 
{
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col items-center gap-5`}>
        <BookCanvas />
        <h2 className="text-2xl font-bold text-center" style={{marginTop: "-200px"}}>Novel Searcher &nbsp;|&nbsp; A Search Engine for Novels</h2>
        <input
          type="text"
          placeholder="Describe the plot or synopsis of your novel..."
          className="px-4 py-2 border border-gray-300 rounded-md"
          style={{width: "550px"}}
        />
        <Link to='/search-results'>
          <button className="bg-gray-900 px-4 py-2 rounded-md ml-2">
            Search
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Background