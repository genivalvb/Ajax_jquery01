function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    if(cep){
        $.ajax({
            url: url,
            type: "GET",
            success: function(response){
                $("#logradouro").html(response.logradouro);
                $("#uf").html(response.uf);
                $("#localidade").html(response.localidade);
                $("#bairro").html(response.bairro);
                $("#titulo_cep").html("CEP: " + response.cep);

                $(".cep").show();
                $(".barra-progresso").hide();
            }
        })
    }
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});



function consultaCep_all(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    $.ajax({
        url: "https://viacep.com.br/ws/09121521/json/",
        type: "GET",
        success: function(response){
            document.getElementById("cep").innerHTML = response.cep;
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("complemento").innerHTML = response.complemento;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            document.getElementById("ibge").innerHTML = response.ibge;
        }
    })
}

function consultaCep_basico(){
    $.ajax({
        url: "https://viacep.com.br/ws/09121521/json/",
        type: "GET",
        success: function(response){
            console.log(response);
        }
    })
}


function consultaCep_logradouro(){
    $.ajax({
        url: "https://viacep.com.br/ws/09121521/json/",
        type: "GET",
        success: function(response){
            console.log(response.logradouro);
        }
    })
}