import { Component, OnInit } from '@angular/core';
import { ThreadService } from '../../shared/services/thread.service';
import { Thread } from '../../shared/models/thread.model';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {
  threadList : Array<Thread>;

  constructor( private threadService : ThreadService ) {
    this.threadService.getThreads().subscribe( threads => {
      this.threadList = threads;
    })
  }

  ngOnInit() {}

}
