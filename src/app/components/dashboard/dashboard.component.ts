import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from 'src/app/services/api-calls.service';
import { Character, APIResponse } from 'src/app/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public characters: Array<Character> | undefined;
  constructor(private apiCallsService: ApiCallsService) { }

  ngOnInit(): void {
    this.getAllCharacters();
  }

  public getAllCharacters(page?: number, count?: number) {
    this.apiCallsService.getAllCharacters()
      .subscribe((res: APIResponse<Character>) => {
        this.characters = res.results;
        console.log(this.characters)
      })
  }

  public log(thi: any){
    console.log(thi);
  }

}
