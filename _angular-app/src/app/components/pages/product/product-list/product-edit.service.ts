import { Injectable } from '@angular/core';
import { NotifyMessageService } from '../../../../services/notify-message.service';
import { ProductListComponent } from './product-list.component';
import { HttpErrorResponse } from '@angular/common/http';

    @Injectable({
        providedIn: 'root'
    })

    export class ProductEditService {

        private _productListComponent: ProductListComponent

        constructor(private notifyMessage: NotifyMessageService){
        }

        set ProductListComponent(value: ProductListComponent) {
            this._productListComponent = value;
        }

        showModalEdit(productId: number){
            this._productListComponent.productId = productId;
            this._productListComponent.productEditModal.showModal();
        }

        onEditSuccess($event: any){
            this.notifyMessage.success('Produto atualizado com sucesso.');
            console.log($event);
            this._productListComponent.getProducts();
        }
    
        onEditError($event: HttpErrorResponse){
            console.log($event);
        }
    
    
}  