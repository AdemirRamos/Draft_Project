var caixa, caixa_2, caixa_3, caixa_4, caixa_5, caixa_6

window.addEventListener('load', eventos)

function eventos() {
    caixa = document.querySelector('div#dv1')
    caixa.addEventListener('mouseover', div_switch)
    caixa.addEventListener('mouseout', div_switch_return)

    caixa_2 = document.querySelector('div#dv2')
    caixa_2.addEventListener('mouseover', div_switch_2)
    caixa_2.addEventListener('mouseout', div_switch_return_2)

    caixa_3 = document.querySelector('div#dv3')
    caixa_3.addEventListener('mouseover', div_switch_3)
    caixa_3.addEventListener('mouseout', div_switch_return_3)

    caixa_4 = document.querySelector('div#dv4')
    caixa_4.addEventListener('mouseover', div_switch_4)
    caixa_4.addEventListener('mouseout', div_switch_return_4)

    caixa_5 = document.querySelector('div#dv5')
    caixa_5.addEventListener('mouseover', div_switch_5)
    caixa_5.addEventListener('mouseout', div_switch_return_5)

    caixa_6 = document.querySelector('div#dv6')
    caixa_6.addEventListener('mouseover', div_switch_6)
    caixa_6.addEventListener('mouseout', div_switch_return_6)
}

function div_switch() {
    caixa.style.backgroundColor = 'burlywood'
    caixa.innerHTML = 'This is a DIV!'
    caixa.style.textAlign = 'center'
    caixa.style.color = 'coral'
    caixa.style.textShadow = '1px 1px 1px black'
}

function div_switch_return() {
    caixa.style.backgroundColor = 'burlywood'
    caixa.innerHTML = ''
}

function div_switch_2() {
    caixa_2.style.backgroundColor = 'skyblue'
    caixa_2.innerHTML = 'This is another DIV!'
    caixa_2.style.textAlign = 'center'
    caixa_2.style.color = 'coral'
    caixa_2.style.textShadow = '1px 1px 1px black'
}

function div_switch_return_2() {
    caixa_2.style.backgroundColor = 'skyblue'
    caixa_2.innerHTML = ''
}

function div_switch_3() {
    caixa_3.style.backgroundColor = 'cornflowerblue'
    caixa_3.innerHTML = 'Just one thing: D I V!'
    caixa_3.style.textAlign = 'center'
    caixa_3.style.color = 'coral'
    caixa_3.style.textShadow = '1px 1px 1px black'
}

function div_switch_return_3() {
    caixa_3.style.backgroundColor = 'cornflowerblue'
    caixa_3.innerHTML = ''
}

function div_switch_4() {
    caixa_4.style.backgroundColor = 'darkorchid'
    caixa_4.innerHTML = 'Call me DIV!'
    caixa_4.style.textAlign = 'center'
    caixa_4.style.color = 'coral'
    caixa_4.style.textShadow = '1px 1px 1px black'
}

function div_switch_return_4() {
    caixa_4.style.backgroundColor = 'darkorchid'
    caixa_4.innerHTML = ''
}

function div_switch_5() {
    caixa_5.style.backgroundColor = 'darkred'
    caixa_5.innerHTML = 'Another round of DIV!'
    caixa_5.style.textAlign = 'center'
    caixa_5.style.color = 'coral'
    caixa_5.style.textShadow = '1px 1px 1px black'
}

function div_switch_return_5() {
    caixa_5.style.backgroundColor = 'darkred'
    caixa_5.innerHTML = ''
}

function div_switch_6() {
    caixa_6.style.backgroundColor = 'darkturquoise'
    caixa_6.innerHTML = 'Once again: DIV!'
    caixa_6.style.textAlign = 'center'
    caixa_6.style.color = 'coral'
    caixa_6.style.textShadow = '1px 1px 1px black'
}

function div_switch_return_6() {
    caixa_6.style.backgroundColor = 'darkturquoise'
    caixa_6.innerHTML = ''
}
