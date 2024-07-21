import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import { fetchCars } from "@/utils/index";
import CarCard from "@/components/CarCard";


export default async function page() {
  const allCars = await fetchCars()

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  console.log(allCars)
  return (
    <main className="overflow-hidden" >
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-comtainer">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomFilter  title="fuel"/>
            <CustomFilter  title="year"/>
          </div>
        </div>

        { !isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => <CarCard car={car}/>)}
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
    )
}
