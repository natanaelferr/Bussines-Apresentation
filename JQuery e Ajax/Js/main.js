function ConsultaCEP(){
    $(".ProgressBar").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json";

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            //$("#logradouro").html(response.logradouro);//duas formas para escrever as mesmas coisas
            //document.getElementById("logradouro").innerHTML = response.logradouro;//segunda forma
            
            $("#Logradouro").html(response.logradouro);
            $("#Complemento").html(response.complemento);
            $("#Bairro").html(response.bairro);
            $("#Localidade").html(response.localidade);
            $("#UF").html(response.uf);
            $("#IBGE").html(response.ibge);
            $("#Gia").html(response.gia);
            $("#DDD").html(response.ddd);
            $("#Siafi").html(response.siafi);
            $(".Cep").show();
        }
    })
}

$(function(){
    $(".Cep").hide();
    $(".ProgressBar").hide();
});
