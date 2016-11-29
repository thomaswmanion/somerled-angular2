import { Component, OnInit } from '@angular/core';
import { FacebookService } from './facebook.service';
import { Feed } from './models/feed.model';
import { FeedImage } from './models/feed-image.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FacebookService]
})
export class HomeComponent implements OnInit {
  private feed: Feed[];
  constructor(private facebookService: FacebookService) { }

  ngOnInit() {
    this.facebookService.getFeed().then(feed => {
      this.feed = feed;
    });

  }

  columnCount(images: FeedImage[]): number {
    if (images.length < 2) {
      return 2;
    }
    else {
      return Math.min(images.length, 3);
    }
  }

}
