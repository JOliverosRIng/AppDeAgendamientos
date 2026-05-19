import { Search } from "lucide-react";

function SearchBar({
  search,
  setSearch,
}) {

  return (

    <div className="
      bg-white
      dark:bg-slate-800
      rounded-3xl
      p-5
      border
      border-gray-100
      dark:border-slate-700
      flex
      items-center
      gap-4
      mb-8
    ">

      <Search
        size={20}
        className="text-gray-400"
      />

      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="
          w-full
          bg-transparent
          outline-none
          dark:text-white
        "
      />

    </div>

  );
}

export default SearchBar;