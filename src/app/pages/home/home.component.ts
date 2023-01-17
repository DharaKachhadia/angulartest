import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  public getData: any;
  public displayColumns: string[] = [
    'title',
    'website',
    'submission_address',
    'details',
  ];
  public dataSource: any = [];
  public limitData: any = [
    { limit: 5 },
    { limit: 10 },
    { limit: 15 },
    { limit: 20 },
    { limit: 50 },
  ];

  counter: number = 0;
  limit: number = 10;
  isLoading: boolean = true;
  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.getMethod(this.counter, this.limit);
  }

  public getMethod(offset: number, limit: number) {
    this.isLoading = true;
    this.http
      .get(
        `https://api.foia.gov/api/agency_components?filter%5Bstatus%5D=1\u0026page%5Boffset%5D=${offset}\u0026page%5Blimit%5D=${limit}&fields[agency_component]=title,abbreviation,website,submission_address&api_key=QWAVKOCTHg4QuCD38A7hwDCq3p2OakcSfdbpQyIW`
      )
      .subscribe((data: any) => {
        this.getData = data.data;
        this.isLoading = false;
      });
  }

  next() {
    this.counter = this.counter + this.limit;
    this.getMethod(this.counter, this.limit);
  }
  prev() {
    this.counter = this.counter - this.limit;
    this.getMethod(this.counter, this.limit);
  }
  setLimit(limit: number) {
    this.limit = limit;
    this.getMethod(this.counter, this.limit);
  }
}
