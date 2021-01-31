let qs = function(elemento){
    return document.querySelector(elemento)
  }

  window.addEventListener('load', () => {
    console.log('llegamos a carga producto');

    let formulario = qs('form#form')

    console.log(formulario.elements);

    let inputNombre = qs('#nombre')
    let inputPrecio = qs('#precio')
    let selectCategoria = qs('#categoria')
    let selectMarca = qs('#marca')
    let selectColor = qs('#color')
    let selectTalle = qs('#talle')
    let textareaDescripcion = qs('#descripcion')
    let inputImagen = qs('#imagen')


    let expresionImagen = /(.jpg|.jpeg|.png|.gif|webp)$/i;

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

        selectMarca.addEventListener('blur',function(){

            switch (true) {
                case this.value.length === 0:
                    errorMarca.innerHTML = "*La marca es obligatoria";
                    this.classList.add('is-invalid')
                    break;
               
                default:
                    this.classList.remove('is-invalid')
                    this.classList.add('is-valid')
                    errorMarca.innerHTML = ""
                    break;
            }
    
        })

        selectColor.addEventListener('blur',function(){

            switch (true) {
                case this.value.length === 0:
                    errorColor.innerHTML = "*El color es obligatorio";
                    this.classList.add('is-invalid')
                    break;
               
                default:
                    this.classList.remove('is-invalid')
                    this.classList.add('is-valid')
                    errorColor.innerHTML = ""
                    break;
            }
    
        })

        selectTalle.addEventListener('blur',function(){

            switch (true) {
                case this.value.length === 0:
                    errorTalle.innerHTML = "*El talle es obligatorio";
                    this.classList.add('is-invalid')
                    break;
               
                default:
                    this.classList.remove('is-invalid')
                    this.classList.add('is-valid')
                    errorTalle.innerHTML = ""
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

        inputImagen.addEventListener('change',function(){

            switch (true) {
                case !expresionImagen.exec(this.value) :
                    errorImagen.innerHTML =  "Solo imagenes con extension jpg, jpeg, png, o gif";
                    this.classList.add('is-invalid')
                    this.value = '';
                break
            
                default:
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    errorImagen.innerHTML = "";
            }

            })


           
})