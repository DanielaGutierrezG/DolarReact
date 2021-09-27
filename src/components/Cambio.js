import React from 'react'
import '../assets/css/Cambio.css'

function Cambio() {
  return (
      <div>Nueva Operación
    <div className="Cambio df">
        <div>
        <div className="df">
        <p>Dolar Compra : 3.520</p>
        <p>Dolar Venta : 3.520</p>
        </div>
       <div className="df">
       <p className="divisa">USD</p><input className="input" placeholder="Tu envias"></input>
       </div> 
        <div className="df">
        <p className="divisa">PEN</p><input className="input" placeholder="Tu recibes"></input>
        </div>
        <p>Ahorra promedio S/.84.00</p>
        <div className="puntos">
        <p>Recuerda que para seguir con tu operacíon necesitas registrar tu cuenta bancaria desde donde se va a transferir</p></div>
        </div>
        <div className="df">
        <input className="cupon" placeholder="¿Tienes un cupón?, Ingresalo"></input><button className="boton">Aplicar</button>
        </div>
    </div>
    </div>
  );
}

export default Cambio;