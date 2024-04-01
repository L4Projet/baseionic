import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private actionSheetCtrl: ActionSheetController, 
    private alerteSheetCtrl: AlertController,
    public router : Router
    ) {}
  public actionSheetButtons = [
    {
      text: 'Supprimer',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Partager',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Annuler',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
async alerte(){
  const alerte = await this.alerteSheetCtrl.create({
    header: "Message d'alerte",
    message:"A message should be a short, complete sentence.",
    buttons: ["Yes", "No"],
  })
  return alerte.present();
}
async open(){
  const actionsheet= await this.actionSheetCtrl.create({
    header: 'Confirmation de suppression',
    buttons:[
      {
        text: 'Supprimer',
        role: 'destructive',
        data: {
          action: 'delete',
        },
      },
      {
        text: 'Partager',
        data: {
          action: 'share',
        },
      },
      {
        text: 'Annuler',
        role: 'cancel',
        data: {
          action: 'cancel',
        },
      },
    ]

  });
  return await actionsheet.present()
}
alertButtons = ['Ok', 'Cancel'];

accueil(){
  this.router.navigate(['accueil'])
}
}
