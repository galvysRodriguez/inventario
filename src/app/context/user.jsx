import { useState, useContext, createContext, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Verifica si hay un usuario en localStorage al montar el componente
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));  // Si hay un usuario, lo convierte de string a objeto
    }
  }, []);

  // Guardar usuario en localStorage
  const saveUserToLocalStorage = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  // Eliminar usuario de localStorage
  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser: saveUserToLocalStorage,  // Usamos el método para guardar en localStorage
        removeUser: removeUserFromLocalStorage, // Método para eliminar el usuario
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
