import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {NoteComponent} from "./components/note/note.component";
import {HttpClientModule} from "@angular/common/http";
import {NotesListComponent} from "./components/notes-list/notes-list.component";
import {AddNoteFormComponent} from "./components/add-note-form/add-note-form.component";
import {FormsModule} from "@angular/forms";
import {NotesService, NotesServiceInterface} from "./services/notes.service";

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NotesListComponent,
    AddNoteFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: NotesServiceInterface,
      useClass: NotesService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
