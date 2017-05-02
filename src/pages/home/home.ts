import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment/moment';
import * as _ from 'underscore/underscore';



@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})


export class HomePage {
    public journeyType: string = "Single Way";
    public today: string = moment().format('YYYY-MM-DD');
    public minDate = this.today;
    public maxDate: any;
    public maxPrice: number = 25000;
    public minPrice: number = 1000;
    public selectedPrice: number = 0;
    public steps = 400;
    public autoComplete: any;
    public singleways: any;
    private searchFormOneWay: FormGroup;
    private searchFormTwoWay: FormGroup;
    public singlewaydata: any;
    public returnwaydata: any;
    public dataTravelInfo: any;
    public dataInfo: any;
    public dataSearchInfo: any;
    isSingleWay: boolean = false;
    isTwoWay: boolean = false;
    isPriceBySearch: boolean=false;


    constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {

        // Api Response data , This will come on user hit the request by clicking search button


        this.dataTravelInfo = [{ "originCity": "Mumbai", "at": "20:35", "destinationCity": "Pune", "dt": "18:35", "yan": "Indigo", "startDate": "2017-04-30", "Price": 23232 },
            { "originCity": "Pune", "at": "23:25", "destinationCity": "Mumbai", "dt": "21:20", "yan": "Vistara", "startDate": "2017-04-30", "Price": 4434 },
            { "originCity": "Mumbai", "at": "20:10", "destinationCity": "Nah", "dt": "18:00", "yan": "Air India", "startDate": "2017-04-30", "Price": 6434 },
            { "originCity": "Mumbai", "at": "00:50", "destinationCity": "Pune", "dt": "22:45", "yan": "Jet Airways", "startDate": "2017-04-30", "Price": 5434 }
        ];

        this.searchFormOneWay = this.formBuilder.group({
            originCity: ['Mumbai', Validators.compose([Validators.maxLength(100), Validators.pattern('[a-zA-Z 0-9]*'), Validators.required])],
            destinationCity: ['Pune', Validators.compose([Validators.maxLength(100), Validators.pattern('[a-zA-Z 0-9 ]*'), Validators.required])],
            startDate: ['2017-04-30', Validators.compose([Validators.required])],
            numberOfPassengers: ['2', Validators.compose([Validators.required])],
        });

        this.searchFormTwoWay = this.formBuilder.group({
            originCity: ['Mumbai', Validators.compose([Validators.maxLength(100), Validators.pattern('[a-zA-Z 0-9]*'), Validators.required])],
            destinationCity: ['Pune', Validators.compose([Validators.maxLength(100), Validators.pattern('[a-zA-Z 0-9 ]*'), Validators.required])],
            startDate: ['2017-04-30', Validators.compose([Validators.required])],
            returnDate: ['2017-04-30', Validators.compose([Validators.required])],
            numberOfPassengers: ['4', Validators.compose([Validators.required])],
        });

    }


    // This Will filter data by Price

    getDataByPrice($event, price) {

        this.dataSearchInfo = _.find(this.dataTravelInfo, function (v) { return (v.Price > price) });
    }
    // This function will search the data fromm server response 

    searchData() {
        if (this.isPriceBySearch) {

            this.dataInfo = this.dataSearchInfo;
        } else {
            this.dataInfo = this.dataTravelInfo;

        }

        this.isPriceBySearch = false;

        if (this.journeyType == "Return Way") {
            this.isTwoWay = true;
            this.isSingleWay = true;

            this.singlewaydata = _.where(this.dataInfo, {
                "originCity": this.searchFormTwoWay.value.originCity,
                "destinationCity": this.searchFormTwoWay.value.destinationCity,
                "startDate": this.searchFormTwoWay.value.startDate
            });

            this.returnwaydata = _.where(this.dataInfo, {
                "originCity": this.searchFormTwoWay.value.destinationCity,
                "destinationCity": this.searchFormTwoWay.value.originCity,
                "startDate": this.searchFormTwoWay.value.startDate
            });


        } else {
            this.isSingleWay = true;
            this.isTwoWay = false;
            this.singlewaydata = _.where(this.dataInfo, {
                "originCity": this.searchFormOneWay.value.originCity,
                "destinationCity": this.searchFormOneWay.value.destinationCity,
                "startDate": this.searchFormOneWay.value.startDate
            });

        }


    }

}
