document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".want-buy").addEventListener("click", function () {
    // Ẩn nút và thẻ decoration-form1
    this.style.display = "none";
    document.getElementById("decoration-form1").style.display = "none";

    // Hiển thị từ từ thẻ info-ship
    var infoShip = document.getElementById("info-ship");
    infoShip.classList.add("show");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var contents = document.querySelectorAll(".hidden-lazy");

  function checkVisibility() {
    contents.forEach(function (content) {
      var rect = content.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        content.classList.add("showlazy");
      }
    });
  }

  // Kiểm tra tầm nhìn khi tải trang và khi cuộn
  checkVisibility();
  window.addEventListener("scroll", checkVisibility);
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".list-page a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a

      // Xóa lớp active khỏi tất cả các liên kết
      navLinks.forEach((navLink) => navLink.classList.remove("active"));

      // Thêm lớp active vào liên kết được nhấn
      this.classList.add("active");

      // Lấy id của section tương ứng
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      // Cuộn đến section tương ứng
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        checkboxes.forEach((box) => {
          if (box !== this) {
            box.checked = false;
          }
        });
      }
    });
  });
});

// Lắng nghe sự kiện scroll
window.addEventListener("scroll", function () {
  // Lấy chiều cao hiện tại của cửa sổ
  var scrollPosition = window.scrollY;

  // Hiển thị hoặc ẩn nút Back to Top dựa vào vị trí cuộn
  var backToTopButton = document.getElementById("back-to-top-btn");
  if (scrollPosition > 300) {
    // Chỉ hiển thị nút khi cuộn xuống dưới 300px
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Hàm cuộn lên đầu trang mượt mà
function scrollToTop() {
  var position = window.pageYOffset; // Lấy vị trí hiện tại của trang
  var step = Math.floor(-position / 20); // Tính bước cuộn

  // Tạo animation cho việc cuộn lên đầu
  var scrollAnimation = setInterval(function () {
    if (position > 0) {
      window.scrollBy(0, step); // Cuộn một bước
    } else {
      clearInterval(scrollAnimation); // Dừng khi cuộn lên đầu
    }
    position += step;
  }, 15); // Thời gian mỗi bước (15ms là mượt nhất)
}

document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll(
    ".introduction-select .select-items"
  );
  const mainImage = document.getElementById("mainImage");

  // Function to change the main image
  function changeMainImage(src) {
    mainImage.src = src;
  }

  // Set the default image and checkbox on page load
  if (listItems.length > 0) {
    changeMainImage(listItems[0].getAttribute("data-src"));
    listItems[0].querySelector('input[type="checkbox"]').checked = true;
  }

  // Add click event listeners to each list item
  listItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Uncheck all checkboxes
      listItems.forEach(
        (li) => (li.querySelector('input[type="checkbox"]').checked = false)
      );

      // Check the clicked checkbox
      this.querySelector('input[type="checkbox"]').checked = true;

      // Change the main image to the selected item's image
      changeMainImage(this.getAttribute("data-src"));
    });
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const listItems = document.querySelectorAll(".select-items");
  const cardImg = document.getElementById("card-img");
  const checkboxes = document.querySelectorAll(".checkbox-wrapper input");

  // Function to update the image
  function updateImage(src) {
    cardImg.style.backgroundImage = `url(${src})`;
  }

  // Select the first image and checkbox by default
  if (listItems.length > 0) {
    listItems[0].classList.add("selected");
    checkboxes[0].checked = true;
    updateImage(listItems[0].dataset.src);
  }

  // Add event listeners to checkboxes
  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        // Uncheck other checkboxes
        checkboxes.forEach((cb, idx) => {
          if (idx !== index) cb.checked = false;
        });

        // Update the image and highlight the selected item
        listItems.forEach((item, idx) => {
          if (idx === index) {
            item.classList.add("selected");
            updateImage(item.dataset.src);
          } else {
            item.classList.remove("selected");
          }
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const listItems = document.querySelectorAll(".select-items");
  const cardImg = document.getElementById("card-img");
  const checkboxes = document.querySelectorAll(".checkbox-wrapper input");

  // Function to update the image
  function updateImage(src) {
    cardImg.style.backgroundImage = `url(${src})`;
  }

  // Select the first image and checkbox by default
  if (listItems.length > 0) {
    listItems[0].classList.add("selected");
    checkboxes[0].checked = true;
    updateImage(listItems[0].dataset.src);
  }

  // Add event listeners to checkboxes
  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        // Uncheck other checkboxes
        checkboxes.forEach((cb, idx) => {
          if (idx !== index) cb.checked = false;
        });

        // Update the image and highlight the selected item
        listItems.forEach((item, idx) => {
          if (idx === index) {
            item.classList.add("selected");
            updateImage(item.dataset.src);
          } else {
            item.classList.remove("selected");
          }
        });
      }
    });
  });

  // Update name and position in the card
  const inputName = document.getElementById("input-name1");
  const inputPosition = document.getElementById("input-position");
  const cardHolderName = document.getElementById("card-holder-name");
  const cardPosition = document.getElementById("card-position");

  inputName.addEventListener("input", (event) => {
    updateTextWithEffect(cardHolderName, event.target.value);
  });

  inputPosition.addEventListener("input", (event) => {
    const formattedText = capitalizeFirstLetter(event.target.value);
    updateTextWithEffect(cardPosition, formattedText);
  });

  function updateTextWithEffect(element, text) {
    const currentLength = element.childNodes.length;
    const newText = text.split("").map((char, index) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char; // Preserve spaces
      if (index >= currentLength) {
        span.classList.add("character", "new");
      } else {
        span.classList.add("character");
      }
      return span;
    });

    // Clear existing content and append new text nodes
    element.innerHTML = "";
    newText.forEach((span) => element.appendChild(span));

    // Remove 'new' class after animation completes
    newText.forEach((span) => {
      span.addEventListener("animationend", () => {
        span.classList.remove("new");
      });
    });
  }

  function capitalizeFirstLetter(text) {
    return text.replace(/\b\w/g, (firstChar) => firstChar.toUpperCase());
  }
});
