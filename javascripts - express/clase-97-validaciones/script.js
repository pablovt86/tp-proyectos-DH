function qs(element){
    return document.querySelector(element)
    
    }
    
    window.addEventListener('load', ()=>{
    
    let $inputName = qs('#name'),
        $nameErrors = qs('#nameErrors'),
        $inputLastname = qs('#lastname'),
        $lastnameErrors = qs('#lastnameErrors'),
        $form = qs('#form'),
        $dni = qs('#dni'),
        $dniErrors = qs('#dniErrors'),
        $email = qs('#email'),
        $emailErrors = qs('#emailErrors'),
        $pass = qs('#pass'),
        $passErrors = qs('#passErrors'),
        $pass2 = qs('#pass2'),
        $pass2Errors = qs('#pass2Errors'),
        $fecha = qs('#fecha'),
        $fechaErrors = qs('#dateErrors'),
        $sexo = qs('#sexo'),
        $sexErrors = qs('#sexErrors'),
        $terms = qs('#flexCheckDefault'),
        $termsErrors = qs('#termsErrors'),
        $file = qs('#formFile'),
        $fileErrors = qs('#fileErrors'),
        $imgPreview = qs('#img-preview'),
        regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
        regExDNI = /^[0-9]{7,8}$/,
        regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
        regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    
      let validationErrorrs = false;
     
       $inputName.addEventListener('blur', function(){
         switch(true){
       case !$inputName.value.trim():
            $nameErrors.innerHTML = "el campo nombre es obligatorio"
          $inputName.classList.add('is-invalid')  
           validationsErrors = true
              break;
           case!regExAlpha.test($inputName.value):
       $nameErrors.innerHTML = "ingrese un nombre es vaolido"
          $inputName.classList.add('is-invalid')  
           validationsErrors = true
        break;
    default:
    $inputName.classList.remove('is-invalid') 
    $inputName.classList.add('is-valid') 
    $nameErrors.innerHTML = "";
    validationsErrors = false
    break;
    
    }
    
    })
    
    $inputLastname.addEventListener('blur', function(){
            
            switch (true) {
                case !$inputLastname.value.trim():
                    $lastnameErrors.innerHTML = 'El campo apellido es obligatorio'
                    $inputLastname.classList.add('is-invalid')
                    validationsErrors = true
                    break;
                case !regExAlpha.test($inputLastname.value):
                    $lastnameErrors.innerHTML = 'Ingresa un apellido válido'
                    $inputLastname.classList.add('is-invalid')
                    validationsErrors = true
                    break;    
                default:
                    $inputLastname.classList.remove("is-invalid");
                    $inputLastname.classList.add('is-valid')
                    $lastnameErrors.innerHTML = ""
                    validationsErrors = false
                    break;
            }
        })
    
    $dni.addEventListener('blur', function(){
            switch (true) {
                case !$dni.value.trim():
                    $dniErrors.innerHTML = 'El campo DNI es obligatorio'
                    $dni.classList.add('is-invalid')
                    validationsErrors = true
                    break;
                case !regExDNI.test($dni.value):
                    $dniErrors.innerHTML = 'Debe ingresar un DNI válido'
                    $dni.classList.add('is-invalid')
                    validationsErrors = true
                    break;    
                default:
                    $dni.classList.remove("is-invalid");
                    $dni.classList.add('is-valid')
                    $dniErrors.innerHTML = ""
                    validationsErrors = false
                    break;
            }
        })
    
    
    $email.addEventListener('blur', function(){
            switch (true) {
                case !$email.value.trim():
                    $emailErrors.innerHTML = 'El campo email es obligatorio'
                    $email.classList.add('is-invalid')
                    validationsErrors = true
                    break;
                case !regExEmail.test($email.value):
                    $emailErrors.innerHTML = 'Debe ingresar un email válido'
                    $email.classList.add('is-invalid')
                    validationsErrors = true
                    break;    
                default:
                    $email.classList.remove("is-invalid");
                    $email.classList.add('is-valid')
                    $emailErrors.innerHTML = ""
                    validationsErrors = false
                    break;
            }
        })
    
    
    $pass.addEventListener('blur', function(){
            switch (true) {
                case !$pass.value.trim():
                    $passErrors.innerHTML = 'El campo contraseña es obligatorio'
                    $pass.classList.add('is-invalid')
                    validationsErrors = true
                    break;
                case !regExPass.test($pass.value):
                    $passErrors.innerHTML = 'La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número';
                    $pass.classList.add('is-invalid')
                    validationsErrors = true
                    break;    
                default:
                    $pass.classList.remove("is-invalid");
                    $pass.classList.add('is-valid')
                    $passErrors.innerHTML = ""
                    validationsErrors = false
                    break;
            }
        })
    
    $pass2.addEventListener('blur', function(){
            switch (true) {
                case !$pass2.value.trim():
                    $pass2Errors.innerHTML = 'El campo contraseña es obligatorio'
                    $pass2.classList.add('is-invalid')
                    validationsErrors = true
                    break;
                case $pass2.value !== $pass.value:
                    $pass2Errors.innerHTML = 'Las contraseñas no coinciden';
                    $pass2.classList.add('is-invalid')
                    validationsErrors = true
                    break;    
                default:
                    $pass2.classList.remove("is-invalid");
                    $pass2.classList.add('is-valid')
                    $pass2Errors.innerHTML = ""
                    validationsErrors = false
                    break;
            }
        })
    
    $fecha.addEventListener('blur', function(){
    
    switch(true){
    
    case !$fecha.value.trim():
    $fechaErrors.innerHTML = "debe ingresar tu fecha de nacimmeiento"
    $fecha.classList.add('is-invalid');
    validationErrors = true;
    break;
    case moment($fecha.value) > moment():
    $fechaErrors.innerHTML = "fecha invalida"
    $fecha.classList.add('is-invalid');
    validationsErrors = true;
    break;
    case moment().diff(moment($fecha.value), 'years') < 18:
    $fechaErrors.innerHTML = "debes tener mas de 18 años"
    $fecha.classList.add('is-invalid');
    validationsErrors = true;
    break;
    default:
    $fecha.classList.remove('is-valid');
    $fecha.classList.add('is-valid');
    $fechaErrors.innerHTML = ""
    validationsErrors = false;
    validationsErrors = true;
    
    break;
    
    
    
    
    
    }
    
    
    })
    $sexo.addEventListener('blur', function(){
            if(!$sexo.value.trim()){
                 $sexErrors.innerHTML = 'Campo requerido';
                 $sexo.classList.add('is-invalid')
                 validationsErrors = true
             } else {
                 $sexo.classList.remove('is-invalid');
                 $sexo.classList.add('is-valid');
                 $sexErrors.innerHTML = ''
                 validationsErrors = false
             }
        })
    
    $terms.addEventListener('click', function (){
            $terms.value = "on"
            $terms.classList.toggle('is-valid')
            $terms.classList.remove('is-invalid')
            $termsErrors.innerHTML = ""
        })
    
    $form.addEventListener('submit', function(event){
    
    let error = false;
    
    event.preventDefault();
    
    let elementsForm = this.elemnt
    
    
    })


    $form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        let error = false;
        let elementsForm = this.elements;

        for (let index = 0; index < elementsForm.length - 1; index++){
            if(elementsForm[index].value == ''
            && elementsForm[index].type !== 'file'
            && elementsForm[index].name !== 'apellido'
            ){
                elementsForm[index].classList.add('is-invalid');
                submitErrors.innerHTML = 'Los campos señalados son obligatorios';
                error = true;
            }
        }

        if(!$terms.checked){
            $terms.classList.add('is-invalid');
            $termsErrors.innerHTML = 'Debes aceptar los términos y condiciones';
            error = true;
        }

        if(!error && !validationsErrors){
            $form.submit()
        }

    })


    
$file.addEventListener('change', function fileValidation(){
    let filePath = $file.value; // Captura el valor del input
    let allowedExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i;
    if(!allowedExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
        $fileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)'
        $file.value = '';
        $imgPreview.innerHTML = '';
        return false;
    }else{
        //Image preview
        console.log($file.files)
        if($file.files && $file.files[0]){
            let reader = new FileReader();
            reader.onload = function (e) {
                $imgPreview.innerHTML = `<img src="${e.target.result}" alt="">`
            }
        
}

}



})
    })
