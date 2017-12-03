import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Router imports.
import { RouterModule } from '@angular/router';
import { router } from './routes';

// Http imports.
import { HttpModule } from '@angular/http';

// Services imports.
import { ThreadService } from './shared/services/thread.service'

import { AppComponent } from './app.component';
import { ThreadsComponent } from './components/threads/threads.component';


@NgModule({
  declarations: [
    AppComponent,
    ThreadsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(router),
  ],
  providers: [ThreadService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
