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

document.addEventListener("DOMContentLoaded", function() {
    const buyButton = document.getElementById('buy-header');
    const introduceSection = document.querySelector('.introduction-5');
    const navLinks = document.querySelectorAll(".btn-header-1");


    buyButton.addEventListener('click', function() {
        introduceSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".btn-header-1");

    window.addEventListener("scroll", function() {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60; // Adjust this value based on your header height
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY <= sectionTop + sectionHeight) {
                current = section.getAttribute("id") || section.classList[0];
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });
});
