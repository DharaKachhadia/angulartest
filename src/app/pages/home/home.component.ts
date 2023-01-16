import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public getJsonValue: any;
  public displayColumns: string[] = ['title', 'website', 'submission_address'];
  public dataSource: any = [];
  counter: number = 0;
  isLoading: boolean = true;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getMethod(this.counter);
  }
  public getMethod(offset: number) {
    this.isLoading = true;
    this.http
      .get(
        `https://api.foia.gov/api/agency_components?filter%5Bstatus%5D=1\u0026page%5Boffset%5D=${offset}\u0026page%5Blimit%5D=10&fields[agency_component]=title,abbreviation,website,submission_address&api_key=QWAVKOCTHg4QuCD38A7hwDCq3p2OakcSfdbpQyIW`
      )
      .subscribe((data: any) => {
        console.log(data.data);
        this.getJsonValue = data.data;
        this.dataSource = data.data;
        this.isLoading = false;
      });
  }

  next() {
    this.counter = this.counter + 10;
    this.getMethod(this.counter);
  }
  prev() {
    this.counter = this.counter - 10;
    this.getMethod(this.counter);
  }
}
