import { Component } from '@angular/core';
import {LoadingController, NavController, ToastController} from 'ionic-angular';
import { DetailsPage } from "../details/details";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categories: any;
  detailPage: any;
  params: Object;

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController) {

    // toast controller
    let toast = this.toastCtrl.create({
      message: 'Welcome!! Choose your mood 😎😎',
      duration: 2000,
      position: 'top'
    });

    window.setTimeout(() => {
      toast.present();
      }, 500);

    this.detailPage  = DetailsPage;
    this.params =  {categoryId: 'blank', categoryValue: 'Details Page'};

    this.categories = [
      {
        Id: 'movie',
        value: 'Watch Movies 👀'
      },
      {
        Id: 'places',
        value: 'Explore places 🌄'
      },
      {
        Id: 'food',
        value: 'Cook something yummy 😋😋'
      }
    ];
  }

  // Loading controller
  loader(categoryId, categoryValue){
    this.loadingCtrl.create({
      content: 'Please wait',
      duration: 1000
    }).present();
    setTimeout(() => {
      this.selectedCategory(categoryId, categoryValue);
    },1100);
  }

  // sending parameters onto next page
  selectedCategory(categoryId, categoryValue){
      this.navCtrl.push(DetailsPage,{
        categoryId: categoryId,
        categoryValue: categoryValue
      });
  }

}
