const Menu = document.querySelector(".menu");
const Boton_Abrir_Menu = document.querySelector(".AbrirMenu");
const Boton_Cerrar_Menu = document.querySelector(".CerrarMenu");

function toggleMenu() {
    Menu.classList.toggle("MenuAbierto");
}

Boton_Abrir_Menu.addEventListener("click", toggleMenu)
Boton_Cerrar_Menu.addEventListener("click", toggleMenu)

const Links_Menu = document.querySelectorAll('.menu a[href^="#"]');
Links_Menu.forEach(Links_Menu => {
    Links_Menu.addEventListener("click", function(){
        Menu.classList.remove("MenuAbierto")
    })
})