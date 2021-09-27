import React from "react";
import "../assets/css/Sidebar.css";

class Sidebar extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="sidebar">
      <div className="sidebar-brand">
      <h1><span className="bi bi-app"></span>DOLARTEC</h1>
      </div>
      <div className="sidebar-menu">
      <ul>
      <li>
      <a href="" className="active"><span className="bi bi-app"></span>
      <span>Cambio de Dolares</span></a>
      </li>
      <li>
      <a href=""><span className="bi bi-app"></span>
      <span>Mis Operaciones</span></a>
      </li>
      <li>
      <a href=""><span className="bi bi-app"></span>
      <span>Cuentas Bancarias</span></a>
      </li>
      <li>
      <a href=""><span className="bi bi-app"></span>
      <span>Mis Cupones</span></a>
      </li>
      <li>
      <a href=""><span className="bi bi-app"></span>
      <span>Mis Alertas</span></a>
      </li>
      <li>
      <a href=""><span className="bi bi-app"></span>
      <span>Horarios de Atención</span></a>
      </li>
      </ul>
      </div>
      </div>

      <div>
        Nueva Operación
      </div>
      </React.Fragment>
    );
  }}


export default Sidebar;