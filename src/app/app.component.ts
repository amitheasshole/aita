import { Component, OnInit } from '@angular/core';
import { PullpostService } from './core/pullpost/pullpost.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'aita';
  post: any = {
    "Title": "Post loading...",
    "Body": "Please wait, post loading..."
  };

  verdict: Boolean = false;
  loaded: Boolean = false;
  vote: string = "";
  postVerdict: string = "";
  attempts: number = 1;

  constructor( private ppService: PullpostService) {
   }

  ngOnInit(): void {

    this.ppService.pull().subscribe((pulled) => {
      this.post = pulled;
      this.postVerdict = this.post.Verdict;
      this.loaded = true;

    }, (err) => {
      this.post = {
        "Title": "Failed to Load",
        "Body": "Post failed to load. Please try again."
      }
      this.loaded = true;
      console.log(err);
    });
  }

  castVote = (vote) => {
    this.vote = vote;
    this.verdict = true;
  }

  newPost = () => {
    this.loaded = false;
    this.post = {
      "Title": "Post loading...",
      "Body": "Please wait, post loading..."
    };
    this.postVerdict = "";
    this.vote = "";
    this.verdict = false;

    this.ppService.pull().subscribe((pulled) => {
      this.post = JSON.parse(pulled).Items[0];
      this.postVerdict = this.post.Verdict
      this.loaded = true;

    }, (err) => {
      this.post = {
        "Title": "Failed to Load",
        "Body": "Post failed to load. Please try again."
      }
      this.loaded = true;
      console.log(err);
    });
  }
}
