import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ApiCallsService } from 'src/app/services/api-calls.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private router: Router,
    private apiCalls: ApiCallsService,
    ) { }

  ngOnInit(): void {
  }

  onSubmit(form: any){
        this.router.navigate(['search', form.value.search]);
        this.apiCalls.setInput(form.value.search);
  }

}
