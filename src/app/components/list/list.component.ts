import { Component, OnInit } from '@angular/core';

import { ListItemService } from '../../shared/list-item.service';

import { SpacePhoto } from '../../models/SpacePhoto';

interface Rover {
  name: string;
}

interface Camera {
  name: string;
}

interface Sol {
  name: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  rovers: Rover[] = [{ name: 'Curiosity' }, { name: 'Opportunity' }, { name: 'Spirit'}];
  cameras: Camera[] = [{ name: 'Front' }, { name: 'Rear' }];
  sols: Sol[] = [{name: 'Mars day'}];

  optionsSelected: boolean = false;

  allSpaceCards: SpacePhoto[];
  spaceCards: SpacePhoto[];
  
  numberOfCards: number = 10;

  constructor(
    public server: ListItemService
  ) { }

  ngOnInit(): void {
    
  }

  getThePictures() {
    this.server.getPictures().subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.allSpaceCards = data.photos;
        this.spaceCards = this.allSpaceCards.filter((item, idx) => idx < this.numberOfCards);
      }
    }, error => {
      console.error('Error!');
    });
  }

  getMorePictures() {
    this.numberOfCards += 5;
    console.log(this.numberOfCards);
    this.spaceCards = this.allSpaceCards.filter((item, idx) => idx < this.numberOfCards);
  }

  identify(index) {
    return index;
  }

}
