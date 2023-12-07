document.addEventListener('DOMContentLoaded', function() {

    var paragraphs = document.querySelectorAll('.imagename');

    function handleParagraphClick(event) {
        event.target.style.backgroundColor = "red";
        event.target.style.color = "white";
    }

    paragraphs.forEach(function(paragraph) {
        paragraph.addEventListener("click", handleParagraphClick);
    });
});
