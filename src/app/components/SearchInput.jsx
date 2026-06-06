import { SearchField } from "@heroui/react";

const SearchInput = ({ search }) => {

  return (
    <div>
      <form className="flex gap-4">
        <input type="text" name="search" defaultValue={search} placeholder="Search Pet Name" className="border px-4 w-full py-2 rounded-md" />
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md">Search</button>
      </form>
    </div>
  );
}

export default SearchInput;