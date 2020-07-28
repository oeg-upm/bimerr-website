function showDataModel(domain) {

    var filename = domain + "_dm.json";
    
    var dm_result = document.getElementById("dm-result");

    dm_result.innerHTML = "";

    var buttons = document.getElementById("dm-buttons");
    var hide_button = document.getElementById("hide-dm");
    var download_button = document.getElementById("download-dm");

    hide_button.addEventListener("click", function(){
                                                    dm_result.innerHTML="";
                                                    dm_result.style.display= "none";
                                                    buttons.style.display="none";})

    download_button.setAttribute("href", "data_models/" + filename)
    download_button.setAttribute("download", filename)


    dm_result.setAttribute("style","overflow:auto;height:200px;border:solid black");

    var dm = new XMLHttpRequest();
    dm.overrideMimeType("application/json");
    dm.open("GET", "data_models/" + filename, true);
    dm.onreadystatechange = function () {
        if (this.readyState==4 && this.status=="200"){
            console.log(dm.responseText);
            var response_json = dm.responseText;
            var response_string = JSON.stringify(JSON.parse(response_json), null, 1);
            dm_result.innerHTML = response_string;
            buttons.style.display = "block";
        }
    }
    dm.send();



}