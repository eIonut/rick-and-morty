import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from 'src/app/services/api-calls.service';
import { Character } from 'src/app/models';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  public character: Character[] = [];
  private id!: number;
  public episodeList: [] = [];

  constructor(private apiService: ApiCallsService,
    private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param["id"];
    })

    this.apiService.getOneCharacter(this.id)
      .subscribe((res) => {
        this.character?.push(res);
        this.episodeList = res.episode;
      })
  }


  goToEpisode(s: any) {
    const id = s.replace(/\D/g, '');
    this.router.navigate(['episode', id]);
  }


}
