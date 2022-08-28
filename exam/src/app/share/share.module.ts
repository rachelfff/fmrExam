import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { MaterialModule } from "./material.module";


@NgModule({
  declarations: [ ],
  imports: [
    MaterialModule
  ],
  exports:[MaterialModule],
  providers: [],
  bootstrap: []
})
export class ShareModule { }
