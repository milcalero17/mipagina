    
        document.getElementById("searchInput").addEventListener("keyup", function() {
            let filter = this.value.toLowerCase();
            let items = document.querySelectorAll(".search-item");

            items.forEach(item => {
                let text = item.getAttribute("data-name").toLowerCase();
                if (text.includes(filter)) {
                    item.classList.remove("hidden");
                } else {
                    item.classList.add("hidden");
                }
            });
        });

        
        function agregarAPlaylist(nombre) {
            let playlist = document.getElementById("playlist");
            let li = document.createElement("li");
            li.className = "list-group-item list-group-item-dark";
            li.innerHTML = `
                ${nombre}
                <button class="btn btn-sm btn-danger float-end" onclick="eliminarDePlaylist(this)">Eliminar</button>
                <button class="btn btn-sm btn-success float-end me-2" onclick="reproducirCancion('${nombre}')">Reproducir</button>
            `;
            playlist.appendChild(li);
        }

      
        function eliminarDePlaylist(elemento) {
            elemento.parentNode.remove();
        }

       
        function reproducirCancion(nombre) {
            document.getElementById("cancionActual").textContent = "Reproduciendo: " + nombre;
            let audio = document.getElementById("audioPlayer");
            audio.src = "musica/cancion.mp3"; 
            audio.play();
        }

     
        function descargarCancion(icono) {
            icono.style.color = "gray";
            icono.style.transform = "rotate(360deg)";
            setTimeout(() )=> {
                icono.style.color = "#1DB954";
                icono.style.transform = "rotate(0deg)";
                alert("Descarga completada");
            
            }
        }