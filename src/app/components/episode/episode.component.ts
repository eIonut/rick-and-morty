import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from 'src/app/services/api-calls.service';
import { Episode, APIResponse, Character } from 'src/app/models';
import {ActivatedRoute, Router} from '@angular/router';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  public episodes: Episode[] = [];
  public character_ids: [] = [];
  public characterInfo: Character[] = [];
  public id!: number;
  public characterId!: number;
  constructor(private apiCallsService: ApiCallsService,  private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param["id"];
    })

    this.apiCallsService.getOneEpisode(this.id)
      .subscribe((res: any) => {
        this.episodes.push(res);
        this.character_ids = this.convertToArrayOfNum(res.characters);
        this.apiCallsService.getMultipleCharacters(this.character_ids)
        .subscribe((res) => {
          this.characterInfo = res;
        })
      })
  }

  convertToArrayOfNum(arr: any) {
      // let characters = arr.map((item: any) => Number(item.slice(42)));
      let characters = arr.map((item: any) => Number(item.replace(/\D/g, '')));
      return characters;
  }


}
