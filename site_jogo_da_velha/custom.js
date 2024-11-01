console.log('JS funcionando!')
let a1 = document.getElementById('a1').textContent
let a2 = document.getElementById('a2').textContent
let a3 = document.getElementById('a3').textContent
let b1 = document.getElementById('b1').textContent
let b2 = document.getElementById('b2').textContent
let b3 = document.getElementById('b3').textContent
let c1 = document.getElementById('c1').textContent
let c2 = document.getElementById('c2').textContent
let c3 = document.getElementById('c3').textContent
let pos = '_'
let rodada = 0

function pos_a1(){
    pos = 'a1'
    verificar()
}

function pos_a2(){
    pos = 'a2'
    verificar()
}

function pos_a3(){
    pos = 'a3'
    verificar()
}

function pos_b1(){
    pos = 'b1'
    verificar()
}

function pos_b2(){
    pos = 'b2'
    verificar()
}

function pos_b3(){
    pos = 'b3'
    verificar()
}

function pos_c1(){
    pos = 'c1'
    verificar()
}

function pos_c2(){
    pos = 'c2'
    verificar()
}

function pos_c3(){
    pos = 'c3'
    verificar()
}

function verificar(){
    if (document.getElementById(pos).textContent == 'X' || document.getElementById(pos).textContent == 'O'){
        document.getElementById('p_player').textContent = 'Posição ja utilizada'
    }
    else{
        marcar()
    }
}

function marcar(){
    if (rodada % 2 == 0){
        simb = 'X'
    }
    else{
        simb = 'O'
    }
    document.getElementById(pos).textContent = simb
    rodada += 1
    if (rodada % 2 == 0){
        simb = 'X'
    }
    else{
        simb = 'O'
    }
    document.getElementById('p_player').textContent = 'Vez do '+simb
    a1 = document.getElementById('a1').textContent
    a2 = document.getElementById('a2').textContent
    a3 = document.getElementById('a3').textContent
    b1 = document.getElementById('b1').textContent
    b2 = document.getElementById('b2').textContent
    b3 = document.getElementById('b3').textContent
    c1 = document.getElementById('c1').textContent
    c2 = document.getElementById('c2').textContent
    c3 = document.getElementById('c3').textContent
    verificar_vitoria()
}

function verificar_vitoria(){
    if ((a1 == a2 && a2 == a3 && a1 !== "_") ||
        (b1 == b2 && b2 == b3 && b1 !== "_") ||
        (c1 == c2 && c2 == c3 && c1 !== "_") ||
        (a1 == b1 && b1 == c1 && a1 !== "_") ||
        (a2 == b2 && b2 == c2 && a2 !== "_") ||
        (a3 == b3 && b3 == c3 && a3 !== "_") ||
        (a1 == b2 && b2 == c3 && a1 !== "_") ||
        (a3 == b2 && b2 == c1 && a3 !== "_")){
        if (simb == 'X')
            document.getElementById('p_player').textContent = 'Vitória do O'
        else{
            document.getElementById('p_player').textContent = 'Vitória do X'
        }
        setTimeout(recomecar, 3500)
    }
}

function recomecar(){
    window.location.reload(false)
}