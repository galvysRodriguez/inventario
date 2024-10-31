import HomePage from "@/app/home/page";
import ProductPage from "@/app/articles/product/page";
import CategoryPage from "@/app/articles/category/page";

export const renderPageContent = {
    '/home': <HomePage />,
    '/articles/product': <ProductPage />,
    '/articles/category':<CategoryPage />,
  };