import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @ViewChild('txtTagInput')

  public tagInput!:ElementRef<HTMLInputElement>

  constructor(private gifsService:GifsService) { }

  get tags():string[]{
    return this.gifsService.tagsHistory
  }

  searchTag( tag: string ):void {
    this.gifsService.searchTag( tag );
  }
}


