import { Hero, Filter, CarCard } from "@/components";
import SearchBar from "@/components/SearchBar";
import { fetchCars } from "@/utils";

interface SearchParams {
  manufacturer?: string;
  year?: string;
  fuel?: string;
  limit?: string;
  model?: string;
}

export default async function Home({ searchParams } : { searchParams: Promise<SearchParams>; }) {
  const params = await searchParams;
  const allCars = await fetchCars({
    manufacturer: params.manufacturer || '',
    year: parseInt(params.year || '2022', 10),
    fuel: params.fuel || '',
    limit: parseInt(params.limit || '10', 10),
    model: params.model || '', 
  });
  console.log(allCars);
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x lg:px-12 padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className='w-full flex flex-wrap mt-8 items-center xl:justify-between gap-8'>
          <SearchBar/>
          <div className="home__filter-container">
            <Filter title="fuel"/>
            <Filter title="year"/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car, index) => (
                <CarCard key={index} car={car}/>
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}

      </div>
    </main>
  );
}
