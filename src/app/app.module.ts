import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './Components/app-header/app-header.component';
import { AppNavigationComponent } from './Components/app-navigation/app-navigation.component';
import { AppBodyComponent } from './Components/app-body/app-body.component';
import { AppBodyListComponent } from './Components/app-body-list/app-body-list.component';
import { AppBodyDetailComponent } from './Components/app-body-detail/app-body-detail.component';
import { AppBodyFormComponent } from './Components/app-body-form/app-body-form.component';
import { AppBodyAsideComponent } from './Components/app-body-aside/app-body-aside.component';
import { AppFooterComponent } from './Components/app-footer/app-footer.component';

import { CoursesService } from './services/courses.service';
import { CoursesStubService } from './services/coursesStub.service';

@NgModule({
  declarations: [
    AppComponent,
      AppHeaderComponent,
      AppNavigationComponent,
      AppBodyComponent,
        AppBodyListComponent,
        AppBodyDetailComponent,
        AppBodyFormComponent,
        AppBodyAsideComponent,
      AppFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    CoursesStubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 



}
