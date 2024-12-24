// Lấy các phần tử
const giftBox = document.getElementById("giftBox");
const videoPlayer = document.getElementById("videoPlayer");
const backgroundAudio = document.getElementById("backgroundAudio");
const messageBox = document.getElementById("messageBox");

// Đảm bảo nhạc nền tự động phát
document.addEventListener("DOMContentLoaded", () => {
    backgroundAudio.play().catch((error) => {
        console.log("Trình duyệt chặn phát nhạc tự động. Đợi người dùng tương tác.");
    });
});

// Lắng nghe sự kiện click vào hộp quà
giftBox.addEventListener("click", () => {
    // Hiển thị video nền
    videoPlayer.classList.add("video-visible"); // Hiện video
    giftBox.style.display = "none"; // Ẩn hộp quà
    document.querySelector(".click-to-open").style.display = "none"; // Ẩn chữ "Nhấp Để Mở"
    messageBox.style.display = "none"; // Ẩn dòng chữ chúc mừng
});
