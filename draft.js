var caixa, caixa_2, caixa_3, caixa_4, caixa_5, caixa_6, area_1, area_2, area_3, area_4, area_5, button_1, button_2, button_3, button_4

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

    area_1 = document.getElementById('title_2')
    area_2 = document.querySelector('h3#title_3')
    area_3 = document.getElementById('cabeçalho')
    area_4 = document.getElementById('title_1')
    area_5 = document.querySelector('body#corpo')

    button_1 = document.getElementById('b1')
    button_1.addEventListener('click', colour_1)

    button_2 = document.querySelector('input#b2')
    button_2.addEventListener('click', colour_2)
}

function div_switch() {
    caixa.style.backgroundColor = 'burlywood'
    caixa.innerHTML = 'This is a DIV!'
    caixa.style.textAlign = 'center'
    caixa.style.lineHeight = '200px'
    caixa.style.fontSize = '18px'
    caixa.style.color = 'coral'
    caixa.style.textShadow = '1px 1px 1px black'
    caixa.style.cursor = 'pointer'
}

function div_switch_return() {
    caixa.style.backgroundColor = 'burlywood'
    caixa.innerHTML = ''
}

function div_switch_2() {
    caixa_2.style.backgroundColor = 'skyblue'
    caixa_2.innerHTML = 'This is another DIV!'
    caixa_2.style.fontSize = '18px'
    caixa_2.style.textAlign = 'center'
    caixa_2.style.lineHeight = '200px'
    caixa_2.style.color = 'coral'
    caixa_2.style.textShadow = '1px 1px 1px black'
    caixa_2.style.cursor = 'pointer'
}

function div_switch_return_2() {
    caixa_2.style.backgroundColor = 'skyblue'
    caixa_2.innerHTML = ''
}

function div_switch_3() {
    caixa_3.style.backgroundColor = 'cornflowerblue'
    caixa_3.innerHTML = 'Just one thing: D I V!'
    caixa_3.style.fontSize = '18px'
    caixa_3.style.textAlign = 'center'
    caixa_3.style.lineHeight = '200px'
    caixa_3.style.color = 'coral'
    caixa_3.style.textShadow = '1px 1px 1px black'
    caixa_3.style.cursor = 'pointer'
}

function div_switch_return_3() {
    caixa_3.style.backgroundColor = 'cornflowerblue'
    caixa_3.innerHTML = ''
}

function div_switch_4() {
    caixa_4.style.backgroundColor = 'darkorchid'
    caixa_4.innerHTML = 'Call me DIV!'
    caixa_4.style.fontSize = '18px'
    caixa_4.style.textAlign = 'center'
    caixa_4.style.lineHeight = '200px'
    caixa_4.style.color = 'coral'
    caixa_4.style.textShadow = '1px 1px 1px black'
    caixa_4.style.cursor = 'pointer'
}

function div_switch_return_4() {
    caixa_4.style.backgroundColor = 'darkorchid'
    caixa_4.innerHTML = ''
}

function div_switch_5() {
    caixa_5.style.backgroundColor = 'darkred'
    caixa_5.innerHTML = 'Another round of DIV!'
    caixa_5.style.fontSize = '18px'
    caixa_5.style.textAlign = 'center'
    caixa_5.style.lineHeight = '200px'
    caixa_5.style.color = 'coral'
    caixa_5.style.textShadow = '1px 1px 1px black'
    caixa_5.style.cursor = 'pointer'
}

function div_switch_return_5() {
    caixa_5.style.backgroundColor = 'darkred'
    caixa_5.innerHTML = ''
}

function div_switch_6() {
    caixa_6.style.backgroundColor = 'darkturquoise'
    caixa_6.innerHTML = 'Once again: DIV!'
    caixa_6.style.fontSize = '18px'
    caixa_6.style.textAlign = 'center'
    caixa_6.style.lineHeight = '200px'
    caixa_6.style.color = 'coral'
    caixa_6.style.textShadow = '1px 1px 1px black'
    caixa_6.style.cursor = 'pointer'
}

function div_switch_return_6() {
    caixa_6.style.backgroundColor = 'darkturquoise'
    caixa_6.innerHTML = ''
}

function colour_1() {
    area_1.style.backgroundColor = 'steelblue'
    area_2.style.backgroundColor = 'steelblue'
    area_3.style.backgroundColor = 'steelblue'
    area_4.style.backgroundColor = 'steelblue'
    area_5.style.backgroundColor = 'steelblue'
}

function colour_2() {
    area_1.style.backgroundColor = 'darkslateblue'
    area_2.style.backgroundColor = 'darkslateblue'
    area_3.style.backgroundColor = 'darkslateblue'
    area_4.style.backgroundColor = 'darkslateblue'
    area_5.style.backgroundColor = 'darkslateblue'
}

function pointer_1() {
    button_3.style.cursor = 'pointer'
}

function pointer_2() {
    button_4.style.cursor = 'pointer'
}
