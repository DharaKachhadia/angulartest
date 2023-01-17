import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detalisview',
  templateUrl: './detalisview.component.html',
  styleUrls: ['./detalisview.component.css'],
})
export class DetalisviewComponent {
  public CURRENT_WB_NAME = window.location.pathname.split('/agency/')[1];
  public Details: any;
  public agencyDetails: any;
  isLoading: boolean = true;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getDetails();
  }

  public getDetails() {
    this.isLoading = true;
    this.http
      .get(
        `https://api.foia.gov/api/agency_components/${this.CURRENT_WB_NAME}?&api_key=QWAVKOCTHg4QuCD38A7hwDCq3p2OakcSfdbpQyIW`
      )
      .subscribe((data: any) => {
        this.Details = data.data.relationships;
        this.agencyDetails = Object.keys(this.Details);
        console.log(data.data.relationships);
        this.isLoading = false;
      });
  }
}
