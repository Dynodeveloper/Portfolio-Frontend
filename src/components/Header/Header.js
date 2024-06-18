import react from "react";
import './Header.css';

function Header(){

    const nombre = 'Cesar Pinzon';



    return(


        <><header className="header"></header>
        
        <div id="cont-info">
        <img src="/profile-pic.jpg" alt="Mi Imagen" id="profile-image" />
           
            <h1 id= "name">{nombre}</h1>
        </div></>
        

    );
}

export default Header;