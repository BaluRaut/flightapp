import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Autocomplete } from '../../providers/autocomplete';

import * as moment from 'moment/moment';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
        public journeyType: string = "Single Way";
        public today: string = moment().format('YYYY-MM-DD');
        public minDate =this.today;
        public maxDate:any ;
        public maxPrice: number=450000;
        public minPrice:number=5000;
        public selectedPrice:number=0;
        public steps=400;

        private searchFormOneWay : FormGroup; 
        private searchFormTwoWay : FormGroup; 

  constructor(public navCtrl: NavController,private formBuilder: FormBuilder,public Autocomplete: Autocomplete) {

    this.searchFormOneWay = this.formBuilder.group({
        originCity: ['', Validators.compose([Validators.maxLength(100), Validators.pattern('[a-zA-Z 0-9]*'), Validators.required])],
        destinationCity: ['', Validators.compose([Validators.maxLength(100), Validators.pattern('[a-zA-Z 0-9 ]*'), Validators.required])],
        startDate:['',Validators.compose([Validators.required])],
        numberOfPassengers:['',Validators.compose([Validators.required])],
    });

    this.searchFormTwoWay = this.formBuilder.group({
        originCity: ['', Validators.compose([Validators.maxLength(100), Validators.pattern('[a-zA-Z 0-9]*'), Validators.required])],
        destinationCity: ['', Validators.compose([Validators.maxLength(100), Validators.pattern('[a-zA-Z 0-9 ]*'), Validators.required])],
        startDate:['',Validators.compose([Validators.required])],
        returnDate:['',Validators.compose([Validators.required])],
        numberOfPassengers:['',Validators.compose([Validators.required])],
    });
  }

searchData(){


}

  getData(event){
  }
}
