import { useQuery } from "@tanstack/react-query";
import { fetchProducts, ProductFilters } from "./api/ProductsFilters";
import ProductList from "./components/product/ProductList";
import FilterProductList from "./components/product/FilterProductList";
import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState<ProductFilters["search"]>();
  const [category, setCategory] = useState<ProductFilters["category"]>();
  const [maxPrice, setMaxPrice] = useState<ProductFilters["maxPrice"]>();
  const { data, isFetching } = useQuery({
    queryKey: ["products", { search , category, maxPrice }],
    queryFn: () => fetchProducts({ search, category, maxPrice }),
  });
  return (
    <div className="flex flex-col gap-2">
        <div>
          <h1 className="text-4xl font-bold">Products</h1>
        </div>
        <FilterProductList
         onChange={(filters) => {
            setSearch(filters.search)
            setCategory(filters.category)
            setMaxPrice(filters.maxPrice)
          }}

         
         
         />
        <div>
          {data && <ProductList products={data} />}
          {isFetching && <p>Loading...</p>}
        </div>
    </div>
  );
}
