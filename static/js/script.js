document.getElementById("year").innerHTML = new Date().getFullYear();

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

// ClassicEditor
//     .create(document.querySelector('#editor'))
//     .catch(error => {
//     console.error(error);
// });


// https://www.typeitjs.com

$('#content_description').typeIt({
    speed: 30,
    autoStart: true,
    waitUntilVisible: true
})
.tiType('Hello! ')
.tiPause(1000)
.tiType("It is <b id='content_name'>Sajjad Aemmi</b>'s playground<br>")
.tiBreak() 
.tiPause(750)
.tiType('Deep Learning Engineering Lead in p')
.tiPause(500)
.tiDelete(4)
.tiType("at <a href='https://parstechai.ir' target='_blank'>ParsTech.AI</a>")
.tiBreak() 
.tiPause(750)
.tiType("Master of AI at <a href='https://www.um.ac.ir' target='_blank'>Ferdowsi University of Mashhad</a>")
.tiBreak()
.tiType("Programmer, Teacher")
.tiPause(750)
.tiType(", Web Developer, Graphist")
.tiBreak().tiBreak()
.tiPause(750)
.tiSettings({speed: 20})
.tiType(`
    <i class='fa-brands fa-docker fa-fw'></i>
    <i class='fa-brands fa-unity fa-fw'></i>
    <i class='fa-brands fa-js fa-fw'></i>
    <i class='fa-brands fa-php fa-fw'></i>
    <i class='fa-brands fa-laravel fa-fw'></i>
    <i class='fa-brands fa-linux fa-fw'></i>
    <i class='fa-brands fa-ubuntu fa-fw'></i>
    <i class='fa-brands fa-raspberry-pi fa-fw'></i>
    <i class='fa-brands fa-python fa-fw'></i>
    `);