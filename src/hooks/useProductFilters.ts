//creons une fonction utilisant les filtre de Produits

import { useSearchParams } from "react-router-dom";
import { ProductFilters } from "../api/ProductsFilters";
import { useCallback } from "react";




export function useProductFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search') as ProductFilters['search'];
  const category = searchParams.get('category') as ProductFilters['category'];
  const maxPrice = searchParams.get('maxPrice')
    ? parseInt(searchParams.get('maxPrice') as string)
    : undefined;

  const setFilters = useCallback((filters: ProductFilters) => {
    setSearchParams((params) => {
      if (filters.search !== undefined) {
        params.set('search', filters.search);
      }

      if (filters.category) {
        params.set('category', filters.category);
      }

      if (filters.maxPrice) {
        params.set('maxPrice', filters.maxPrice.toString());
      }

      return params;
    });
  }, []);

  return {
    search,
    category,
    maxPrice,
    setFilters,
  };
}