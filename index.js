fetch('http://localhost:4232/movies')
    .then(response => response.json())
    .then(json => json.forEach( ele => {
        var li = document.createElement('li');
        var img = document.createElement('img');
        img.src = ele.imgUrl;
        li.appendChild(img);
        var pName = document.createElement('p');
        pName.innerText = "Name: " + ele.name;
        li.appendChild(pName);
        var pInfo = document.createElement('p');
        pInfo.innerText = "Info: " + ele.outlineInfo;
        li.appendChild(pInfo);
        var ul = document.getElementById('container');
        ul.appendChild(li);
    }
    ))

function leftScroll() {
    document.getElementById('container').scrollLeft -= 215;
    var pageScrollLeftValue = document.getElementById('container').scrollLeft;
    if (pageScrollLeftValue == 0) {
        document.getElementById('leftbtn').style.visibility = "hidden";
    } else if (pageScrollLeftValue == 1075) {
        document.getElementById('rightbtn').style.visibility = "hidden";
    } else {
        document.getElementById('leftbtn').style.visibility = "visible";
        document.getElementById('rightbtn').style.visibility = "visible";
    }
}

function rightScroll() {
    document.getElementById('container').scrollLeft += 215;
    var pageScrollLeftValue = document.getElementById('container').scrollLeft;
    if (pageScrollLeftValue == 0) {
        document.getElementById('leftbtn').style.visibility = "hidden";
    } else if (pageScrollLeftValue == 1075) {
        document.getElementById('rightbtn').style.visibility = "hidden";
    } else {
        document.getElementById('leftbtn').style.visibility = "visible";
        document.getElementById('rightbtn').style.visibility = "visible";
    }
}


