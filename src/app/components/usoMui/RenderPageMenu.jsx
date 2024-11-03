import IndexPage from "@/app/views/IndexPage";
import ProductPage from "@/app/views/ProductPage";
import CategoryPage from "@/app/views/CategoryPage";

export const renderPageContent = {
    '/home': <IndexPage />,
    '/articles/products': <ProductPage />,
    '/articles/categories':<CategoryPage />,
  };