let qs = function(elemento){
    return document.querySelector(elemento)
  }

  window.addEventListener('load', () => {
    console.log('llegamos a editar producto');

    let formulario = qs('form#form')

    console.log(formulario.elements);

    let inputNombre = qs('#nombre')
    let inputPrecio = qs('#precio')
    let selectCategoria = qs('#categoria')
    let textareaDescripcion = qs('#descripcion')



    inputNombre.addEventListener('blur',function(){

        switch(true){
        
            case this.value.length === 0: 
                errorNombre.innerHTML = "*El campo nombre es obligatorio"
                this.classList.add('is-invalid')
                break
        
            case this.value.trim().length < 5:
                errorNombre.innerHTML = "*Caracteres minimos: 5"
                this.classList.add('is-invalid')
                break
        
                default:
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    errorNombre.innerHTML = "";
        }
        
        })

        inputPrecio.addEventListener('blur',function(){

            switch (true) {
                case this.value.length === 0:
                    errorPrecio.innerHTML = "*El precio es obligatorio";
                    this.classList.add('is-invalid')
                    break;

                case this.value.trim().length < 3:
                    errorNombre.innerHTML = "*El precio tiene que ser entre 100 y 50.000"
                    this.classList.add('is-invalid')
                break
               
                default:
                    this.classList.remove('is-invalid')
                    this.classList.add('is-valid')
                    errorPecio.innerHTML = ""
                    break;
            }
    
        })

        selectCategoria.addEventListener('blur',function(){

            switch (true) {
                case this.value.length === 0:
                    errorCategoria.innerHTML = "*La categoría es obligatoria";
                    this.classList.add('is-invalid')
                    break;
               
                default:
                    this.classList.remove('is-invalid')
                    this.classList.add('is-valid')
                    errorCategoria.innerHTML = ""
                    break;
            }
    
        })

        textareaDescripcion.addEventListener('blur',function(){

            switch (true) {
                case this.value.length === 0:
                    errorDescripcion.innerHTML = "*la descripcion es obligatoria";
                    this.classList.add('is-invalid')
                    break;
               
                default:
                    this.classList.remove('is-invalid')
                    this.classList.add('is-valid')
                    errorDescripcion.innerHTML = ""
                    break;
            }
    
        })


           
})