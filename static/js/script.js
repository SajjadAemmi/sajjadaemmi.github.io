document.getElementById("year").innerHTML = new Date().getFullYear();

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function () { 
    const radius = ($('#avatar').height() / 2) + 50;
    let step = (2 * Math.PI) / $('.popoverData').length, angle = 90 + step * 2.5;
    $('.popoverData').each(function () {
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

// $('#content_description').typeIt({
//     speed: 40,
//     autoStart: true,
//     waitUntilVisible: true
// })
// .tiType('Hi! ')
// .tiPause(1000)
// .tiType("I am <b>Sajjad Aemmi</b>")
// .tiBreak()
// .tiType("Graphic Designer, Teacher")
// .tiBreak() 
// .tiPause(750)
// .tiType("AI Programmer,  Web Developer")
// .tiBreak() 
// .tiPause(750)
// .tiType('Machine Learning Engineer at parste')
// .tiPause(500)
// .tiDelete(6)
// .tiType("<a href='https://parstechai.com/' target='_blank'>ParsTechAI</a>")
// .tiBreak() 
// .tiPause(750)
// .tiType("Master of AI at <a href='https://www.um.ac.ir' target='_blank'>Ferdowsi University of Mashhad</a>")
// .tiBreak().tiBreak();

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
    