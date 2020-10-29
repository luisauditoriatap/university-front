import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departament } from 'src/app/domain/departament';
import { DepartamentService } from 'src/app/service/departament.service';

@Component({
  selector: 'app-departament-save',
  templateUrl: './departament-save.component.html',
  styleUrls: ['./departament-save.component.css']
})
export class DepartamentSaveComponent implements OnInit {

  public departament: Departament;

  public showMsg: boolean = false;
  public msg: string;
  public type: string;

  constructor(public departamentService: DepartamentService,
    private router: Router) { }

  ngOnInit(): void {
    this.departament = new Departament(0, '', 0, new Date());
  }

  public save() {

    console.log(this.departament);

    this.departamentService.save(this.departament).subscribe(data => {
      this.router.navigate(['/departament-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }

}
