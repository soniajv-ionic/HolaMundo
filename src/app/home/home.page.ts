import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { IonInput, IonItem, IonList } from '@ionic/angular/standalone';
import { IonButton } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonList, IonButton, FormsModule],
})
export class HomePage {
  altura:number | undefined;
  peso:number | undefined;
  imc: string | undefined;
  constructor() {}
  calcularIMC() {
    if (this.altura !== undefined && this.peso !== undefined) {
      this.imc = (this.peso / Math.pow(this.altura, 2)).toFixed(6);
    } else {
    this.imc = "0.0";
    }
  }
}

