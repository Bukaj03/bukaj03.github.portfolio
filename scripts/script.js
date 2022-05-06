function modal(x, y){
    let modal = document.getElementsByClassName('modal')[y];
    let modalImg = document.getElementsByClassName('modal-content')[y]
    let captionText = document.getElementsByClassName("caption")[y];
    modal.style.display = "flex";
    modalImg.src = x.src;
    captionText.innerHTML = x.alt;
}
function modalClose(y){
    let modal = document.getElementsByClassName('modal')[y];
    modal.style.display = "none";
}


function openMenu(){
    document.getElementsByClassName('menu')[0].style.display = 'block';
    document.getElementsByClassName('close-menu')[0].style.display = 'block';
}
function closeMenu(){
    document.getElementsByClassName('close-menu')[0].style.display = 'none';
    location.reload();
}
