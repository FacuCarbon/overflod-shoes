let qs = function (elemento) {
    return document.querySelector(elemento)
}


window.addEventListener('load', () => {
    console.log('llegamos al registro!');

    let formulario = qs('form#registro')

    console.log(formulario.elements);

    let inputNombre = qs('#nombre')

    let inputApellido = qs('#apellido')

    let inputEmail = qs('#email')

    let inputContraseña = qs('#contraseña')

    let inputCheckbox = qs('#checkbox')

    let expresionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i

    let expresionContraseña = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;   // entre 8 y 20 caracteres, una mayuscula, y una minuscula


    inputNombre.addEventListener('blur', function () {
        switch (true) {
            case this.value.length === 0: 
                errorNombre.innerHTML = "El campo nombre es obligatorio"
                this.classList.add('is-invalid')
                break
            case this.value.trim().length < 3:
                errorNombre.innerHTML = "Caracteres minimos: 3"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorNombre.innerHTML = "";
        }
    })
    inputApellido.addEventListener('blur', function () {
        switch (true) {
            case this.value.length === 0:
                errorApellido.innerHTML = "El campo apellido es obligatorio"
                this.classList.add('is-invalid')
                break
            case this.value.trim().length < 3:
                errorApellido.innerHTML = "Caracteres minimos: 3"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorApellido.innerHTML = "";
        }
    })
    inputEmail.addEventListener('blur', function () {
        switch (true) {
            case this.value == "":
                errorEmail.innerHTML = 'El campo email es obligatorio'
                this.classList.add('is-invalid')
                break;
            case !expresionEmail.test(this.value):
                errorEmail.innerHTML = 'Es necesario un email valido, por favor.'
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorEmail.innerHTML = "";
                break;
        }
    })
    inputContraseña.addEventListener('blur', function () {
        switch (true) {
            case this.value == "":
                errorContraseña.innerHTML = 'La contraseña es obligatoria'
                this.classList.add('is-invalid')
                break;
            case !expresionContraseña.test(this.value):
                errorContraseña.innerHTML = "La contraseña debe tener entre 8 y 20 caraceteres, 1 numero, una letra minuscula y mayuscula"
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorContraseña.innerHTML = "";
                break;
        }
    })

    formulario.addEventListener('submit',function(e){
        e.preventDefault();
        let elementos = formulario.elements
        if(inputCheckbox.checked == false){
            inputCheckbox.classList.add('is-invalid');
            errorCheckbox.innerHTML = "Debes aceptar las bases y condiciones"
        }
        let error = false
        for (let index = 0; index < elementos.length-1; index++) {
            if(index != 5 && elementos[index].value == 0){
                elementos[index].classList.add('is-invalid');
               error = true;
            }
        }
        if(!error){
            formulario.submit()
        }else{
            msgError.innerHTML = "Los campos señadados son obligatorios"
        }
    })

})