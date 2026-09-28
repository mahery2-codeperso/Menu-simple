// bouton
const boutonMenu = document.querySelector(".menu");
const bouton1 = document.querySelectorAll(".btn-p");
const bouton2 = document.querySelectorAll(".btn-prm");

// interface
const AffbtnMenu = document.querySelector(".menu-menu");
const MenuPrincipal = document.querySelector(".menu-principal");
const MenuParametre = document.querySelector(".menu-parametre");
const masque = document.querySelector(".masque");
const label = document.querySelector(".label");
const credit = document.querySelector(".credit");
const btnr = document.querySelectorAll(".btn-return"); // à l'avenir à mieux configurer ce bouton

let historique = [AffbtnMenu]; 

// bouton retour ou quitter
btnr.forEach(b => {
    b.addEventListener("pointerdown", () => {
        if (historique.length > 1) {
            historique.pop().classList.add("masque"); // on retire le menu actuel et on le masque
            historique[historique.length-1].classList.remove("masque");
        }
    })
})

// Ici c'est juste pour le bouton Menu
boutonMenu.addEventListener("pointerdown", ()=> {
    AffbtnMenu.classList.add("masque");
    MenuPrincipal.classList.remove("masque");
    historique.push(MenuPrincipal);
})

// Menu principal
bouton1.forEach((b,index) => {

    if (index === 0)
    {
        b.addEventListener("pointerdown", ()=> {
            MenuPrincipal.classList.add("masque");
            label.classList.remove("masque");
            historique.push(label);
            setTimeout(() => {
                label.classList.add("masque");
                MenuPrincipal.classList.remove("masque");
                historique.pop();
            },2000)
        })
    }
    else if (index === 1)
    {
        b.addEventListener("pointerdown", () =>{
            MenuPrincipal.classList.add("masque");
            MenuParametre.classList.remove("masque");
            historique.push(MenuParametre);
        })
    }
    
    else if (index === 2)
    {
        b.addEventListener("pointerdown", ()=> {
            MenuPrincipal.classList.add("masque");
            AffbtnMenu.classList.remove("masque");
            historique = [AffbtnMenu]; // vu qu'on revient à l'état initial alors on reset
        })
    }
})


// Menu paramètre
bouton2.forEach((b,index) => {

    // Pour le bouton affichage
    if (index === 0)
    {
        b.addEventListener("pointerdown", () => {
        MenuParametre.classList.add("masque");
        label.classList.remove("masque");
        historique.push(label);
        setTimeout(() => {
                label.classList.add("masque");
                MenuParametre.classList.remove("masque");
                historique.pop();
            },2000)
            })
    }

    // Pour le bouton audio
    else if (index === 1)
    {
        b.addEventListener("pointerdown", () => {
        MenuParametre.classList.add("masque");
        label.classList.remove("masque");
        historique.push(label);
        setTimeout(() => {
                label.classList.add("masque");
                MenuParametre.classList.remove("masque");
                historique.pop();
            },2000)
            })
    }

    // Pour le bouton configurations/Touches
    else if (index === 2)
    {
        b.addEventListener("pointerdown", () => {
        MenuParametre.classList.add("masque");
        label.classList.remove("masque");
        historique.push(label);
        setTimeout(() => {
                label.classList.add("masque");
                MenuParametre.classList.remove("masque");
                historique.pop();
            },2000)
            })
    }

    // Pour le bouton langue
    else if (index === 3)
    {
        b.addEventListener("pointerdown", () => {
        MenuParametre.classList.add("masque");
        label.classList.remove("masque");
        historique.push(label);
        setTimeout(() => {
                label.classList.add("masque");
                MenuParametre.classList.remove("masque");
                historique.pop();
            },2000)
            })
    }

    // Pour le bouton Crédits
    else if (index === 4)
    {
        b.addEventListener("pointerdown", () => {
        MenuParametre.classList.add("masque");
        credit.classList.remove("masque");
        historique.push(credit);
            })
    }
})

