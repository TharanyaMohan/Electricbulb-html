function change(){

    var imag=document.getElementById("bulb");
    if(imag.src.match("on.jpeg"))
    {
        imag.src="off.jpeg";
    }
    else{
        imag.src="on.jpeg";
    }
}
