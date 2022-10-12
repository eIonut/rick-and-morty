import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from 'src/app/services/api-calls.service';
import { Character, APIResponse } from 'src/app/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  public character: Character[] = [];
  private id!: number;

  constructor(private apiService: ApiCallsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param["id"];
    })

    this.apiService.getOneCharacter(this.id)
      .subscribe((res) => {
        this.character?.push(res);
        console.log(this.character)
      })
  }

  public getChar() {
  }

}
