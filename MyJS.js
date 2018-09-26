function ReColorClick() {
    var col = document.body.style.backgroundColor;
    if(col == "blue")
        col = "white";
    else
        col = "blue";
    document.body.style.backgroundColor = col;
}