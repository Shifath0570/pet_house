
const Sorting = ({ sort }) => {
    return (
        <div>
            {/* <select name="sort" defaultValue={sort}  className="border px-4 py-2 rounded-md">
                <option value="">Default</option>
                <option value="asc">Price Low → High</option>
                <option value="desc">Price High → Low</option>
            </select> */}
            <form className="flex gap-4">
                <select name="sort" defaultValue={sort} className="border px-4 py-2 rounded-md">
                    <option value="">Default</option>
                    <option value="asc">Price Low → High</option>
                    <option value="desc">Price High → Low</option>
                </select>
                <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md">Search</button>
            </form>
        </div>
    );
};

export default Sorting;














