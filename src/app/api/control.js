import { ENDPOINT_CONTROL, ENDPOINT_MOVE_INPUT, ENDPOINT_MOVE_OUTPUT } from "../utils/const";

export const getRowsControl = async () => {
    const response = await fetch(ENDPOINT_CONTROL);
    
    if (!response.ok) throw new Error('Error get rows');
    const data = await response.json();
    return data.data;
  };

  export const getRowsMoveInput = async () => {
    const response = await fetch(ENDPOINT_MOVE_INPUT);
    
    if (!response.ok) throw new Error('Error get rows');
    const data = await response.json();
    return data.data;
  };

  export const getRowsMoveOutput = async () => {
    const response = await fetch(ENDPOINT_MOVE_OUTPUT);
    
    if (!response.ok) throw new Error('Error get rows');
    const data = await response.json();
    return data.data;
  };