import { useState } from 'react'

export default function useEntrar() {
    const [ entrar, setEntrar ] = useState();

    const handleClick = () => {
        setEntrar(console.log("Entrado exitoso"));
    }
  return {
    entrar,
    handleClick
  };
}
