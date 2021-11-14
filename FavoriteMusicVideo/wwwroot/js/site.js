// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.


var opacity = 0;

function videoAppear() {
    if (opacity < 1) {
        opacity += .1;
        setTimeout(function () { videoAppear() }, 100);
    }
    document.getElementById('Video_Container').style.opacity = opacity;
}