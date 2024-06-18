document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.want-buy').addEventListener('click', function () {
        // Ẩn nút và thẻ decoration-form1
        this.style.display = 'none';
        document.getElementById('decoration-form1').style.display = 'none';

        // Hiển thị từ từ thẻ info-ship
        var infoShip = document.getElementById('info-ship');
        infoShip.classList.add('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var contents = document.querySelectorAll('.hidden-lazy');

    function checkVisibility() {
        contents.forEach(function (content) {
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

// document.addEventListener("DOMContentLoaded", function () {
//     const buyButton = document.getElementById('buy-header');
//     const introduceSection = document.querySelector('.introduction-5');
//     const navLinks = document.querySelectorAll(".btn-header-1");

//     navLinks.forEach(link => {
//         link.addEventListener("click", function (event) {
//             event.preventDefault();
//         });
//     });

//     buyButton.addEventListener('click', function () {
//         introduceSection.scrollIntoView({ behavior: 'smooth' });
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.list-page a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();  // Ngăn chặn hành vi mặc định của thẻ a

            // Xóa lớp active khỏi tất cả các liên kết
            navLinks.forEach(navLink => navLink.classList.remove('active'));

            // Thêm lớp active vào liên kết được nhấn
            this.classList.add('active');

            // Lấy id của section tương ứng
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Cuộn đến section tương ứng
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                checkboxes.forEach(box => {
                    if (box !== this) {
                        box.checked = false;
                    }
                });
            }
        });
    });
});


// Lắng nghe sự kiện scroll
window.addEventListener('scroll', function() {
    // Lấy chiều cao hiện tại của cửa sổ
    var scrollPosition = window.scrollY;

    // Hiển thị hoặc ẩn nút Back to Top dựa vào vị trí cuộn
    var backToTopButton = document.getElementById('back-to-top-btn');
    if (scrollPosition > 300) { // Chỉ hiển thị nút khi cuộn xuống dưới 300px
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Hàm cuộn lên đầu trang mượt mà
function scrollToTop() {
    var position = window.pageYOffset; // Lấy vị trí hiện tại của trang
    var step = Math.floor(-position / 20); // Tính bước cuộn

    // Tạo animation cho việc cuộn lên đầu
    var scrollAnimation = setInterval(function() {
        if (position > 0) {
            window.scrollBy(0, step); // Cuộn một bước
        } else {
            clearInterval(scrollAnimation); // Dừng khi cuộn lên đầu
        }
        position += step;
    }, 15); // Thời gian mỗi bước (15ms là mượt nhất)
}
