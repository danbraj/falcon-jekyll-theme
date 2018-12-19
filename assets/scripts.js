document.addEventListener("DOMContentLoaded", function() {

    const btn = document.getElementById('top');
    
    document.addEventListener('scroll', function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            btn.style.opacity = 1;
            btn.style.right = '30px';
        } else {
            btn.style.opacity = 0;
            btn.style.right = '-100px';
        } 
    });

    btn.addEventListener('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});