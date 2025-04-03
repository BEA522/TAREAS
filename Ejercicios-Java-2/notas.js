
const alumnos = [  
    { nombre: 'Juan Gomez', nota: 7 },  
    { nombre: 'Pedro Rodriguez', nota: 4 },  
    { nombre: 'Roxana García', nota: 8 },  
    { nombre: 'Luciano Lopez', nota: 5 },  
    { nombre: 'Fernanda Gimenez', nota: 6 },  
    { nombre: 'Florencia Martinez', nota: 10 },  
    { nombre: 'Raul Sanchez', nota: 7 },  
    { nombre: 'Sandra Figueroa', nota: 8 }  
];  

// Creamos un array para los alumnos aprobados  
const alumnosAprobados = [];  

// Recorremos el array de alumnos con un bucle for  
for (let i = 0; i < alumnos.length; i++) {  
    // Comprobamos si la nota del alumno es mayor o igual a 7  
    if (alumnos[i].nota >= 7) {  
        // Si es aprobado, lo agregamos al array de aprobados  
        alumnosAprobados.push(alumnos[i]);  
    }  
}

  // Mostramos el resultado en el HTML  
  const resultadoDiv = document.getElementById('resultado');  
  resultadoDiv.innerHTML = '<h2>Alumnos Aprobados:</h2>';  

  // Mostramos la lista de alumnos aprobados  
  alumnosAprobados.forEach(alumno => {  
      resultadoDiv.innerHTML += `<p>${alumno.nombre} - Nota: ${alumno.nota}</p>`;  
  });  

  //Mostraremos el resultado en la consola
  console.log('Alumnos Aprobados:', alumnosAprobados);