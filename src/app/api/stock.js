import { ENDPOINT_STOCK } from "../utils/const";
const yourJwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTczMjQ5MDM2OH0.7zo3fJR1FEybeAI6ny27JKbnba5L65OIG8BRfCJgFvk"

export const getStockMin = async () => {
    const response = await fetch(`${ENDPOINT_STOCK}/min`, {
      headers: {
        "Authorization": `Bearer ${yourJwtToken}`
      },
    })
    
    if (!response.ok) throw new Error('Error get rows');
    const data = await response.json();
    console.log(data.data[0])
    return data.data[0].productos_minimos;
  };

  export const getStockNot = async () => {
    const response = await fetch(`${ENDPOINT_STOCK}/not`, {credentials: 'include'});
    
    if (!response.ok) throw new Error('Error get rows');
    const data = await response.json();
    return data.data [0].productos_agotados;
  };

  export const getStockMax = async () => {
    const response = await fetch(`${ENDPOINT_STOCK}/max`, {credentials: 'include'});
    
    if (!response.ok) throw new Error('Error get rows');
    const data = await response.json();
    return data.data[0].productos_excedidos;
  };


