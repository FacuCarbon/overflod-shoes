let qs = function(elemento){
    return document.querySelector(elemento)
  }

  window.addEventListener('load', () => {
    console.log('llegamos');


    let formulario = qs('form#login')  

    console.log(formulario.elements);

    let inputEmail = qs('#email')
    let inputContraseña = qs('#contraseña')

let expresionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i





inputEmail.addEventListener('blur', function(){

    switch(true){

        case this.value == "":
            errorEmail.innerHTML ='*El campo email es obligatorio'
            this.classList.add('is-invalid')
            break;

        case !expresionEmail.test(this.value):
        errorEmail.innerHTML ='*Es necesario un email valido, por favor.'
        this.classList.add('is-invalid')
        break;

            default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorEmail.innerHTML = "";
            break;


    }

})

inputContraseña.addEventListener('blur', function(){

      switch(true){

          case this.value == "":
              errorContraseña.innerHTML = '*La contraseña es obligatoria'
              this.classList.add('is.invalid')
          break;

          default:
              this.classList.remove('is-invalid');
              this.classList.add('is-valid');
              errorContraseña.innerHTML = "";

          break;

      }

  })

  })