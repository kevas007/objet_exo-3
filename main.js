
let sergio ={
    nom : "sergio",
    panier2 :["maïs", "riz", "huile","tomate","tartte"],
}
sergio;

let francois ={
    nom: "Francois",
    panier1 :["huile","tomate","pain"],
    add(){
        this.panier1.push(sergio.panier2.pop(), sergio.panier2.pop());
        console.log(this.panier1);
    }
}
francois.add();
console.log(sergio.panier2);
console.log(francois.panier1);