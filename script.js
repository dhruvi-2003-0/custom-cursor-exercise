document.addEventListener('DOMContentLoaded', () => {
    const customCursor = document.getElementById('custom-cursor');

    document.addEventListener('mousemove', e => {
        customCursor.style.left = e.pageX + 'px';
        customCursor.style.top = e.pageY + 'px';
    });

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseenter', () => customCursor.style.backgroundColor = 'black');
        link.addEventListener('mouseenter', () => customCursor.style.opacity = '0.7');
        link.addEventListener('mouseleave', () => customCursor.style.backgroundColor = 'transparent');
    });

    // Change cursor to 'view' (eye icon) on hover for images
    document.querySelectorAll('.image img').forEach(img => {
        img.addEventListener('mouseenter', () => customCursor.classList.add('view-cursor'));
        img.addEventListener('mouseenter', () => customCursor.style.opacity = '1');
        img.addEventListener('mouseleave', () => customCursor.classList.remove('view-cursor'));
    });
});