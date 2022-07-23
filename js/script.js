const gm = document.querySelector(".galeria-modal");
const img = document.querySelector(".galeria-modal img");

function fecharGaleria(){
	document.querySelector(".galeria-modal").style.visibility = "hidden"
		document.querySelector(".galeria-modal img").style.transform = "scale(0)"

}
function abrirGaleria(src){
	document.querySelector(".galeria-modal").style.visibility = "visible"
	document.querySelector(".galeria-modal img").style.transform = "scale(1)"
	document.querySelector(".galeria-modal img").src = src
}