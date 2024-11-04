import { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, MenuItem } from '@mui/material';

export const Form = ({ 
    open, 
    onClose, 
    title, 
    fields = [], // Valor predeterminado para evitar el error
    options = [], // Nuevas opciones para campos select
    initialData = {}, 
    onSubmit 
}) => {
    const [formData, setFormData] = useState({});

        useEffect(() => {
            const initialFormData = fields.reduce((acc, field) => {
                acc[field.name] = initialData[field.name] || '';
                return acc;
            }, { id: initialData.id || '' }); // Agrega `id` como parte del formData
            setFormData(initialFormData);
        }, [open]);
        console.log("2", options)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("dato", initialData.id, formData)
        initialData ? onSubmit(formData, initialData.id): onSubmit(formData);
        
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
                {fields.map((field) => (
                    field.type === 'select' ? (
                        <TextField
                            key={field.name}
                            label={field.label}
                            name={field.name}
                            select
                            value={formData[field.name] || ''}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        >
                            {Array.isArray(options) && options.map((option) => (
                                <MenuItem key={option.nombre} value={option.nombre}>
                                    {option.nombre}
                                </MenuItem>
                            ))}
                        </TextField>
                    ) : (
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
                ))}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">
                    Cancelar
                </Button>
                <Button type="submit" color="primary">
                    {initialData.id ? 'Actualizar' : 'Crear'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};
