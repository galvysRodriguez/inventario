import IndexPage from "@/app/views/IndexPage";
import ProductPage from "@/app/views/ProductPage";
import CategoryPage from "@/app/views/CategoryPage";
import LocationPage from "@/app/views/LocationPage";
import WarehousePage from "@/app/views/WarehousePage";
import InputPage from "@/app/views/InputPage";
import OutputPage from "@/app/views/OutputPage";
import LossPage from "@/app/views/LossPage";
import SalePage from "@/app/views/SalePage";
import ControlPage from "@/app/reports/ControlPage";
import MoveInputPage from "@/app/reports/MoveInputPage";
import MoveOutputPage from "@/app/reports/MoveOutputPage";

export const renderPageContent = {
    '/': <IndexPage />,
    '/articles/products': <ProductPage />,
    '/articles/categories':<CategoryPage />,
    '/ubications/locations': <LocationPage/>,
    '/ubications/warehouses':<WarehousePage />,
    '/moves/input': <InputPage/>,
    '/moves/output':<OutputPage />,
    '/moves/loss': <LossPage/>,
    '/moves/sale':<SalePage />,
    '/reports/control':<ControlPage />,
    '/reports/input':<MoveInputPage/>,
    '/reports/output':<MoveOutputPage />,
  };

