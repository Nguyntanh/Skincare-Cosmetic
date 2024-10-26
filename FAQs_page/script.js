$(document).ready(function () {
    $('.question, .long-question').on('mousedown', function () {
        $(this).find('.icon').addClass('active'); // Thêm hiệu ứng khi nhấn chuột
    });

    $(document).on('mouseup', function () {
        $('.icon').removeClass('active'); // Xóa hiệu ứng khi nhả chuột
    });

    $('.icon').click(function () {
        const questionFrame = $(this)
            .closest('.frame_question, .long-frame_question')
            .parent('.question, .long-question');
        const answerFrame = questionFrame.find('.frame_answer');
        const questionText = questionFrame.find('.frame_question p, .long-frame_question p');

        const isLongFrame = questionFrame.hasClass('long-question');

        if (answerFrame.is(':visible')) {
            answerFrame.fadeOut(300, function () {
                questionFrame.css('height', '');
            });

            $(this).animate({ opacity: 0 }, 200, function () {
                $(this).text('+').animate({ opacity: 1 }, 200);
            });

            questionText.animate({ opacity: 1 }, 200, function () {
                questionText.css('color', '#0C0C0C');
                questionText.animate({ opacity: 1 }, 200);
            });
        } else {
            const height = isLongFrame ? '230px' : '204px';
            questionFrame.css('height', height);
            answerFrame.fadeIn(1000);

            $(this).animate({ opacity: 0 }, 200, function () {
                $(this).text('-').animate({ opacity: 1 }, 200);
            });

            questionText.animate({ opacity: 1 }, 200, function () {
                questionText.css('color', '#A10550');
                questionText.animate({ opacity: 1 }, 200);
            });
        }
    });
});
