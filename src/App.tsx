import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "./api/ProductsFilters";
import ProductList from "./components/product/ProductList";
import FilterProductList from "./components/product/FilterProductList";

export default function App() {
  const { data, isFetching } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
  });
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h1 className="text-4xl font-bold">Products</h1>
      </div>
      <FilterProductList />
      <div>
        {data && <ProductList products={data} />}
        {isFetching && <p>Loading...</p>}
      </div>
    </div>
  );
}
