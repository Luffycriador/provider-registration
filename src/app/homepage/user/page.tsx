"use client";

import "./styles.css";
import React from "react";

const Header = () => {
    return (
        <header>
            <div className="container">
                <h1 className="logo"></h1>

                <nav>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Buscar</a></li>
                        <li><a href="#">Notificações</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
