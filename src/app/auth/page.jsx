'use client'
import { TextField } from "@mui/material";
import { PrimaryButton } from "../components/PrimaryButton";
import { useState, useEffect } from "react";
import { textfieldAuth as field } from "../utils/textfield";
import { LOGO } from "@/app/utils/const";
import Image from "next/image";
import { API_URL } from "../../../config";
import { useRouter } from "next/navigation";
import { useUser } from "../context/user";

export default function Home() {
    const routerA = useRouter();
    const { user, setUser } = useUser();
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(false)

    // Manejo de los cambios en el formulario
    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value, // Aquí se usa el nombre del campo para actualizar su valor
        }));
    };

    useEffect(() => {
        // Redirigir si el usuario ya está autenticado
        if (user !== null) {
            routerA.push('/home');
        }
    }, [user, routerA]); // Añadido `routerA` y `user` como dependencias

    const handleOnSubmit = (e) => {
        e.preventDefault();
        fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: formData.correo,
                password: formData.contraseña,
            })
        
        })
        .then(res => {
            if (!res.ok) {
                console.log('Error en el login');
                setError(true)
                return;
            }
            return res.json();
        })
        .then(res => {
            console.log({ user: res.data });
            setUser({
                user: { name: res.data.nombre + " " + res.data.apellido, email: res.data.correo }
            });
            routerA.push('/home');
        })
        .catch(e => {
            console.log(e);
        });
    }

    return (
        <main style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', backgroundColor: '#4F6696'
        }}>
            <form onSubmit={handleOnSubmit} style={{
                maxWidth: '420px', margin: 'auto', height: '100%', padding: '20px 50px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column',
                maxHeight: '500px', borderRadius: '16px', backgroundColor: '#f5f5f5'
            }}>
                <div className="header" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Image src={LOGO} alt="logo" width={64} height={64} />
                    <h1>Iniciar sesión</h1>
                </div>
                <div className="input"> 
                    <TextField
                        key={field[0].name}
                        label={field[0].label}
                        name={field[0].name}
                        value={formData[field[0].name] || ''} // Corregir la clave para acceder a los valores del formulario
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        key={field[1].name}
                        label={field[1].label}
                        name={field[1].name}
                        value={formData[field[1].name] || ''} // Corregir la clave para acceder a los valores del formulario
                        onChange={handleChange}
                        fullWidth
                        type='password'
                        margin="normal"
                    />
                </div>
                {
                    error ? (<p style={{color: 'red'}}>Credenciales inválidas</p>) :
                    <></>
                }
                <PrimaryButton text={'Ingresar'} />
            </form>
        </main>
    );
}
