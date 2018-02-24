import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { DatabindingExampleComponent } from './databinding-example/databinding-example.component';
import { BuiltinDirectivesComponent } from './builtin-directives/builtin-directives.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponentComponent } from './game-control/odd-component/odd-component.component';
import { EvenComponentComponent } from './game-control/even-component/even-component.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DatabindingExampleComponent,
    BuiltinDirectivesComponent,
    GameControlComponent,
    OddComponentComponent,
    EvenComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
