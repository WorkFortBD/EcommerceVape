import ProductList from "../products/ProductList";
import Slider from "../slider/Slider";

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

      <section className="product-section">
        <div className="container mx-auto">
          <div className="mt-12 text-center p-2 uppercase">
            <a href="" className="ml-3">
              New Arrivals
            </a>
            <a href="" className="ml-3">
              Top Rated
            </a>
            <a href="" className="ml-3">
              On Sale
            </a>
          </div>

          <div className="mt-3">
            {/* Product List */}
            <ProductList />

            <div className="text-center mt-4">
              <button className="uppercase border p-3">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
