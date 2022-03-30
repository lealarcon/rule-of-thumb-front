import { NgModule } from "@angular/core";
import { CommonModule, LowerCasePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CardVoteComponent } from "./card-vote/card-vote.component";

import { HttpClientModule } from "@angular/common/http";


let listComponents = [
  CardVoteComponent
];

@NgModule({
  imports: [CommonModule, FormsModule, 
    HttpClientModule],
  declarations: [listComponents],
  exports: [listComponents],
})
export class SharedModule {}
