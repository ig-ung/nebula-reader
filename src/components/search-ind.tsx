import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import clsx from "clsx";


export const SearchInd = () => {

    const [enabled, setEnabled] = useState<boolean>(false)
    const [searchText, setSearchText] = useState<string>("")

    return (
        <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-64 rounded-3xl border-2 ring-gray-300 px-7 p-3 text-sm outline-none focus:ring-2 focus:ring-red-700 transition"
            placeholder="Search..."
          />
          <button 
          disabled={!searchText}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2">
            <FaSearch
              className={clsx(
                "transition-colors",
                searchText ? "text-red-700" : "text-slate-400"
              )}
            />
          </button>
        </div>
      </div>
    )
}