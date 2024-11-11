// ProductSelection.js
import React, { useState } from 'react';
import { Autocomplete, TextField, Button } from '@mui/material';
import ProductTable from './ProductTable';

const productOptions = [
  { id: 1, name: 'Producto A' },
  { id: 2, name: 'Producto B' },
  { id: 3, name: 'Producto C' },
];

const ProductSelection = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [quantityEdit, setQuantityEdit] = useState(null);

  const handleSelectProduct = (event, newValue) => {
    if (newValue && !selectedProducts.find((p) => p.id === newValue.id)) {
      setSelectedProducts((prev) => [...prev, { ...newValue, quantity: 1 }]);
    }
  };

  const handleEditQuantity = (productId, newQuantity) => {
    setSelectedProducts((prev) =>
      prev.map((product) =>
        product.id === productId ? { ...product, quantity: parseInt(newQuantity, 10) } : product
      )
    );
  };

  const handleDeleteProduct = (productId) => {
    setSelectedProducts((prev) => prev.filter((product) => product.id !== productId));
  };

  const handleSaveProducts = async () => {
    try {
      const response = await fetch('/api/save-products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(selectedProducts),
      });
      if (response.ok) {
        alert('Productos guardados exitosamente');
      } else {
        alert('Error al guardar los productos');
      }
    } catch (error) {
      console.error('Error en el guardado:', error);
    }
  };

  return (
    <div>
      <Autocomplete
        options={productOptions}
        getOptionLabel={(option) => option.name}
        onChange={handleSelectProduct}
        renderInput={(params) => <TextField {...params} label="Buscar producto" />}
      />
      <ProductTable
        products={selectedProducts}
        quantityEdit={quantityEdit}
        setQuantityEdit={setQuantityEdit}
        handleEditQuantity={handleEditQuantity}
        handleDeleteProduct={handleDeleteProduct}
      />
      <Button variant="contained" color="primary" onClick={handleSaveProducts}>
        Guardar productos
      </Button>
    </div>
  );
};

export default ProductSelection;
