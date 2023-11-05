// import React from 'react' para versiones viejas de react es obligatorio
import { useState, useEffect } from 'react' 
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? []; // reemplazo el hook useEffect para cargar desde el local storage.
  const [pacientes, setPacientes] = useState( INITIAL );
  //const [pacientes, setPacientes] = useState( [] );
  const [paciente, setPaciente] = useState({});

  // Obtiene en el local storage "pacientes"
  /*useEffect( () => { 
      const obtenerLS = () => {
        const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
        console.log(pacientesLS)
        setPacientes(pacientesLS)
        console.log(pacientes)
      }
      obtenerLS(); 
      // eslint-disable-next-line react-hooks/exhaustive-deps     
    },[]
  );*/
  
  // Guarda en el local storage "pacientes"
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])


  const eliminarPaciente = (id) => {
    console.log('Eliminando Paciente ', id)
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    console.log(pacientesActualizados)
    setPacientes(pacientesActualizados)
  }

  return (
    <>
      <div className="container mx-auto mt-20">
        <Header/>
        <div className="mt-12 md:flex">
          <Formulario
            pacientes = {pacientes}
            setPacientes = {setPacientes}  
            paciente = {paciente}   
            setPaciente = {setPaciente}     
          />
          <ListadoPacientes
            pacientes = {pacientes}
            setPaciente = {setPaciente}
            eliminarPaciente = {eliminarPaciente}
          />
        </div>
      </div>
    </>
  )
}

export default App

