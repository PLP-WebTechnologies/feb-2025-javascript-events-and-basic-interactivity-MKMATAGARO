// Change Button Text Color on Click
const changeColorButton = document.getElementById("changeColorButton");
changeColorButton.onclick = function () {
    document.body.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

// Hover effect to change text style
const hoverText = document.getElementById("hoverText");
hoverText.onmouseover = function () {
    hoverText.style.color = "red";
    hoverText.style.fontWeight = "bold";
};
hoverText.onmouseout = function () {
    hoverText.style.color = "black";
    hoverText.style.fontWeight = "normal";
};

// Word Slideshow - Show next word on button click
const words = ["Fun", "Play", "Learn", "Happy", "Smile"];
let currentWordIndex = 0;

const slideshowText = document.getElementById("slideshowText");
const nextWordButton = document.getElementById("nextWordButton");

nextWordButton.onclick = function () {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    slideshowText.textContent = words[currentWordIndex];
};

// Interactive Word with Image Popup
const wordImage = document.getElementById("wordImage");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

// Example image for the word "Hello"
wordImage.onclick = function () {
    modalImage.src = "https://example.com/child-hello.jpg";  // Replace with a valid image URL
    imageModal.style.display = "flex";
};

// Close the Modal
closeModal.onclick = function () {
    imageModal.style.display = "none";
};

// Form Validation
const userForm = document.getElementById("userForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

userForm.onsubmit = function (e) {
    let isValid = true;

    // Username validation
    if (username.value === "") {
        nameError.textContent = "Username is required!";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        emailError.textContent = "Please enter a valid email address!";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Password validation
    if (password.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters!";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    if (!isValid) {
        e.preventDefault();
    }
};
