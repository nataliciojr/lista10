window.addEventListener("load", function () {

    document.getElementById("btnLogin").addEventListener("click", validarLogin);
    document.getElementById("user").addEventListener("keypress", function () {

    });
    document.getElementById("pwd").addEventListener("keypress", function () {
        
    });

 
    function validarLogin() {
        var user = document.getElementById("user");
        var pwd = document.getElementById("pwd");

        if (!user.value) {
            alert(`user em branco`);

        }
        else if (!pwd.value) {

            alertWifi(`Senha em branco`);
        }
        else
            processarLogin(user.value, pwd.value);
    }

    function processarLogin(user, pwd) {
        if (typeof (Storage) != "undefined") {
            usuarios = localStorage.getItem("usuarios");
            if (!usuarios) {
               alert(`Usuário inexistente. Tente um usuário diferente!`);

            }
            else {
                var usuarios = JSON.parse(usuarios);
                var achou = false;
                for (i = 0; i < usuarios.length; i++)
                    if (usuarios[i].nome == user && usuarios[i].senha == pwd) {
                        achou = true;
                        break;
                    }
                if (achou) window.open("indexGame.html", "_self");
                else {
                   
                    
                    alert(`Usuário inexistente. Tente um usuário diferente!`);
                }
            }
        }
        else {
          
            alerti(`Problemas no navegador. Não será possível executar o jogo!`);
        }
    }
});