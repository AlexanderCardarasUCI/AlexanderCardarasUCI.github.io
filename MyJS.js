function ReColorClick() {
    var col = document.body.style.backgroundColor;
    if(col == "blue")
        col = "white";
    else
        col = "blue";
    document.body.style.backgroundColor = col;
}


function updateSurvey(file){
    document.body.style.backgroundColor = "red";

    var fh = fopen(file, 3);
    if(fh == -1){
        //alert("file could not be opened");
    }else{
        document.body.style.backgroundColor = "blue";
        fwrite(fh, "0,0"); // Write the string to a file
        fclose(fh); // Close the file
    }

}

function readTextFile(file)
{
    document.body.style.backgroundColor = "gray";

    updateSurvey(file);
    document.body.style.backgroundColor = "green";


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