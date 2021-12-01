let cambiar = document.getElementById("boton");

        function change(){
            let h1 = document.getElementById('titulo');
            console.log(h1.innerHTML);
            h1.style.color = "green";
            let parrafo = document.getElementById('parrafo');
            //cambiar el valor de parrafo
            parrafo.innerHTML = 'Esto lo camabiamos desde js';
        }

      //  cambiar.onclick = change;