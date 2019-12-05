document.getElementById("subscribe").addEventListener("submit", function(e)
{
    var erreur_multiple = null;
    var erreur = null;
    var pseudo = document.getElementById("pseudo");
    var mdp = document.getElementById("mdp");
    var mdp2 = document.getElementById("mdp2");
    var erreurcaptcha = document.getElementById("erreurcaptcha");


    if (!pseudo.value)
    {
        erreur_multiple++;
        erreur = "Veuillez renseignez un pseudo";
        pseudo.style.border = "2px solid red";
    }

    var regex_pseudo = /[A-Z]{1}[a-z0-9_-]{0,}[a-z0-9]/;
    if (regex_pseudo.test(pseudo.value) == false)
    {
        erreur = "Votre pseudo doit commencer par une lettre<br>Votre pseudo doit contenir entre 6 et 22 caractères<br>Votre pseudo ne doit pas terminer par un caractère spécial";
        pseudo.style.border = "2px solid red";
    }
    if (pseudo.value.length < 6 || pseudo.value.length > 22)
    {
        erreur = "Votre pseudo doit être comprise entre 6 et 22 caractères";
        pseudo.style.border = "2px solid red";
    }

    if (!mdp.value)
    {
        erreur_multiple++;
        erreur = "Veuillez renseignez un mot de passe";
        mdp.style.border = "2px solid red";
    }
    if (!mdp2.value)
    {
        erreur_multiple++;
        erreur = "Veuillez renseignez un mot de passe";
        mdp2.style.border = "2px solid red";
    }
    if (mdp.value != mdp2.value){
        erreur = "Vos mots de passe ne sont pas identique";
        mdp.style.border = "2px solid red";
        mdp2.style.border = "2px solid red";
    }
    if (mdp.value.length < 6 || mdp.value.length > 64)
    {
        erreur = "Votre mot de passe doit être compris entre 6 et 64 caractères";
        mdp.style.border = "2px solid red";
    }
    if (mdp2.value.length < 6 || mdp2.value.length > 64)
    {
        erreur = "Votre mot de passe doit être compris entre 6 et 64 caractères";
        mdp2.style.border = "2px solid red";
    }

    if (pseudo.value == mdp.value)
    {
        erreur = "Votre pseudo et votre mot de passe sont identique !";
        pseudo.style.border = "2px solid red";
        mdp.style.border = "2px solid red";
    }

    if (!captcha.value)
    {
        erreur_multiple++;
        erreur = "Veuillez renseigner un captcha valide";
        captcha.style.border = "2px solid red";
    }
    if (captcha.value.length != 4)
    {
        erreur = "Le captcha doit être composé de 4 chiffres";
        captcha.style.border = "2px solid red";
    }


    if (erreur_multiple >= 2)
    {
        erreur = "Vous avez laisser des champs vides";
    }

    if (erreur)
    {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
    }
});
