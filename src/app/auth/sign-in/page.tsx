"use client";

import { useState } from "react";

export default function Page() {
    const [user, setUser] = useState({
        name: "",
        password: "",
        email: "",
    });

    const handleRegisterUser = async () => {
        if (!user.email || !user.password) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        try {
            const response = await fetch("/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: user.name || null, // Se o nome não for preenchido, passa como null
                    email: user.email,
                    password: user.password,
                }),
            });

            if (!response.ok) {
                throw new Error("Erro ao cadastrar usuário");
            }

            const data = await response.json();
            alert("Usuário cadastrado com sucesso!");
            console.log(data); // Para fins de depuração
        } catch (error) {
            alert("Erro ao cadastrar usuário.");
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <h1 className="text-center">Cadastrar usuário</h1>
            <center>
                <input
                    className="caixaTexto"
                    placeholder="E-mail"
                    value={user.email}
                    onChange={(e) =>
                        setUser((prevState) => ({ ...prevState, email: e.target.value }))
                    }
                />
            </center>
            <p></p>
            <center>
                <input
                    className="caixaTexto"
                    placeholder="Nome (Opcional)"
                    value={user.name}
                    onChange={(e) =>
                        setUser((prevState) => ({ ...prevState, name: e.target.value }))
                    }
                />
            </center>
            <center>
                <input
                    type="password"
                    className="caixaTexto"
                    placeholder="Senha"
                    value={user.password}
                    onChange={(e) =>
                        setUser((prevState) => ({ ...prevState, password: e.target.value }))
                    }
                />
            </center>
            <p></p>
            <center>
                <input
                    type="button"
                    className="botLogin"
                    value="Cadastrar"
                    onClick={handleRegisterUser}
                />
            </center>
        </div>
    );
}
