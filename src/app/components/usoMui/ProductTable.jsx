// ProductTable.js
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { ProductionQuantityLimits } from "@mui/icons-material";

const ProductTable = ({
  products,
  quantityEdit,
  setQuantityEdit,
  handleEditQuantity,
  handleDeleteProduct,
}) => (
  <Table>
    <TableHead>
      

      <TableRow>
        <TableCell>Producto</TableCell>
        <TableCell>Cantidad</TableCell>
        <TableCell>Costo</TableCell>
        <TableCell>Precio</TableCell>
        <TableCell>Acciones</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {products.map((product) => (
        <TableRow key={product.id_productos}>
          <TableCell>{product.nombre}</TableCell>

          <TableCell>
            <TextField
              type="number"
              value={quantityEdit}
              onChange={(e) => handleEditQuantity(product.id, e.target.value)}
              onBlur={() => setQuantityEdit(null)}
            />
          </TableCell>
          <TableCell>{product.costo}</TableCell>
          <TableCell>{product.precio}</TableCell>
          <TableCell>
            <IconButton
              onClick={() => handleDeleteProduct(product.id_productos)}
            >
              <DeleteIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default ProductTable;
