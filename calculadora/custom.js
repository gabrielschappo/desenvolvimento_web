let visor = document.getElementById('visor_num').placeholder
let num = 0
let res = 0
let conta = 0
let calc = 0

function add_item(item){
    add_num = item
    mudar_visor()
}

function zerar(){
    document.getElementById('visor_num').placeholder = '0'
}

function mudar_visor(){
    if (document.getElementById('visor_num').placeholder == '0' || document.getElementById('visor_num').placeholder == 'Erro'){
        document.getElementById('visor_num').placeholder = add_num
    }
    else{
        document.getElementById('visor_num').placeholder += add_num
    }
}

function calcular(){
    try {
        document.getElementById('visor_num').placeholder = eval(document.getElementById('visor_num').placeholder)
    } catch{
        document.getElementById('visor_num').placeholder = 'Erro'
    }
}