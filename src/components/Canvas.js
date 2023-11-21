// Canvas.js
import React, { useState, useRef, useEffect } from 'react';
import { BubbleBot } from './BubbleBot.js';
import { BubbleUser } from './BubbleUser.js';
import { CuadroTexto } from './CuadroTexto.js';
import "./styles.css";

export const Canvas = () => {
  const [userMessages, setUserMessages] = useState([]);
  const canvasRef = useRef();

  const handleUserMessage = (mensaje) => {
    setUserMessages([...userMessages, mensaje]);
  }

  useEffect(() => {
    // Desplazarse hacia abajo en el canvas después de que se renderiza un nuevo mensaje del usuario
    if (canvasRef.current) {
      canvasRef.current.scrollTop = canvasRef.current.scrollHeight;
    }
  }, [userMessages]);

  return (
    <div className='canvas' ref={canvasRef}>
      <div>
        <BubbleBot />
        {userMessages.map((mensaje, index) => (
          <BubbleUser key={index} mensaje={mensaje} />
        ))}
      </div>
      <CuadroTexto onSend={handleUserMessage} />
    </div>
  );
}
