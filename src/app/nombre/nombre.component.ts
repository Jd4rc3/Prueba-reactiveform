import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.scss']
})
export class NombreComponent implements OnInit {
  @Input()
  parentForm!: FormGroup;

  @Input()
  controlName: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
