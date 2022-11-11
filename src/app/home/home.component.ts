import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DataService} from "../data.service";
import {question} from "../question_model";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  questions:question[] = [];

  form!: FormGroup;

  constructor(private data: DataService) {
  }

  ngOnInit(): void {
    this.questions = this.data.getData();
    this.buildForm(this.questions);
  }

  buildForm(questions: question[]) {

    const controls = questions.reduce((previous, current) => ({
      ...previous,
      [current.id]: new FormControl('', [])
    }), {});

    this.form = new FormGroup(controls);
    // const control = new FormControl('', [Validators.required])
  }

  printData() {
    console.log(this.form.value);
  }

}
