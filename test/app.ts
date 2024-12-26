const listaDeDiccionarios = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Ana', edad: 30 },
    { nombre: 'Pedro', edad: 35 }
  ];
  
const nuevaLista = listaDeDiccionarios.map(diccionario => (
    {
    params: { nombre: diccionario.nombre }, 
    props: { nombre: diccionario.nombre, edad: diccionario.edad + 1 }
    }
));
  
  console.log(nuevaLista);