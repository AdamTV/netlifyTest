import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";


export class Driver{
    name: string; 
    description: string; 
    ownedTransportation: string[]; 
    favouriteTransportation: string; 
    driverLicence: boolean; 
    vehicleUse: string; 
}

export class Option{
  value: string;
  text: string;
}

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor() { }
 
  // the data that will be used in the form
  driverData: Driver;

  // Define the preset list of "transportation" options
  transportationList: Option[] = [
    {value: "C", text: "Car"},
    {value: "B", text: "Bus"},
    {value: "M", text: "Motorcycle"},
    {value: "H", text: "Helicopter"}
  ];

  ngOnInit() {

    // Populate the "driverData" with some static data (this would normally come from a data service)
    this.driverData = {
      name: "Richard Hammond test",
      description: "Richard is a motor vehicle enthusiast",
      ownedTransportation: ["C", "M"], 
      favouriteTransportation: "M",
      driverLicence: true, 
      vehicleUse: "pleasure"
    };
    
  }

  onSubmit(f: NgForm): void { 

    // output the form information to the console
    console.log(f);

  }

}