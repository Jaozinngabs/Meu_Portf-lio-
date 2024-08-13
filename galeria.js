document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.nav-button.prev');
    const nextButton = document.querySelector('.nav-button.next');
    const galleryContainer = document.querySelector('.gallery-container');
    
    // Ajusta a rolagem para a esquerda
    prevButton.addEventListener('click', function () {
        galleryContainer.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });

    // Ajusta a rolagem para a direita
    nextButton.addEventListener('click', function () {
        galleryContainer.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });
});
