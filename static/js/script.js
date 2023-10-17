document.getElementById("year").innerHTML = new Date().getFullYear();

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function () { 
    const radius = ($('#avatar').height() / 2) + 50;
    let step = (2 * Math.PI) / $('.btn').length, angle = 90 + step * 2.5;
    $('.btn').each(function () {
        const x = Math.round($('#circle').width() / 2 + radius * Math.cos(angle) - $(this).width() / 2);
        const y = Math.round($('#circle').height() / 2 + radius * Math.sin(angle) - $(this).height() / 2);
        $(this).css({left: x + 'px', top: y + 'px'});
        angle += step;
    });

    let t, o = 20, i = o / $(this).height(), n = o / $(this).width(); 
    $("body").on("mousemove", function (a) { 
        t = a.pageX - $(this).width() / 2;
        o = a.pageY - $(this).height() / 2; 
        s = n * t * -1;
        m = i * o * -1; 
        c = $(".lm-animated-bg"); 
        c.addClass("transition");
        c.css({ "background-position": "calc( 50% + " + s + "px ) calc( 50% + " + m + "px )" });
        setTimeout(function () { c.removeClass("transition") }, 300);
    });
});

// ClassicEditor
//     .create(document.querySelector('#editor'))
//     .catch(error => {
//     console.error(error);
// });


// https://www.typeitjs.com

$('#content_description').typeIt({
    speed: 40,
    autoStart: true,
    waitUntilVisible: true
})
.tiType('Hi! ')
.tiPause(1000)
.tiType("I am <b id='content_name'>Sajjad Aemmi</b>")
.tiBreak()
.tiType("Programmer, Teacher, ")
.tiPause(750)
.tiType("Designer")
.tiBreak() 
.tiPause(750)
.tiType('Machine Learning Engineer at parste')
.tiPause(500)
.tiDelete(6)
.tiType("<a href='https://parstechai.com/' target='_blank'>ParsTechAI</a>")
.tiBreak() 
.tiPause(750)
.tiType("Master of AI at <a href='https://www.um.ac.ir' target='_blank'>Ferdowsi University of Mashhad</a>")
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
    <i class="fa-brands fa-golang"></i>
    `);

$('#content_description_404').typeIt({
        speed: 40,
        autoStart: true,
        waitUntilVisible: true
    })
    .tiType('ERROR')
    .tiBreak()
    .tiPause(1000)
    .tiType("<b id='content_name'>404</b>")
    .tiBreak()
    .tiType("This page is outside of the universe");
    