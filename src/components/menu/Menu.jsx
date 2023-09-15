import React, { useContext, useNavigate } from 'react';
import './menu.css';
import { TemaContexto } from '../../App';
const Menu = () => {
    const {dark, setDark} = useContext(TemaContexto);

    const navigate = useNavigate();

    const navegar = (pagina) => {
        navigate(pagina);
    }
    return (
        <div className={`menu ${dark ? 'dark' : 'light'}`}>
            <ul>
                <li onClick={navegar('/')}>
                    Home
                </li>
                <li onClick={navegar('/')}>
                    Produtos
                </li>
                <li onClick={()=>setDark(!dark)}>
                    Mudar Tema
                </li>
            </ul>
        </div>
    )
}



export default Menu;