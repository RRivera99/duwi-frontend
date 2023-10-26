import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoduwi.png';
function Footer() {
  return (
<div className="bg-gray-800 text-gray-300 py-8 ">
  <div className="container mx-auto  flex flex-wrap justify-between items-center ">
    <div className="w-full md:w-auto md:flex-grow-0 flex-shrink-0 mb-4 md:mb-0">
      <img src={logo} alt="Logo" className="w-50 h-12 mt-2 ml-2" />
    </div>
    <div className="w-full md:w-auto md:flex-grow-0 flex-shrink-0">
      <ul className="flex flex-wrap justify-center space-x-4">
        <li>
          <Link to="/donaciones" className="hover:text-moradito font-poppins">
            Donaciones
          </Link>
        </li>
        <li>
          <Link to="/buzon-de-sugerencias" className="hover:text-moradito font-poppins">
            Buzón de sugerencias
          </Link>
        </li>
        <li>
          <Link to="/acerca-de-nosotros" className="hover:text-moradito font-poppins">
            Acerca de nosotros
          </Link>
        </li>
      </ul>
    </div>
    <div className="w-full md:w-auto md:flex-grow-0 flex-shrink-0">
      <p className="text-center text-sm font-poppins">
        2023 Did U Watch It? - Todo el contenido externo pertenece a su dueño legal en cuanto a derechos.
      </p>
    </div>
  </div>
</div>
);
}

export default Footer;