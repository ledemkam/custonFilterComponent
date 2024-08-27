import { useQuery } from "@tanstack/react-query";
import { fetchProducts} from "./api/ProductsFilters";
import ProductList from "./components/product/ProductList";
import FilterProductList from "./components/product/FilterProductList";
import { useProductFilters } from "./hooks/useProductFilters";

export default function App() {
  const {search, category, maxPrice} = useProductFilters();

  const { data, isFetching } = useQuery({
    queryKey: ["products", { search , category, maxPrice }],
    queryFn: () => fetchProducts({ search, category, maxPrice }),
  });
  return (
    <div className="flex flex-col gap-2">
        <div>
          <h1 className="text-4xl font-bold">Products</h1>
        </div>
        <FilterProductList/>
        <div>
          {data && <ProductList products={data} />}
          {isFetching && <p>Loading...</p>}
        </div>
    </div>
  );
}
