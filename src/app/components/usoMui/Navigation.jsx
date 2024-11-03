import { Category } from "@mui/icons-material";
import { ShowChart } from "@mui/icons-material";
import { Article } from "@mui/icons-material";
import { Home } from "@mui/icons-material";
import { Inventory } from "@mui/icons-material";
import { Assessment } from "@mui/icons-material";
import { History } from "@mui/icons-material";
import { GpsFixed } from "@mui/icons-material";
import { Place } from "@mui/icons-material";
import { LocationCity } from "@mui/icons-material";
import { Inbox } from "@mui/icons-material";
import { FireTruck } from "@mui/icons-material";
import { EditNote } from "@mui/icons-material";
import { DeleteForever } from "@mui/icons-material";
import { PointOfSale } from "@mui/icons-material";
import { Output } from "@mui/icons-material";
import { Input as InputIcon } from "@mui/icons-material";


export const NAVIGATION = [
    {
      segment: 'home',
      title: 'Inicio',
      icon: <Home />,
    },
    {
      segment: 'articles',
      title: 'Articulos',
      icon: <Inventory />,
      children: [
        {
          segment: 'products',
          title: 'Productos',
          icon: <Article />,
        },
        {
          segment: 'categories',
          title: 'Categorias',
          icon: <Category/>,
        },
      ],
    },
    {
      segment: 'moves',
      title: 'Movimientos',
      icon: <FireTruck/>,
      children: [
        {
          kind: 'header',
          title: 'Traslados',
        },
        {
          segment: 'input',
          title: 'Recibidos',
          icon: <InputIcon/>,
        },
        {
          segment: 'output',
          title: 'Entregas',
          icon: <Output />,
        },
        {
          segment: 'sale',
          title: 'Ventas',
          icon: <PointOfSale />,
        },
        {
          kind: 'divider',
        },
        {
          kind: 'header',
          title: 'Ajustes',
        },
        {
          segment: 'adjustment',
          title: 'Ajuste de inventario',
          icon: <EditNote />,
        },
        {
          segment: 'loss',
          title: 'Perdidas',
          icon: <DeleteForever />,
        },
      ],
    },
    {
      segment: 'locations',
      title: 'Ubicaciones',
      icon: <Place/>,
      children: [
        {
          segment: 'store',
          title: 'Depositos',
          icon: <Inbox />,
        },
        {
          segment: 'headquartes',
          title: 'Sedes',
          icon: <LocationCity />,
        },
      ],
    },
    {
      segment: 'reports',
      title: 'Reportes',
      icon: <Assessment />,
      children: [
        {
          segment: 'sales',
          title: 'Historial de movimientos',
          icon: <History />,
        },
        {
          segment: 'traza',
          title: 'Traza de inventario',
          icon: <GpsFixed />,
        },
        {
          segment: 'traffic',
          title: 'Analisis de inventario',
          icon: <ShowChart/>,
        },
      ],
    },
  ];