$(document).ready(function (args) {

    const urlParam = new URLSearchParams(window.location.search);
    const name = urlParam.get('name');

    /* $.post("./php/MetacriticsCaller.php", {name: name}); */

    $.ajax({
        type: "get",
        url: "./php/MetacriticsCaller.php",
        data: {
            gamename:name
        },
        dataType: "json",
        error: function(data, textStatus, xhr){
            $("#meta-tittle").hide();
            console.log(data.status);
        },
        success: function (data) {
            $("#meta").append(data.metascritic_score);
            $("#user").append(data.users_score);
        }
    }); 

    
});