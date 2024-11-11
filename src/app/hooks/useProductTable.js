import { useState} from "react";

export function useProductTable(){
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [quantityEdit, setQuantityEdit] = useState(null);
  
    const handleSelectProduct = (newValue) => {
        if (newValue && !selectedProducts.some((product) => product.id_productos === newValue.id_productos)) {
            setSelectedProducts((prev) => [...prev, { ...newValue, quantity: 1 }]);
        }
    };
    
    const handleDeleteProduct = (productId) => {
        
        setSelectedProducts((prev) => prev.filter((product) => product.id_productos !== productId));
    };

    const handleSetProducts = (newValue) => {
        setSelectedProducts(newValue)
      };
  
    const handleEditQuantity = (productId, newQuantity) => {
      setSelectedProducts((prev) =>
        prev.map((product) =>
          product.id === productId ? { ...product, quantity: parseInt(newQuantity, 10) } : product
        )
      );
    };
  

    return {
        selectedProducts, 
        handleSelectProduct,
        handleEditQuantity,
        handleDeleteProduct, 
        quantityEdit, 
        setQuantityEdit,
        handleSetProducts
    }

}