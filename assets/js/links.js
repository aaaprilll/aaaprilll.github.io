document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('.link-group-title');
    
    titles.forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling;
            title.classList.toggle('collapsed');
            content.classList.toggle('collapsed');
        });
    });
}); 