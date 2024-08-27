import { useEffect, useState } from "react";
import { ProductFilters } from "../../api/ProductsFilters";
//import { useDebounce } from "../../hooks/useDebounce";
import { useProductFilters } from "../../hooks/useProductFilters";
import { useDebounce } from "../../hooks/useDebounce";



export default function FilterProductList() {
    const {search, category, maxPrice,setFilters} = useProductFilters();

    const[localSearch,setLocalSearch] = useState<ProductFilters["search"]>(search)

  const debouncesSearch = useDebounce(localSearch);


  useEffect(() => {
    setFilters({ search: debouncesSearch });
  },[debouncesSearch])


  return (
    <>
      <input
       type="text"
       defaultValue={localSearch}
       onChange={(e)=> setLocalSearch(e.target.value)}
        placeholder="Search products..."
             />
      <select
         defaultValue={category}
         onChange={(e)=> setFilters({category:e.target.value as ProductFilters["category"]})}      
         >
        <option value="first">First</option>
        <option value="second">Second</option>
        <option value="third">Third</option>
      </select>
      <select
        defaultValue={maxPrice}
        onChange={(e) =>
          setFilters({maxPrice:e.target.value ? parseInt(e.target.value) : undefined})
        }
      >
        <option value="100">100</option>
        <option value="500">500</option>
        <option value="1000">1000</option>
      </select>  
    </>
  )
}