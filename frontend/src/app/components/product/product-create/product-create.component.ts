import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Product } from '../product.model'
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  product: Product = { name: '', price: null }
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    console.log('aoba')
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado!')
      this.router.navigate(['/products'])
    })
  }

  cancel() {
    this.router.navigate(['/products'])
  }
}
