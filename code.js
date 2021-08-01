function generate(){
    var length = document.getElementById("length").value;
    var result = "";
    var characters = "";
    
    if(document.getElementById("lowercase").checked == true){
        characters += "abcdefghijklmnopqrstuvwxyz"
    }

    if(document.getElementById("uppercase").checked == true){
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    if(document.getElementById("numbers").checked == true){
        characters += "0123456789"
    }

    if(document.getElementById("symbols").checked == true){
        characters += "$%&?*+-!~#.,"
    }

    for(var i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }


    document.getElementById("result").value = result;

    if(!(length > 0)){
        document.getElementById("result").value = "The password must atleast be one character long";
    }
    else if(result == ""){
        document.getElementById("result").value = "Atleast one box must be ticked";
    }

}

function CopyToClipboard(){
    textbox = document.getElementById("result");
    textbox.select();
    textbox.setSelectionRange(0, 99999);
    document.execCommand("copy");
}