function checkform() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name == "" || email == ""){
        alert("form tidak boleh kosong");
    }
    else{
        alert("berhasil login");
    }
}

let nameInput= document.getElementById ("name");