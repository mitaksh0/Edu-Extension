var elementsLen = document.getElementById("main").getElementsByTagName("section").length;
for(m=3;m<elementsLen;m++){
    var a = document.getElementById("main").getElementsByTagName("section")[m].getElementsByTagName("div")[1].getElementsByTagName("div")[0].getElementsByTagName("div")[0].getElementsByTagName("div")[0].getElementsByTagName("h2")[0].getElementsByTagName("span")[0].innerHTML;
    a = a.replace(/<|>|!|-/g,"")
    if(a=="Education"){
        var eduLen = document.getElementsByTagName("section")[m].getElementsByClassName("pvs-list__outer-container")[0].getElementsByTagName("ul")[0].getElementsByTagName("li").length;
        var newObj = [];
        for(i=0;i<eduLen;i++){
        var eduPlace = document.getElementsByTagName("section")[m].getElementsByClassName("pvs-list__outer-container")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[i].getElementsByClassName("pvs-entity")[0].getElementsByClassName("flex-column")[0].getElementsByClassName("flex-row")[0].getElementsByTagName("a")[0].getElementsByTagName("div")[0].getElementsByTagName("span")[0].getElementsByTagName("span")[0].innerHTML;
        var eduPlace = eduPlace.replace(/<|!|>|-/g,'');
        var liLen = document.getElementsByTagName("section")[m].getElementsByClassName("pvs-list__outer-container")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[i].getElementsByClassName("pvs-entity")[0].getElementsByClassName("flex-column")[0].getElementsByClassName("flex-row")[0].getElementsByTagName("a")[0].getElementsByClassName("t-14").length;
        var eduDegree,eduYear;
        var details = [];
        for(j=0;j<liLen;j++){
            var temp = document.getElementsByTagName("section")[m].getElementsByClassName("pvs-list__outer-container")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[i].getElementsByClassName("pvs-entity")[0].getElementsByClassName("flex-column")[0].getElementsByClassName("flex-row")[0].getElementsByTagName("a")[0].getElementsByClassName("t-14")[j].getElementsByTagName("span")[0].innerHTML;
            temp = temp.replace(/<|!|>|-/g,'');
            details.push(temp);

        }
        if(liLen == 2){
            newObj.push({"name": eduPlace, "degree": details[0], "year": details[1]});
        } else {
            newObj.push({"name": eduPlace, "year": details[0]});
        }
    details = [];
    }


    console.log("Education")
    for(j=0;j<newObj.length;j++){
        var objKeys = Object.values(newObj[j]);
        objKeys.forEach(e=>{
        console.log(e);
        })
    }
    }
}


