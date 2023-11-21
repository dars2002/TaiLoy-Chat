// CuadroTexto.js
import React, { useState, useRef } from 'react';
import { BubbleUser } from './BubbleUser.js'
import "./styles.css";

export const CuadroTexto = ({ onSend }) => {
  const [mensaje, setMensaje] = useState("");
  const textareaRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      enviarMensaje();
    }
  };

  const enviarMensaje = () => {
    if (mensaje.trim() !== "") {
      onSend(mensaje);
      setMensaje("");

      // Seleccionar automáticamente el textarea después de enviar el mensaje
      if (textareaRef.current) {
        textareaRef.current.focus();
      }

    } else {
      console.log("El mensaje está vacío");
    }
  };

  return (
    <div className='cuadro-texto'>
      <textarea
        placeholder='Escribe tu mensaje'
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        onKeyPress={handleKeyPress}
        ref={textareaRef} // Asignar la referencia al textarea
      ></textarea>
      <button onClick={enviarMensaje}>ENVIAR</button>
    </div>
  );
}
