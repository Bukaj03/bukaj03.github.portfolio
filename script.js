function modal(x){
    let modal = document.getElementsByClassName('portfolio-gallery-modal')[0];
    let img = document.getElementsByClassName('portfolio-gallery-link-image')[x-1];
    let modalImg = document.getElementsByClassName('portfolio-gallery-modal-img')[0];
    modal.style.display = 'flex';
    modalImg.src = img.src;
    modalImg.alt = x;
}
function openMenu(){
    document.getElementsByClassName('menu')[0].style.display = 'block';
    document.getElementsByClassName('close-menu')[0].style.display = 'block';
}
function closeMenu(){
    document.getElementsByClassName('close-menu')[0].style.display = 'none';
    location.reload();
}