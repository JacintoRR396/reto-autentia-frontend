import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavigationComponent } from './Components/app-navigation/app-navigation.component';
import { AppSectionListComponent } from './Components/app-section-list/app-section-list.component';
import { AppSectionFAddComponent } from './Components/app-section-fadd/app-section-fadd.component';
import { AppSectionDetailComponent } from './Components/app-section-detail/app-section-detail.component';
import { AppAsideComponent } from './Components/app-aside/app-aside.component';
import { AppFooterComponent } from './Components/app-footer/app-footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { PagCoursesPipe } from './pipes/pag-courses.pipe';
import { PagCoursesTitlePipe } from './pipes/pag-courses-title.pipe';

import { CoursesService } from './services/courses.service';
import { CoursesStubService } from './services/coursesStub.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    AppNavigationComponent,
    AppSectionListComponent,
    AppSectionFAddComponent,
    AppSectionDetailComponent,
    AppAsideComponent,
    AppFooterComponent,
    NotFoundComponent,
    PagCoursesPipe,
    PagCoursesTitlePipe
  ],
  providers: [
    CoursesService,
    CoursesStubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
