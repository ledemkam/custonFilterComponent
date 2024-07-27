import { useState } from "react";
import { ProductFilters } from "../../api/ProductsFilters";

type FilterProductListProps = {
  onFilter: (filters: ProductFilters) => void;
}

export default function FilterProductList({ onFilter }: FilterProductListProps) {
  const [search, setSearch] = useState<ProductFilters['search']>();


  return (
    <>
      <input
       type="text"
       value={search}
       onChange={(e)=> setSearch(e.target.value)}
        placeholder="Search products..."
             />  
    </>
  )
}