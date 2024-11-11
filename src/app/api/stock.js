import { ENDPOINT_STOCK } from "../utils/const";

export const getStockMin = async () => {
    const response = await fetch(`${ENDPOINT_STOCK}/min`);
    
    if (!response.ok) throw new Error('Error get rows');
    const data = await response.json();
    console.log(data.data[0])
    return data.data[0].productos_minimos;
  };

  export const getStockNot = async () => {
    const response = await fetch(`${ENDPOINT_STOCK}/not`);
    
    if (!response.ok) throw new Error('Error get rows');
    const data = await response.json();
    return data.data [0].productos_agotados;
  };

  export const getStockMax = async () => {
    const response = await fetch(`${ENDPOINT_STOCK}/max`);
    
    if (!response.ok) throw new Error('Error get rows');
    const data = await response.json();
    return data.data[0].productos_excedidos;
  };


