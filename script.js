// Lấy các phần tử
const giftBox = document.getElementById("giftBox");
const videoPlayer = document.getElementById("videoPlayer");
const backgroundAudio = document.getElementById("backgroundAudio");
const messageBox = document.getElementById("messageBox");

// Đảm bảo nhạc nền chỉ phát khi người dùng nhấn vào hộp quà
giftBox.addEventListener("click", () => {
    // Phát nhạc
    backgroundAudio.play().catch((error) => {
        console.error("Lỗi khi phát nhạc:", error);
    });

    // Hiển thị video nền
    videoPlayer.classList.add("video-visible"); // Hiện video
    giftBox.style.display = "none"; // Ẩn hộp quà
    document.querySelector(".click-to-open").style.display = "none"; // Ẩn chữ "Nhấp Để Mở"
    messageBox.style.display = "none"; // Ẩn dòng chữ chúc mừng
});

// Đảm bảo nhạc không phát tự động khi tải trang
document.addEventListener("DOMContentLoaded", () => {
    backgroundAudio.pause(); // Dừng nhạc khi tải trang
});
