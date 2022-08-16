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


// https://www.typeitjs.com

$('#content_description').typeIt({
    speed: 30,
    autoStart: true
})
.tiType('Hi! ')
.tiPause(1000)
.tiType("It's <b id='content_name'>Sajjad Aemmi</b>'s playground<br>")
.tiBreak() 
.tiPause(750)
.tiType('I\'m a Machine Learning Engineer in p')
.tiPause(500)
.tiDelete(4)
.tiType("at <b><a href='https://parstechai.ir' target='_blank'>ParsTech</a></b>")
.tiBreak() 
.tiPause(750)
.tiType("And Master of AI at <a href='https://www.um.ac.ir' target='_blank'>Ferdowsi University of Mashhad</a>")
.tiBreak()
.tiType('I have a brain for <b>Programming</b> and i teach it')
.tiBreak() 
.tiPause(750)
.tiType("Oh, I\'m also a <b>Web Developer</b> and <b>Graphist</b>")
.tiBreak().tiBreak()
.tiPause(750)
.tiSettings({speed: 20})
.tiType(`
    <i class='fa-brands fa-docker fa-fw'></i>
    <i class='fa-brands fa-unity fa-fw'></i>
    <i class='fa-brands fa-html5 fa-fw'></i>
    <i class='fa-brands fa-css3 fa-fw'></i>
    <i class='fa-brands fa-js fa-fw'></i>
    <i class='fa-brands fa-php fa-fw'></i>
    <i class='fa-brands fa-laravel fa-fw'></i>
    <i class='fa-brands fa-linux fa-fw'></i>
    <i class='fa-brands fa-ubuntu fa-fw'></i>
    <i class='fa-brands fa-raspberry-pi fa-fw'></i>
    <i class='fa-brands fa-python fa-fw'></i>
    <i class='fa-solid fa-c fa-fw'></i>
    `);