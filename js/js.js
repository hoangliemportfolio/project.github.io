// // Nhạc nền
// $('document').ready(function() {
//     document.addEventListener('mouseover', function()
//     {
//         var audio = document.querySelector('.bgSound');
//         audio.play()
//     })
//     });



// Phần thay đổi hình nền của trang chủ --------------------

var homeBackground = document.querySelectorAll('.background-item')


var indexx = 0;

function slide() {
    
    for (var i = 0; i < homeBackground.length; i++) {
        homeBackground[i].classList.remove('active'); }
        
      

        indexx++;
        if(indexx > homeBackground.length) {
            indexx = 1
        }
        homeBackground[indexx - 1].classList.add('active')
      
        setTimeout(slide, 4000)
    }



slide();



// Phần lật bài --------------------
var flipSound1 = document.querySelector('.flipSound1')
var flipSound2 = document.querySelector('.flipSound2')
var flipSound3 = document.querySelector('.flipSound3')
var flipSound4 = document.querySelector('.flipSound4')
var flipSound5 = document.querySelector('.flipSound5')
var card1 = document.getElementsByClassName('flip1')
function flip1() {
    for ( var i = 0; i < card1.length; i++ ) {
        card1[i].classList.remove('flip1');
        flipSound1.pause();
        flipSound1.currentTime = 0;
        flipSound1.play()
    }
    setTimeout(flip1, 8000)
    }
flip1()


var card2 = document.getElementsByClassName('flip2')
function flip2() {
    for ( var i = 0; i < card2.length; i++ ) {
        card2[i].classList.remove('flip2')
        flipSound2.pause();
        flipSound2.currentTime = 0;
        flipSound2.play()
    }
    setTimeout(flip2, 7500)
    }
flip2()


var card2 = document.getElementsByClassName('flip2')
function flip2() {
    for ( var i = 0; i < card2.length; i++ ) {
        card2[i].classList.remove('flip2')
        flipSound2.pause();
        flipSound2.currentTime = 0;
        flipSound2.play()
    }
    setTimeout(flip2, 7900)
    }
flip2()



var card3 = document.getElementsByClassName('flip3')
function flip3() {
    for ( var i = 0; i < card3.length; i++ ) {
        card3[i].classList.remove('flip3')
        flipSound3.pause();
        flipSound3.currentTime = 0;
        flipSound3.play()
    }
    setTimeout(flip3, 6000)
    }
flip3()



var card4 = document.getElementsByClassName('flip4')
function flip4() {
    for ( var i = 0; i < card4.length; i++ ) {
        card4[i].classList.remove('flip4')
        flipSound4.pause();
        flipSound4.currentTime = 0;
        flipSound4.play()
    }
    setTimeout(flip4, 7000)
    }
flip4()


var card5 = document.getElementsByClassName('flip5')
function flip5() {
    for ( var i = 0; i < card5.length; i++ ) {
        card5[i].classList.remove('flip5')
        flipSound5.pause();
        flipSound5.currentTime = 0;
        flipSound5.play()
    }
    setTimeout(flip5, 7500)
    }
flip5()




