"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
    const [loggedUser, setLoggedUser] = useState({
        email: "",
        password: "",
    });

    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoggedUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const userExists = users.find(
            (user: { email: string; password: string }) =>
                user.email === loggedUser.email && user.password === loggedUser.password
        );

        if (userExists) {
            alert("Login bem-sucedido!");
            router.push("/homepage/user");
        } else {
            alert("Credenciais inválidas.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <h1 className="text-center text-6xl font-bold mb-6">Login</h1>
            <center>
                <input
                    type="email"
                    name="email"
                    value={loggedUser.email}
                    onChange={handleInputChange}
                    className="caixaTexto px-0 py-2 border"
                    placeholder="Email"
                />
            </center>
            <p></p>
            <center>
                <input
                    type="password"
                    name="password"
                    value={loggedUser.password}
                    onChange={handleInputChange}
                    className="caixaTexto px-0 py-2 border"
                    placeholder="Senha"
                />
            </center>
            <p></p>
            <center>
                <input
                    type="button"
                    className="botLogin"
                    value="Entrar"
                    onClick={handleLogin}
                />
            </center>
        </div>
    );
}
