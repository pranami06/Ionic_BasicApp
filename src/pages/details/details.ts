import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  categoryID: any;
  categoryValue: any;
  movieList: any[];
  foodList: any[];
  placeList: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  // Function to load data on page based on coming parameters from home page
  loadCategoryData () {

    // collecting parameters passed from previous page
    this.categoryID = this.navParams.get('categoryId');
    this.categoryValue = this.navParams.get('categoryValue');

    // FoodList
    this.foodList = [
      {
        foodName: 'Pizza',
        foodImgPath: 'assets/imgs/food/pizza.png'
      },
      {
        foodName: 'Noodles',
        foodImgPath: 'assets/imgs/food/noodle.png'
      },
      {
        foodName: 'Sandwich',
        foodImgPath: 'assets/imgs/food/sandwich.png'
      },
      {
        foodName: 'Pasta',
        foodImgPath: 'assets/imgs/food/pasta.png'
      }
    ];

    // Movie List
    this.movieList = [
      {
        movieImgPath: 'assets/imgs/movie/coco.png'
      },
      {
        movieImgPath: 'assets/imgs/movie/justiceLeague.png'
      },
      {
        movieImgPath: 'assets/imgs/movie/blackPanther.png'
      },
      {
        movieImgPath: 'assets/imgs/movie/stardust.png'
      },
      {
        movieImgPath: 'assets/imgs/movie/theJungleBook.png'
      }
    ];

    // Places List
    this.placeList = [
      {
        placeName: 'New York',
        placeImgPath: 'assets/imgs/places/newYork.png'
      },
      {
        placeName: 'Switzerland',
        placeImgPath: 'assets/imgs/places/switzerland.jpg'
      },
      {
        placeName: 'Paris',
        placeImgPath: 'assets/imgs/places/paris.jpg'
      },
      {
        placeName: 'Venice',
        placeImgPath: 'assets/imgs/places/venice.png'
      },
      {
        placeName: 'Australia',
        placeImgPath: 'assets/imgs/places/australia.png'
      }
    ];
  }

  // set time interval to load data
  ionViewDidLoad() {
    setTimeout(() => {
      this.loadCategoryData()
    },1200);

  }

}
