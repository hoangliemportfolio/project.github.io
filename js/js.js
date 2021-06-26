

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

var card1 = document.getElementsByClassName('flip1')
function flip1() {
    for ( var i = 0; i < card1.length; i++ ) {
        card1[i].classList.remove('flip1')
    }
    setTimeout(flip1, 7000)
    }
flip1()


var card2 = document.getElementsByClassName('flip2')
function flip2() {
    for ( var i = 0; i < card2.length; i++ ) {
        card2[i].classList.remove('flip2')
    }
    setTimeout(flip2, 6500)
    }
flip2()


var card2 = document.getElementsByClassName('flip2')
function flip2() {
    for ( var i = 0; i < card2.length; i++ ) {
        card2[i].classList.remove('flip2')
    }
    setTimeout(flip2, 6900)
    }
flip2()



var card3 = document.getElementsByClassName('flip3')
function flip3() {
    for ( var i = 0; i < card3.length; i++ ) {
        card3[i].classList.remove('flip3')
    }
    setTimeout(flip3, 5000)
    }
flip3()



var card4 = document.getElementsByClassName('flip4')
function flip4() {
    for ( var i = 0; i < card4.length; i++ ) {
        card4[i].classList.remove('flip4')
    }
    setTimeout(flip4, 6000)
    }
flip4()


var card5 = document.getElementsByClassName('flip5')
function flip5() {
    for ( var i = 0; i < card5.length; i++ ) {
        card5[i].classList.remove('flip5')
    }
    setTimeout(flip5, 6500)
    }
flip5()




