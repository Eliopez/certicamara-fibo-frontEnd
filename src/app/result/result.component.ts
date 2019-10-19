import { Component, OnInit } from '@angular/core';
import { FormGroup , Validators , FormBuilder} from '@angular/forms';
import { ResultService } from '../result/result.service';
import { Request } from '../result/request';
import swal from 'sweetalert2';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  resultForm : FormGroup;
  request : Request = new Request();
  answer : String = new String();
  input : number;

  constructor(private _resultService: ResultService, private fb: FormBuilder) {
    this.createForm();
    }
    createForm() {
    this.resultForm = this.fb.group({
    number: ['', Validators.required ]
    });
    }

    ngOnInit() {} 

    onSubmit() {
    this.request.number = this.input;
    this._resultService.register(this.request)
    .subscribe(
     (response) => {
        console.log('Respuesta' + response.result)
        swal.fire('Secuencia path solved', `${response.result}`, 'success');
    },
      error => swal.fire({ type: 'error',
      title: 'Error Obteniendo la Secuenciua',
      text: 'El numero no puede estar Vacio' })

      );

  }

}
