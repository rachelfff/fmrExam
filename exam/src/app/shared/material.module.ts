import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  imports:[MatToolbarModule,ScrollingModule,MatIconModule],
  exports: [MatToolbarModule,ScrollingModule,MatIconModule],

})
export class MaterialModule {}