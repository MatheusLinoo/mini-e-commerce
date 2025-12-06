import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {
  form: FormGroup;
  isEditMode = false;
  productId?: number;

  private fb = inject(FormBuilder);
  private productService = inject(ProductService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  constructor() {
    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      preco: [0, [Validators.required, Validators.min(0.01)]],
      sku: ['', [Validators.required]],
      categoriaId: [null, [Validators.required]], 
      descricao: ['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.productId = +id;
      this.productService.getById(this.productId).subscribe(product => {
        
        this.form.patchValue({
          ...product,
          categoriaId: product.categoriaId 
        });
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const product: Product = this.form.value;

    if (this.isEditMode && this.productId) {
      product.id = this.productId;
      this.productService.update(product).subscribe(() => {
        this.router.navigate(['/products']);
      });
    } else {
      this.productService.create(product).subscribe(() => {
        this.router.navigate(['/products']);
      });
    }
  }
}
