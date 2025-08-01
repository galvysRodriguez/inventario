
export const getRowsVisble = async (endpoint) => {
    const response = await fetch(`${endpoint}/visible`);
    
    if (!response.ok) throw new Error('Error get rows');
    const data = await response.json();
    return data.data;
  };