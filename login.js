document.addEventListener('DOMContentLoaded', function() {
   console.log("HOLA MUNDO");

    form.addEventListener('submit', function(event) {
        var inputEmail = document.getElementById('Email');
        var inputPassword = document.getElementById('Password');
        console.log(inputPassword);
        //validarpassword(inputPassword);
        // Validación del correo con expresión regular
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var inputEmail = document.getElementById('Email');  // Asegúrate de reemplazar 'tuInputEmail' con el ID real de tu campo de correo electrónico
        
        if (inputEmail.value.trim() === '') {
            console.error('Por favor, ingrese un correo electrónico');
            event.preventDefault(); // Evita que se envíe el formulario
            return;
        }
        
        if (!emailRegex.test(inputEmail.value)) {
            console.error('Correo electrónico no válido');
            event.preventDefault(); // Evita que se envíe el formulario
            return;
        }
        
      /*  function validarpassword(Password) {
            // Verificar si la contraseña tiene al menos 8 caracteres
            if (contraseña.length >= 8) {
                console.log("Contraseña válida");
                return true;
            } else {
                console.log("La contraseña debe tener al menos 8 caracteres");
                return false;
            }
        }*/
        // Validación de mínimo 8 caracteres en la contraseña
       if (inputPassword.length < 8) {
            console.error('La contraseña debe tener al menos 8 caracteres');
            event.preventDefault(); // Evita que se envíe el formulario
            return;
        }
                    
        // Si todas las validaciones son exitosas, puedes continuar con el envío del formulario
        console.log('¡Datos válidos, enviando formulario!');
    });
});
