
const FilterCategory = ({ species }) => {

    return (
        <div>
            <form className="flex gap-4">
                <select name="species" defaultValue={species} className="border px-4 py-2 rounded-md">
                    <option value="">All Species</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Bird">Bird</option>
                    <option value="Rabbit">Rabbit</option>
                </select>
                <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md">Filter</button>
            </form>
        </div>
    );
};

export default FilterCategory;