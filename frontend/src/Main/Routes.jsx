import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../components/home/Home'
import UserCrud from "../components/user/UserCrud";

export default props => (
    <Routes>
        {/* exatamente entrar em /alguma coisa, cai no Home */}
        <Route exact path="/" element={<Home />} />
        {/* Sempre que navegar para /users vai chamar o UserCrud */}
        <Route path="/users" element={<UserCrud />} />
        {/* Caso qualquer outra rota, cai pro Home */}
        <Route path="*" element={<Home />} />
    </Routes>
)
    