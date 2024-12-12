'use client'
import "./globals.css";

import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter()

    return (
        <div className="min-h-screen bg-gray-100">
            <h1 className="text-center ">Bem vindo!</h1>
            <p className="text-2xl"></p>
            <center>
                <div className="pb-3">
                    <button
                        type="button"
                        className="botLogin"
                        onClick={() => router.push('/auth/login')}
                    >Entrar</button>
                </div>
                <div>
                    <button
                        type="button"
                        className="botLogin"
                        onClick={() => router.push("/auth/sign-in")}>Cadastrar</button>
                </div>
            </center>
        </div>
    );
}