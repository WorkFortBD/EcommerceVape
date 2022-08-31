import Slider from "../slider/Slider";
import HomeProductFilter from './HomeProductFilter';

export default function HomeComponent() {
  return (
    <>
      <Slider />

      {/* products */}

      <section className="store-section">
        <div className="container mx-auto mt-10">
          <div className="flex justify-center flex-wrap">
            <div className=" mt-3 ml-4">
              <img src="/images/Ds.jpg" alt="Dukhan Package" />
            </div>
            <div className=" mt-3  ml-4">
              <img src="/images/Batteries.jpg" alt="Battery" />
            </div>
            <div className=" ml-4">
              <p>
                <img
                  src="/images/Disposable.jpg"
                  alt="Disposable Pods"
                  className="mt-2"
                />
              </p>
              <p className="mt-5">
                <img src="/images/Cotton.jpg" alt="Cotton" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <HomeProductFilter />
    </>
  );
}
