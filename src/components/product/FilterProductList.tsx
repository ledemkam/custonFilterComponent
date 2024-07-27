import { useEffect, useState } from "react";
import { ProductFilters } from "../../api/ProductsFilters";
import { useDebounce } from "../../hooks/useDebounce";

type FilterProductListProps = {
  onChange: (filters: ProductFilters) => void;
}

export default function FilterProductList({
   onChange
   }: FilterProductListProps) {
  const [search, setSearch] = useState<ProductFilters['search']>();
  const [category, setCategory] = useState<ProductFilters['category']>();
  const [maxPrice, setMaxPrice] = useState<ProductFilters['maxPrice']>();
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    onChange({ search: debouncedSearch, category, maxPrice });
  }, [debouncedSearch, category, maxPrice]);


  return (
    <>
      <input
       type="text"
       value={search}
       onChange={(e)=> setSearch(e.target.value)}
        placeholder="Search products..."
             />
      <select
         value={category}
          onChange={(e) => setCategory(e.target.value as ProductFilters['category'])}       
         >
        <option value="first">First</option>
        <option value="second">Second</option>
        <option value="third">Third</option>
      </select>
      <select
        value={maxPrice}
        onChange={(e) =>
          setMaxPrice(e.target.value ? parseInt(e.target.value) : undefined)
        }
      >
        <option value="100">100</option>
        <option value="500">500</option>
        <option value="1000">1000</option>
      </select>  
    </>
  )
}