
import FilterCategory from "../components/FilterCategory";
import NoPets from "../components/NoPets";
import PetsCard from "../components/PetsCard";
import SearchInput from "../components/SearchInput";
import Sorting from "../components/Sorting";



const AllPetsPage = async ({ searchParams }) => {

    const params = await searchParams;

    const search = params?.search || "";
    const species = params?.species || "";
    const sort = params?.sort || "";

    const res = await fetch(`${process.env.NEXT_PUBLIC_SURVER_URL}/pets?search=${search}&species=${species}&sort=${sort}`);
    const pets = await res.json();




    return (
        <div className="max-w-7xl mx-auto">
            <div className="space-y-2 my-10">
                <h2 className="text-3xl font-semibold">All Pets</h2>
                <p>Find your perfect compenion</p>
            </div>

            <div className="grid grid-cols-3 gap-20 items-center justify-between px-5 mb-10 border rounded-2xl bg-green-100 py-3">
                <div className="col-span-2">
                    <SearchInput search={search} />
                </div>
                <div className="col-span-1">
                    <FilterCategory species={species}></FilterCategory>
                </div>
            </div>
            <div>
                {
                    pets.length === 0 ? (
                        <NoPets></NoPets>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
                            {
                                pets.map(pet => <PetsCard key={pet._id} pet={pet}></PetsCard>)
                            }
                        </div>
                    )
                }


            </div>
        </div>
    );
};
export default AllPetsPage;