import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CourseService } from './service/course.service';
import { CourseListComponent } from './component/course-list/course-list.component';
import { FormsModule } from '@angular/forms';
import { CourseSaveComponent } from './component/course-save/course-save.component';
import { CourseEditComponent } from './component/course-edit/course-edit.component';
import { CourseDeleteComponent } from './component/course-delete/course-delete.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { StudentService } from './service/student.service';
import { StudentSaveComponent } from './component/student-save/student-save.component';
import { StudentEditComponent } from './component/student-edit/student-edit.component';
import { StudentDeleteComponent } from './component/student-delete/student-delete.component';
import { InstructorListComponent } from './component/instructor-list/instructor-list.component';
import { InstructorService } from './service/instructor.service';
import { InstructorSaveComponent } from './component/instructor-save/instructor-save.component';
import { InstructorEditComponent } from './component/instructor-edit/instructor-edit.component';
import { InstructorDeleteComponent } from './component/instructor-delete/instructor-delete.component';
import { DepartamentListComponent } from './component/departament-list/departament-list.component';
import { DepartamentService } from './service/departament.service';
import { DepartamentSaveComponent } from './component/departament-save/departament-save.component';
import { DepartamentEditComponent } from './component/departament-edit/departament-edit.component';
import { DepartamentDeleteComponent } from './component/departament-delete/departament-delete.component';
 


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseSaveComponent,
    CourseEditComponent,
    CourseDeleteComponent,
    StudentListComponent,
    StudentSaveComponent,
    StudentEditComponent,
    StudentDeleteComponent,
    InstructorListComponent,
    InstructorSaveComponent,
    InstructorEditComponent,
    InstructorDeleteComponent,
    DepartamentListComponent,
    DepartamentSaveComponent,
    DepartamentEditComponent,
    DepartamentDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [
    CourseService,
    StudentService,
    InstructorService,
    DepartamentService     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
