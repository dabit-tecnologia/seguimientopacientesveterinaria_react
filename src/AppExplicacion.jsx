// import React from 'react' para versiones viejas de react es obligatorio

function AppExplicacion() {

    const sumar = () => {
      const numero = 5;
      if( numero > 5){
        console.log('Si es mayor')
      } else  {
        console.log('No es mayor');
      }    
      console.log(2+2); 
    }
    sumar();
  
    const edad = 33;
  
    return (
      <>
       {1+1}{/* lo trabaja como JS */}
       { edad >= 18 ? 'Eres mayor de edad': 'Eres menor de edad' /*condicional ternario JS en el component html*/}
        <div className=''>
          <h1>Hello World</h1>
        </div>
      </>
    )
  }
  
  export default AppExplicacion