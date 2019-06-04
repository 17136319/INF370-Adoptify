import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cdk-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {

  public showLoader:boolean = false;
  public sales = [
      {
        companyIcon:'https://www.bugsplat.com/images/icons/angular_icon_blue.png',
        companyName:'Codetok',
        star:'20',
        fork: false,
        watch: false,
      },
      {
        companyIcon:'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjIyOOv88fiAhWNzIUKHWrGCY4QjRx6BAgBEAU&url=https%3A%2F%2Fwww.facebook.com%2Fshokugeki.fans%2F&psig=AOvVaw05ORc1UAvyThhxupFDWRX7&ust=1559465361246100',
        companyName:'Firebase',
        star:'2k',
        fork: false,
        watch: false,
      },
      {
        companyIcon:'https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_256,w_256,f_jpg/v1481031537/j9c8urpwe7uabwmt2qau.png',
        companyName:'Ionic',
        star:false,
        fork: false,
        watch: 22,
      },
      {
        companyIcon:'https://www.gstatic.com/images/branding/product/2x/app_maker_64dp.png',
        companyName:'google dev',
        star:false,
        watch: false,
        fork: '22',
      }
  ]
  constructor() { }

  ngOnInit() {
  }

  reload() {
      this.showLoader = true;
      setTimeout(() => {
          this.showLoader = false;
      },2000)
  }

}
