import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiCallsService } from 'src/app/services/api-calls.service';
import { Character, APIResponse } from 'src/app/models';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy{
  public characters: Array<Character> | undefined;
  private routeSub: Subscription = new Subscription();
  public isError = false;
  public count = 0;
  public pagesLength = 0;
  public currentPage = 1;
  public inputValue = '';
  public errorMessage = '';
  public pageClick: {nextPageClick: boolean; previousPageClick: boolean} = { nextPageClick: false, previousPageClick: false}
  constructor(
    private apiCallsService: ApiCallsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    // this.inputValue = this.apiCallsService.getInput();
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if(params['character-search']){
        this.getAllCharacters(params['character-search']);
        this.currentPage = 1;
        this.isError = false;
      }
       else{
        this.currentPage = 1;
        this.getAllCharacters();
        this.isError = false;
      }


    })
  }

  ngOnDestroy(): void {
    if(this.routeSub){
      this.routeSub.unsubscribe();
    }
  }

  public getAllCharacters(name?: string, page?: number) {
    // if(!name && !page){
    //   this.apiCallsService.getAllCharacters()
    //   .subscribe((res: APIResponse<Character>) => {
    //     this.count = res.info.count;
    //     this.pagesLength = res.info.pages;
    //     this.characters = res.results;
    //   });\i
    if(!name){

      this.apiCallsService.getAllCharactersByName('', page)
        .subscribe((res: APIResponse<Character>) => {
          this.count = res.info.count;
          this.pagesLength = res.info.pages;
          this.characters = res.results;
        }, (err) => {
          if(err.status === 404){
            this.errorMessage = 'Character not found. Try another name!';
          }
          this.isError = true;
        })
    }
    else {
      this.apiCallsService.getAllCharactersByName(name as string, page)
        .subscribe((res: APIResponse<Character>) => {
          this.count = res.info.count;
          this.pagesLength = res.info.pages;
          this.characters = res.results;
        }, (err) => {
          if(err.status === 404){
            this.errorMessage = 'Character not found. Try another name!';
          }
          this.isError = true;
        })
    }





    // if(!name){
    // this.apiCallsService.getAllCharacters()
    //   .subscribe((res: APIResponse<Character>) => {
    //     console.log(res)
    //     this.count = 0;
    //     this.pagesLength = res.info.pages;
    //     this.characters = res.results;

    //   })
    // }
  }

  public goToDetails(id: any){
    this.router.navigate(['character', id]);
  }

  public nextPage(){
    this.inputValue = this.apiCallsService.getInput();
    this.currentPage ++;
    this.pageClick.nextPageClick = true;
    this.getAllCharacters(this.inputValue ,this.currentPage);
    this.isError = false;

    setTimeout(() => {
      this.pageClick.nextPageClick = false;
    }, 250);
  }

  public previousPage(){
    this.inputValue = this.apiCallsService.getInput();
    this.currentPage --;
    this.pageClick.previousPageClick = true;
    this.getAllCharacters(this.inputValue, this.currentPage);
    this.isError = false;
    setTimeout(() => {
      this.pageClick.previousPageClick = false;
    }, 250);
  }

}
