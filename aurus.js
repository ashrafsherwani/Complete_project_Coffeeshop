
// Start function onclick event button

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
// End function for more and less button

// start Auto-typing text method


document.addEventListener('DOMContentLoaded', function (event) {
  window.onload = function () {


    var dataText = ["Look at the usual things with unusual eyes "];

    var caret = "\u258B";


    function type(text, i, fnCallback) {

      if (i < (text.length)) {

        document.querySelector("#text").textContent = text.substring(0, i + 1) + caret;


        setTimeout(function () {
          type(text, i + 1, fnCallback)
        }, 90);
      }
      else if (typeof fnCallback == 'function') {

        setTimeout(fnCallback, 1500);
      }
    }

    function StartAnimation(i) {
      if (typeof dataText[i] == 'undefined') {
        setTimeout(function () {
          StartAnimation(0);
        }, 1000);
      }

      if (i < dataText[i].length) {

        type(dataText[i], 0, function () {

          StartAnimation(i + 1);
        });
      }
    }
    StartAnimation(0);
  }
});

  //End Auto-typing txt method







