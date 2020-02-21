/*1. Se requiere un algoritmo para obtener la edad promedio de un grupo de N alumnos.
 Si algún alumno tiene más de 18 años, se muestra el promedio que se lleva sin contar el alumno de 18 años.
  EL usuario decide si desea cerrar el programa o vuelve a ejecutarlo.*/


   
    let keep = true;
    
   while (keep) {

    let nStudents = 0;
    let ageStudents = 0;
    let averageStudents = 0;
    let counterStudents = 0;
    let acAgeStudents = 0;    
   
    nStudents = Number(prompt('Write the number students'));
    ageStudents = Number(prompt('Write the age'));

   while (ageStudents < 18) {

        counterStudents = counterStudents + 1;
        nStudents = nStudents + 1;
        acAgeStudents = acAgeStudents + ageStudents;
       
       if (ageStudents >= 18 ) {
          break;
       }
       //Average Results
    averageStudents = acAgeStudents / nStudents;  
    console.log(averageStudents);
   }
   answer = prompt('Do you want continue: Yes/Not');
   if (answer == 'Not') {
       keep = false;
   }    
} 

   

  
