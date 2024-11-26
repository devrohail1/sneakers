import React from "react";
import ProductCard from "./ProductCard";

function Trending() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-1 col-span-12 md:col-start-2 md:col-span-9">
        <div className=" mt-5">
          <div>
            <h2 className="font-semibold text-lg">Trending Products</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 ">
            <ProductCard
              img="/images/nikeprod.png"
              heading="Nike Joggers"
              priceBefore="$150"
              price="$110"
              stars={4}
              id="1"
            />
            <ProductCard
              img="/images/nikeprod1.png"
              heading="Nike Jordans"
              price="$1100.00"
              priceBefore="$1500.00"
              stars={5}
            />
            <ProductCard
              img="/images/nikeprod2.png"
              heading="Nike Airmax"
              price="$180.00"
              priceBefore="$220.00"
              stars={3}
            />
            <ProductCard
              img="/images/nikeprod3.png"
              heading="Nike Air"
              price="$190.00 "
              priceBefore="$200.00"
              stars={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
