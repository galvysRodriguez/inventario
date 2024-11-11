import { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, MenuItem, Autocomplete } from '@mui/material';
import { PrimaryButton } from '../PrimaryButton';
import { useProductTable } from '@/app/hooks/useProductTable';
import ProductTable from './ProductTable';
import { getRowsVisble } from '@/app/api/optionApi';
import { ENDPOINT_PRODUCT } from '@/app/utils/const';

export const Form = ({ 
    open, 
    onClose, 
    title, 
    fields = [], 
    optionProduct = [],// Valor predeterminado para evitar el error
    options = [], // Nuevas opciones para campos select
    initialData = {}, 
    
    products = [],
    onSubmit 
}) => {
    const [formData, setFormData] = useState({});
    const [product, setProduct] = useState([]);
    const {
        selectedProducts,
        handleSelectProduct,
        handleEditQuantity,
        handleDeleteProduct,
        quantityEdit,
        setQuantityEdit, handleSetProducts
    } = useProductTable();
    
        useEffect(() => {
            const initialFormData = fields.reduce((acc, field) => {
                acc[field.name] = initialData[field.name] || '';
                return acc;
            }, { id: initialData.id || '' }); // Agrega `id` como parte del formData
            setFormData(initialFormData);
          
            const valor = async () =>{
                const result = await getRowsVisble(ENDPOINT_PRODUCT)
                setProduct(result)
            }
            valor()
            
        }, [open]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const send = {...formData, productos: selectedProducts}
        initialData ? onSubmit(send, initialData.id): onSubmit(send);
        onClose();
    };

    return (
        <Dialog 
            open={open} 
            onClose={onClose} 
            fullWidth 
            maxWidth="sm" 
            PaperProps={{
                component: 'form',
                onSubmit: handleSubmit,
            }}
        >
            
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                {fields.map((field) => {
                    if(field.name == 'productos' && Array.isArray(product)){
                        return (
                            <>
                                <Autocomplete
                                options={product}
                                key={product.nombre}
                                getOptionLabel={(product) => product.nombre}
                                onChange={(event, newValue) => handleSelectProduct(newValue)}
                                renderInput={(params) => <TextField {...params} label="Seleccionar Producto" />}
                                />
                                
                                <ProductTable
                                products={selectedProducts}
                                quantityEdit={quantityEdit}
                                setQuantityEdit={setQuantityEdit}
                                handleEditQuantity={handleEditQuantity}
                                handleDeleteProduct={handleDeleteProduct}/>
                            </>
                            
                        
                        )
                    }
                    else if (field.type === 'select' && Array.isArray(options)) {
                        return (
                            <Autocomplete
                            key={field.name}
                            options={Array.isArray(options) ? options : []}
                            getOptionLabel={(option) => option.nombre || ''}
                            value={options.find(option => option.nombre === formData[field.name]) || null}
                            onChange={(event, newValue) => handleChange({
                                target: { name: field.name, value: newValue ? newValue.nombre : '' }
                            })}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label={field.label}
                                    fullWidth
                                    margin="normal"
                                />
                            )}
                            />

                        )
                    }
                    else{
                        return (
                            <TextField
                            key={field.name}
                            label={field.label}
                            name={field.name}
                            value={formData[field.name] || ''}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        )
                    }
                        
                    
                }
                   )}

            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancelar
                </Button>
                <PrimaryButton text={initialData.id ? 'Actualizar' : 'Crear'}>
                    
                </PrimaryButton>
            </DialogActions>
        </Dialog>
    );
};
