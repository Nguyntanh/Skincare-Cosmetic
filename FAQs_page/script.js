function toggleAnswer(button) {
    const answer = $('.frame_answer');
    const question = $('.Question');

    // Kiểm tra xem câu trả lời có đang hiển thị không
    if (answer.is(':visible')) {
        // Nếu đang hiển thị, slide up
        answer.slideUp(300, function() {
            question.animate({ height: '72px' }, 300); // Trở về chiều cao ban đầu
        });
    } else {
        // Nếu không hiển thị, slide down
        question.animate({ height: '204px' }, 300, function() {
            answer.slideDown(300); // Hiển thị câu trả lời
        });
    }
}
