import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AgeValidator } from  './validators/age';
import { UsernameValidator } from  './validators/username';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
  

})
export class ListPage {
  selectedItem: any; 
  icons: string[];
    birthday = new Date(1988, 3, 15); // April 15, 1988
  items: Array<{title: string, note: string, icon: string}>;
  private todo : FormGroup;
    private slideOneForm : FormGroup;

  private slideTwoForm : FormGroup;


  

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('items');
this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });

      this.slideOneForm = this.formBuilder.group({
        firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z 0-9]*'), Validators.required])],
        lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
    });
 
    this.slideTwoForm = this.formBuilder.group({
        username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')]), UsernameValidator.checkUsername],
        privacy: ['', Validators.required],
        bio: ['',AgeValidator.isValid]
    });

  }



  logForm(){
    console.log(this.slideOneForm); 
        console.log(this.slideOneForm.value); 

  }
}
