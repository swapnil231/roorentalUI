import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { CustomerService, customer } from '../customer.service';
import { valentine } from 'ngx-bootstrap-icons';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-matpopup',
  templateUrl: './matpopup.component.html',
  styleUrls: ['./matpopup.component.scss'],
})
export class MatpopupComponent implements OnInit, AfterViewInit {
  updateuser() {
    if (this.myform.controls.status.value == '') {
      this.myform.controls.status.setValue('inactive');
    }

    this.customer_service
      .patchCustomerbyCode(this.matdilogdata.id, this.myform.value)
      .subscribe({
        next: () => {
          alert('sucessfully updated');
          this.ref.close();
        },
        error: () => {
          alert('failed updated');
        },
      });
  }
  formbuilvalue = '';
  getchekboxvalue($event?: any) {
    console.log(this.formbuider);
    if (this.formbuilvalue === '') {
      this.formbuilvalue = 'active';
      this.myform.controls.status.setValue('active');
      console.log('kkkkkkkkk');
      console.log(this.formbuilvalue);
    } else {
      this.formbuilvalue = '';
      console.log('jjjjjjjj');
    }
  }
  constructor(
    private matdilog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<MatpopupComponent>,
    private formbuider: FormBuilder,
    private customer_service: CustomerService,
    private changref: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    // this.getchekboxvalue(this.value.checked);
    // this.changref.detectChanges();
  }

  matdilogdata: any;
  checkboxvalue: any;

  ngOnInit(): void {
    this.matdilogdata = this.data;

    if (this.matdilogdata.title == 'edit customer') {
      this.setpopupdata(this.matdilogdata.id);
    }
    console.log(this.matdilogdata.id);
    console.log(this.data);
  }

  closepopup() {
    this.ref.close('close from function');
  }

  editabledata: any;

  setpopupdata(id: any) {
    this.customer_service.getCustomerbyCode(id).subscribe({
      next: (res: any) => {
        if (res) {
          console.log(res, 'getuserbycode');
          this.editabledata = res;

          if (this.editabledata.status == 'active') {
            this.formbuilvalue = 'active';
          }

          // this.ref.close();
          this.myform.setValue({
            name: this.editabledata.name,
            email: this.editabledata.email,
            phone: this.editabledata.phone,
            // status: this.editabledata.status,
            status: `${
              this.editabledata.status === 'active'
                ? this.editabledata.status
                : ''
            }`,
            gender: this.editabledata.gender,
          });
        }
      },
      error: (err) => {
        alert(JSON.stringify(err.error));
        console.log(err);
      },
    });
  }

  /* The `myform` variable is an instance of the `FormGroup` class created using the `formbuider`
 object. It represents a form group that contains form controls for the fields `name`, `email`,
 `phone`, and `status`. */
  myform = this.formbuider.group({
    name: this.formbuider.control('', Validators.required),
    email: this.formbuider.control('', [Validators.required, Validators.email]),
    phone: this.formbuider.control('', Validators.required),
    status: this.formbuider.control({
      value: `${this.formbuilvalue}`,
      disabled: false,
    }),
    gender: this.formbuider.control('', Validators.required),
  });

  /**
   * The function returns an error message based on the validation status of an email input field.
   * @returns The function `getErrorMessage()` returns an error message based on the validation status
   * of the email field in a form. If the email field is required and no value is entered, it returns
   * the message "You must enter a value". If the email field has an invalid email format, it returns
   * the message "Not a valid email". Otherwise, it returns an empty string.
   */
  getErrorMessage() {
    if (this.myform.controls.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.myform.controls.email.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  /**
   * The `saveuser()` function alerts the JSON representation of a form value, saves the customer using a
   * service, and handles the response and error.
   */

  saveuser() {
    alert(JSON.stringify(this.myform.value));
    if (this.formbuilvalue === '') {
      this.myform.controls.status.setValue('in-active');
    }

    this.customer_service.saveCustomer(this.myform.value).subscribe({
      next: (res) => {
        if (res) {
          console.log(res);

          this.closepopup();
        }
      },
      error: (err) => {
        alert('oops wrondg not add customer');
        console.log(err);
      },
    });
  }
}
