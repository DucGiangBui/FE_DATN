document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.want-buy').addEventListener('click', function() {
        // Ẩn nút và thẻ decoration-form1
        this.style.display = 'none';
        document.getElementById('decoration-form1').style.display = 'none';

        // Hiển thị từ từ thẻ info-ship
        var infoShip = document.getElementById('info-ship');
        infoShip.classList.add('show');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var contents = document.querySelectorAll('.hidden-lazy');

    function checkVisibility() {
        contents.forEach(function(content) {
            var rect = content.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                content.classList.add('showlazy');
            }
        });
    }

    // Kiểm tra tầm nhìn khi tải trang và khi cuộn
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});