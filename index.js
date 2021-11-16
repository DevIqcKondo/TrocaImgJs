var imagem = 1;
var ImgSrc = [
    "imagens/IMG_1.jpg",
    "imagens/IMG_2.jpg",
    "imagens/IMG_5.jpg",
    "imagens/IMG_6.jpg",
];

function trocar() {

    if (imagem == ImgSrc.length) {
        imagem = 0;
    }
    document.getElementById("frases").src = ImgSrc[imagem];
    imagem++;

}
