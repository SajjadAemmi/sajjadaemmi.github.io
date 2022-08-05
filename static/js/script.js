const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function () { 
    var o = 20, i = o / $(document).height(), n = o / $(document).width(); 
    $("body").on("mousemove", function (a) { 
        var t = a.pageX - $(document).width() / 2, o = a.pageY - $(document).height() / 2, s = n * t * -1, m = i * o * -1, c = $(".lm-animated-bg"); 
        c.addClass("transition"), c.css({ "background-position": "calc( 50% + " + s + "px ) calc( 50% + " + m + "px )" }), 
        setTimeout(function () { c.removeClass("transition") }, 300) 
    });

    function distributeFields() {
        const radius = ($('#avatar').height() / 2) + 50;
        let fields = $('.btn'), container = $('#circle'),
            width = container.width(), height = container.height(),
            step = (2 * Math.PI) / fields.length, angle = 90 + step * 2.5;
        fields.each(function () {
            const x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
            const y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);
            $(this).css({
                left: x + 'px',
                top: y + 'px'
            });
            angle += step;
        });
    }
    distributeFields();
});

ClassicEditor
    .create(document.querySelector('#editor'))
    .catch(error => {
    //console.error(error);
});
