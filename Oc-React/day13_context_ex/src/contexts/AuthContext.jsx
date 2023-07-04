import React, { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContetxt = createContext();
export const useAuth = () => useContext(AuthContetxt);

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(
        () => JSON.parse(localStorage.getItem("user")) || null
    )

    const login = (email, password) => {
        const logUser = {
            id: "a123",
            email, password
        }
        localStorage.setItem("user", JSON.stringify(logUser))
        if (password === "1234") {
            setUser(logUser);
            navigate('/');
        }
    }

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    }

    const value = useMemo(() => ({
        user, login, logout, authed: !!user
    }), [user, login, logout])

    return (
        <AuthContetxt.Provider value={value}>
            {children}
        </AuthContetxt.Provider>
    );
};