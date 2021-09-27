import React from 'react'
import '../assets/css/Alertas.css'

function Alertas() {
  return (
      <div className="Alertas">
          <p className="p">Programa tus alertas para el tipo de cambio que estés buscando.</p>
          <p>Se actualiza cada 5 minutos</p>
          <div className="df">
          <div className="side1">
              <p>Compra USD</p>
              <p className="mart">3.657</p>
          </div>
          <div className="side2">
              <p>Venta USD</p>
              <p className="mart">3.657</p>
          </div>
          </div>
          <div className="df">
          <p>Avisame cuando la compra sea mayor a</p>
  <input type="checkbox"></input>
          </div>
  <input placeholder="USD"></input>
  <div className="df">
  <p>Avisame cuando la compra sea menor a</p>
  <input type="checkbox"></input>
  </div>
  <input placeholder="USD"></input>
</div>
  );
}

export default Alertas;