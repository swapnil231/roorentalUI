import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService, customer } from '../customer.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatpopupComponent } from '../matpopup/matpopup.component';

@Component({
  selector: 'app-tablehome',
  templateUrl: './tablehome.component.html',
  styleUrls: ['./tablehome.component.scss'],
})
export class TablehomeComponent implements OnInit {
  deletecustomer(arg0: any) {
    var result = confirm('Want to delete?');
    if (!result) {
      return;
    }

    this.customer_service.deletechCustomerbyCode(arg0).subscribe({
      next: () => {
        alert('deleted sucessfully');
        this.getAllCustomerDataApi();
      },
      error: () => {
        alert('failed to delete customer');
      },
    });
  }
  filterserch($event: KeyboardEvent) {
    const value = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }
  constructor(
    private customer_service: CustomerService,
    private matdilog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getAllCustomerDataApi();
  }
  allcustomerdata!: customer[];
  dataSource: any;
  columnsToDisplay = [
    'no',
    'name',
    'email',
    'phone',
    'gender',
    'status',
    'action',
  ];
  @ViewChild(MatPaginator) paginater!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  getAllCustomerDataApi() {
    this.customer_service.getAllCustomerData().subscribe({
      next: (res) => {
        this.allcustomerdata = res;
        this.dataSource = new MatTableDataSource<customer>(
          this.allcustomerdata
        );
        this.dataSource.paginator = this.paginater;
        this.dataSource.sort = this.sort;
        console.log(res);
      },
      error: (err) => {
        alert(JSON.stringify(err.error));
      },
    });
  }
  openpopup(id: any, title: any) {
    let matvar = this.matdilog.open(MatpopupComponent, {
      width: '60%',
      data: { title: title, id: id },
    });

    matvar.afterClosed().subscribe(() => {
      this.getAllCustomerDataApi();
    });
  }

  editcustomer(id: any) {
    this.openpopup(id, 'edit customer');
    console.log(id);
  }

  addcustomer() {
    this.openpopup(0, 'add customer');
  }
}
