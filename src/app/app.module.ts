import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { VithoriaHomeComponent } from './vithoria-home/vithoria-home.component';
import { VithoriaTarefasComponent } from './vithoria-tarefas/vithoria-tarefas.component';
import { VithoriaTasksServiceService } from './vithoria-tasks-service.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'vithoria-home', component: VithoriaHomeComponent },
      { path: 'vithoria-tarefas', component: VithoriaTarefasComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    VithoriaHomeComponent,
    VithoriaTarefasComponent,
  ],
  providers: [VithoriaTasksServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
