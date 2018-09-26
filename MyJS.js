function ReColorClick() {
    var col = document.body.style.backgroundColor;
    if(col == "blue")
        col = "white";
    else
        col = "blue";
    document.body.style.backgroundColor = col;
}
function readTextFile(file)
{
    document.body.style.backgroundColor = "red";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}