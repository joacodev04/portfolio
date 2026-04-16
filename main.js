// Carrusel de Proyectos - Independiente para cada proyecto
document.addEventListener('DOMContentLoaded', function() {
    const carruseles = document.querySelectorAll('.carrusel');
    
    carruseles.forEach(carrusel => {
        const images = carrusel.querySelectorAll('.img-sistema');
        const prevBtn = carrusel.querySelector('.prev');
        const nextBtn = carrusel.querySelector('.next');
        
        let currentIndex = 0;

        // Mostrar la imagen actual
        function showImage(index) {
            // Remover clase active de todas las imágenes de este carrusel
            images.forEach(img => img.classList.remove('active'));
            
            // Asegurar que el índice esté dentro del rango válido
            if (index >= images.length) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = images.length - 1;
            } else {
                currentIndex = index;
            }
            
            // Agregar clase active a la imagen actual
            images[currentIndex].classList.add('active');
        }

        // Event listeners para los botones
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                showImage(currentIndex - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                showImage(currentIndex + 1);
            });
        }

        // Mostrar la primera imagen
        if (images.length > 0) {
            showImage(0);
        }
    });
});
