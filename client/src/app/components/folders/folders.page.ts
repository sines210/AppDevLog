import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-folders',
  templateUrl: './folders.page.html',
  styleUrls: ['./folders.page.scss'],
})
export class FoldersPage implements OnInit {

  constructor(private actionSheetController: ActionSheetController, private router: Router) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Security',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Erase wallet from this device',
	cssClass: 'delete-button',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
         this.router.navigate(['folders', 'removeaccount'])
        }
      }, {
        text: 'Update password',
        icon: 'share',
        handler: () => {
         this.router.navigate(['folders', 'updatepass'])
        }
      }, {
        text: 'Recovery phrase',
        icon: 'lock-open-outline',
        handler: () => {
          this.router.navigate(['folders', 'pinrequired']);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
     ]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }


}
