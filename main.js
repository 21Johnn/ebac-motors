$(document).ready(function(){
    $('#carousel-images').slick({autoplay: true});

    $('.menu-hamburguer').click(function(){
       $('nav').slideToggle(); 
    })

    $('#telefone').mask('(00)00000-0000');

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: true
            },
            mensage:{
                required: true
            },

        },
        messages: {
            nome: 'Por Favor, insira um nome válido'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function (e , validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }

    })
})