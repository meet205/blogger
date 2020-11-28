import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  onSubmit(data): void {
    console.log(data);
  }

}


// import { Component, OnInit } from '@angular/core';
// import {FormGroup, FormControl} from '@angular/forms';
// import { RestoService } from '../resto.service';



// @Component({
//   selector: 'app-add-resto',
//   templateUrl: './add-resto.component.html',
//   styleUrls: ['./add-resto.component.css']
// })
// export class AddRestoComponent implements OnInit {

//   addresto= new FormGroup({
//   name: new FormControl(''),
//   address: new FormControl('')
// });
// constructor(private resto:RestoService) { }
// alert:boolean=false;
//  ngOnInit(): void {

//   }
//   onClick() {

//     this.resto.saveData(this.addresto.value).subscribe((result)=>{
//       this.alert=true
//     })
//     this.addresto.reset({})
//   }
// restoAlert() {
//   this.alert=false
// }
// }

