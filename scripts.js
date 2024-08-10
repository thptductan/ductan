/* CSS chung cho body để khóa cuộn ngang */
body {
    overflow-x: hidden; /* Khóa cuộn ngang */
    margin: 0;
    padding: 0;
}

/* CSS chung cho phần thân */
.main-content {
    background-image: url('DT1.png') !important; /* Đặt hình nền */
    background-size: cover; /* Bao phủ toàn bộ phần thân */
    background-position: center; /* Căn giữa hình nền */
    background-repeat: no-repeat; /* Không lặp lại hình nền */
    margin: 0 auto; /* Căn giữa phần thân */
    display: block; /* Hiển thị phần thân */
    overflow: hidden; /* Đảm bảo không có cuộn ngang */
    position: relative; /* Đảm bảo các phần tử con được đặt đúng vị trí */
}

/* CSS cho các hình ảnh đè lên */
.overlay-images {
    position: absolute; /* Định vị tuyệt đối để đè lên hình nền */
    top: 12.5%; /* Đặt ở 12.5% chiều cao tính từ lề trên của DT1.png */
    left: 50%; /* Căn giữa theo chiều ngang */
    transform: translateX(-50%); /* Đẩy ngược về 50% chiều ngang để căn giữa */
    display: flex; /* Đặt các hình ảnh thành hàng ngang */
    justify-content: space-between; /* Cách đều các hình ảnh */
    width: 80%; /* Đặt chiều ngang của dãy hình ảnh bằng 80% của DT1.png */
}

.overlay-images img {
    width: 18%; /* Đảm bảo các hình ảnh có cùng kích thước và vừa với hàng ngang */
    border-radius: 10px; /* Bo tròn các góc của hình ảnh */
}

/* CSS cho Truy cập website */
.website-links {
    position: absolute;
    left: 5%; /* Căn lề trái */
    right: 5%; /* Căn lề phải */
    display: flex;
    justify-content: space-between;
}

/* CSS cho Chuyên mục */
.chuyen-muc {
    position: absolute;
    left: calc(100% / 3); /* Căn giữa vào 1/3 bên phải */
    width: calc(100% / 3); /* Chiều rộng chiếm 1/3 màn hình */
    text-align: center;
}

.tieu-de {
    background-color: #0000FF; /* Nền xanh lam */
    color: white;
    padding: 5px;
    border-radius: 5px;
}

.noi-dung {
    border: 2px solid #0000FF; /* Kẻ khung xanh lam */
    padding: 5px;
    border-radius: 5px;
    background-color: white; /* Nền trắng */
}

.noi-dung a {
    color: blue;
    text-decoration: underline;
}

/* CSS cho màn hình máy tính để bàn */
@media (min-width: 769px) {
    .main-content {
        width: 66.66vw; /* Chiều ngang bằng 2/3 chiều ngang của trình duyệt */
        height: calc(66.66vw * 1864 / 1056); /* Tỷ lệ chiều cao dựa trên tỷ lệ chính xác của hình ảnh */
    }

    .overlay-images {
        width: 80%; /* Chiều ngang của dãy hình ảnh trên màn hình máy tính */
    }

    .overlay-images img {
        width: 18%; /* Kích thước hình ảnh trên màn hình máy tính */
    }

    /* Điều chỉnh vị trí của các phần tử trên màn hình máy tính */
    .website-links {
        top: 60%; /* Đặt vị trí xuống mức 60% của chiều cao màn hình */
        font-size: 60%; /* Giảm kích thước chữ xuống 60% */
    }

    .chuyen-muc {
        top: 70%; /* Đặt vị trí xuống mức 70% của chiều cao màn hình */
        font-size: 60%; /* Giảm kích thước chữ xuống 60% */
    }
}

/* CSS cho màn hình di động */
@media (max-width: 768px) {
    .main-content {
        width: 100vw; /* Chiều ngang bằng chiều ngang màn hình */
        height: calc(100vw * 1864 / 1056); /* Tỷ lệ chiều cao dựa trên tỷ lệ chính xác của hình ảnh */
    }

    .overlay-images {
        width: 90%; /* Chiều ngang của dãy hình ảnh trên màn hình di động */
    }

    .overlay-images img {
        width: 18%; /* Kích thước hình ảnh trên màn hình di động */
    }

    /* Điều chỉnh vị trí của các phần tử trên màn hình di động */
    .website-links {
        top: 15%; /* Đặt vị trí xuống mức 15% của chiều cao màn hình */
    }

    .chuyen-muc {
        top: 20%; /* Đặt vị trí xuống mức 20% của chiều cao màn hình */
    }
}
