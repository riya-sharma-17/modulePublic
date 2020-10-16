import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  constructor() { }
  tittleOFimageGallary='Gallary';
  ActiveImagearray=[
    {'URL1': 'assets/images/krishnaradha.jpg','URL2': 'assets/images/radhakrishna.jpg' }
   ]

  Imagearray=[
    {'imgURL1': 'assets/images/img_1.jpg', 'imgURL2': 'assets/images/img_2.jpg' },
  
    {'imgURL1': 'assets/images/img_3.jpg','imgURL2': 'assets/images/img_4.jpg'  },
    
    {'imgURL1': 'assets/images/img_5.jpg','imgURL2': 'assets/images/img_6.jpg'  },
    
    {'imgURL1': 'assets/images/img_7.jpg','imgURL2': 'assets/images/img_8.jpg' },
    
    {'imgURL1': 'assets/images/img_9.jpg' ,'imgURL2': 'assets/images/img_10.jpg'},
   
      ]

  title = 'Google Map';
  lat = 51.678418;
  lng = 7.809007;

  TnCheading='Terms & Conditions';
   ngOnInit(): void {
   }

}
