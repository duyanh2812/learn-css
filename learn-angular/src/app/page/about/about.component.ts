import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/api/products/product.service';
import { ProductResponse } from '../../services/api/models/product-reponse';
import { ProductRequest } from '../../services/api/models/product-request';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    // this.userName = this.activatedRoute.snapshot.params['userName'];
    // console.log(this.activatedRoute.snapshot.queryParams);
    // this.productService.getAllProductsWithLimit(5).subscribe({
    //   next: (data: ProductResponse[]): void => {
    //     // console.log(data.category);
    //     for (let index = 0; index < data.length; index++) {
    //       const element = data[index];
    //       console.log(element);
    //     }
    //   },
    // });
    const product: ProductRequest = {
      title: '123',
      description: '123',
      category: '123',
      image: '123',
      price: 123,
    };
    this.productService.addNewProduct(product).subscribe({
      next: (data: ProductResponse): void => {
        console.log(data);
      },
      error: (error: HttpErrorResponse): void => {
        if (error instanceof ErrorEvent) {
          console.error('An error occurred: ' + error);
        } else {
          console.error('Server side error: ', error.message);
        }
        console.log(error);
      },
    });
  }
  userName: any;
}
