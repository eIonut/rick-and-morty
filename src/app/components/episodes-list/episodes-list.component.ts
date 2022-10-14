import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss']
})
export class EpisodesListComponent implements OnInit {
  @Input() episodeList: [] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goToEpisode(s: any) {
    const id = s.replace(/\D/g, '');
    this.router.navigate(['episode', id]);
  }


}
