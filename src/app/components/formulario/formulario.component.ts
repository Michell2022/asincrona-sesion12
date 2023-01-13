import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  public formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void{

    this.formLogin = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250),
          // emailValidator()
        ]
      ],
      name: ['',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250),

        ]
      ],
      phone: ['',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(9),

        ]
      ],
      asunto: ['',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250),

        ]
      ],
      message: ['',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250),

        ]
      ],
    })
  }
  
  get email() {
    return this.formLogin.get('email')!;
  }

  get name() {
    return this.formLogin.get('name')!;
  }

  get phone() {
    return this.formLogin.get('phone')!;
  }

  get asunto() {
    return this.formLogin.get('asunto')!;
  }

  get message() {
    return this.formLogin.get('message')!;
  }

  public validate(): void {
    if (this.formLogin.invalid) {
      for (const control of Object.keys(this.formLogin.controls)) {
        this.formLogin.controls[control].markAsTouched();
      }
      return;
    }
  }

    // LISTO PARA ENVIAR DATOS COMO OBJETO
    send(): any {
      console.info('DATOS:', this.formLogin.value);
    }

}
