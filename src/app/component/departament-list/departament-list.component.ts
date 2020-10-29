import { Component, OnInit, OnDestroy } from '@angular/core';
import { Departament } from 'src/app/domain/departament';
import { DepartamentService } from 'src/app/service/departament.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-departament-list',
  templateUrl: './departament-list.component.html',
  styleUrls: ['./departament-list.component.css']
})
export class DepartamentListComponent implements OnInit, OnDestroy {
 

  public departaments: Departament[];
  public subDepartaments: Subscription;

  constructor(public departamentService: DepartamentService) { }
  ngOnDestroy(): void {
    this.subDepartaments.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.subDepartaments = this.departamentService.getAll().subscribe(data =>{
       this.departaments = data;
    })

  }

}
