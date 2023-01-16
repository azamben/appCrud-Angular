import { Component } from '@angular/core';

class Produit{
  nom !: string;
  couleur!: string;
  description!: string 
   prix ?: number// ? pour un attribut optionnal
}
//DECORATION
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appCrud';
  /*
 produit :Produit = {
   nom :'Iphone',
   couleur: 'jaune',
   description :'smartphone 2022'
 }
 */
// liste des produits = tableau
products : Produit [] = [
{nom :'Iphone',
  couleur: 'jaune',
  description :'smartphone 2022'
},
{nom :'Samsung',
couleur: 'vert',
description :'Téléphone 2022'
},
{nom :'Huawei',
couleur: 'blue',
description :'Nouvelle version 2022',
prix : 10
}
];
// INITIALISER PROPRIETE GLOBALE 

objetDetail :Produit = new Produit();
//objetDetail.nom
itemNom : string = '';
itemCouleur : string = '';
itemNDesc : string = '';
erreur :string ='';
//BUTON
btnDisabled !: boolean ;
detailProuduit( item :any){
 //console.log(item ,'item cliqué');
  //PALCER ITEM DANS UNE PROPRIETE GLOBALE
this.objetDetail = item;
//console.log(this.objetDetail, 'objetDetail')

}

//METHODE D AJOUTER UN PRODUIT AU TABLEAU C
onAdd(){
  console.log('button cliqué ');
  let newProduit :Produit = new Produit();
  newProduit.nom = this.itemNom;
  newProduit.couleur = this.itemCouleur;
  newProduit.description = this.itemNDesc;
  console.log(newProduit);
  //AJOUTER newProduit dan sle tableau
  //VERIFICATION AVEC CONDITION 
if(newProduit.nom && newProduit.couleur && newProduit.description){
  
  
// VERIFIER LA LONGEUR DU TABLEAU .length
if(this.products.length >= 5){
  this.btnDisabled= true;
  this.erreur= " Maximun de produits atteint ";
} else{
  this.products.push(newProduit);
  console.log(" succées: le produit est bien ajouter au tableau ");
  this.erreur= '';
  this.itemNom = '';
this.itemCouleur = '';
this.itemNDesc = '';
}

}else{
  console.log(" echec: le produit  ne peut pas  être ajouter au tableau ");

// AFFICHER MESSAGE D'ERREUR A L 'UTILISTEUR
// TEHCNIQUE DE LA BALISE VIDE
this.erreur= "Remplir tous les champs";
}
}
// METHODE SUPRIMER D
onDelete(objetDetail: Produit){
  console.log(objetDetail);
  // SUPRIMER ELEMENT DANS UN TABLEAU
  
  // à partir de l'objet, on récupère son index dans le tableau
  const index = this.products.indexOf(objetDetail);
  console.log(index);
  // TABLEAU .splice(index,1)
 this.products.splice(index,1);
 console.log(this.products);

 //REST objetDetail - vider l'objet 
 this.objetDetail= new Produit();
 // RENDE LE BUTTON ACTIF DE NOUVEAU
 this.btnDisabled= false

}

}// NE RIEN ECRIRE APRES CETTE LIGNE
