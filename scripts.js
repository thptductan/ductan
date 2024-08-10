document.addEventListener('DOMContentLoaded', function () {
    // Ví dụ xử lý nội dung chi tiết bài viết
    // Thay thế nội dung bên dưới bằng nội dung thực tế từ bài viết

    const articleLeft = document.getElementById('article-left');
    const articleRight = document.getElementById('article-right');

    // Thay thế bằng nội dung bài viết thực tế
    const articles = [
        { img: 'img1.png', title: 'Bài viết 1', summary: 'Tóm tắt nội dung bài viết 1' },
        { img: 'img2.png', title: 'Bài viết 2', summary: 'Tóm tắt nội dung bài viết 2' },
        { img: 'img3.png', title: 'Bài viết 3', summary: 'Tóm tắt nội dung bài viết 3' },
        { img: 'img4.png', title: 'Bài viết 4', summary: 'Tóm tắt nội dung bài viết 4' },
        { img: 'img5.png', title: 'Bài viết 5', summary: 'Tóm tắt nội dung bài viết 5' }
    ];

    articles.forEach((article, index) => {
        const articleItem = document.createElement('div');
        articleItem.classList.add('article-item');
        articleItem.innerHTML = `
            <img src="${article.img}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.summary}</p>
        `;
        articleLeft.appendChild(articleItem);
    });

    // Xử lý phần bên phải với danh sách các bài viết còn lại
    // Thay thế nội dung này bằng danh sách thực tế
});
