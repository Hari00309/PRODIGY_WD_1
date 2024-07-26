document.addEventListener('DOMContentLoaded', (event) => {
    var button = document.getElementById('lets-go-btn');
    
    button.addEventListener('mouseover', function() {
        button.style.backgroundColor=green;
    });

    button.addEventListener('mouseout', function() {
        button.style.backgroundColor = ''; // Reset to default
    });
});

