import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Departament } from 'src/app/domain/departament';
import { DepartamentService } from 'src/app/service/departament.service';

@Component({
  selector: 'app-departament-edit',
  templateUrl: './departament-edit.component.html',
  styleUrls: ['./departament-edit.component.css']
})
export class DepartamentEditComponent implements OnInit {

  public id: number;
  public departament: Departament;

  public showMsg: boolean = false;
  public msg: string;
  public type: string;

  constructor(public departamentService: DepartamentService,
    private router: Router,
    private activatedRourte: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }

  public getById() {
    let param = this.activatedRourte.params['_value']
    this.id = param.id;

    this.departamentService.getById(this.id).subscribe(data => {
      this.departament = data;
    });
  }

  public edit() {
    
    console.log(this.departament);

    this.departamentService.edit(this.departament).subscribe(data => {
      this.router.navigate(['/departament-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }

}


