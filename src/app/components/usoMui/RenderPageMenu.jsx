import IndexPage from "@/app/views/IndexPage";
import ProductPage from "@/app/views/ProductPage";
import CategoryPage from "@/app/views/CategoryPage";
import LocationPage from "@/app/views/LocationPage";
import WarehousePage from "@/app/views/WarehousePage";

export const renderPageContent = {
    '/home': <IndexPage />,
    '/articles/products': <ProductPage />,
    '/articles/categories':<CategoryPage />,
    '/ubications/locations': <LocationPage/>,
    '/ubications/warehouses':<WarehousePage />,
  };

