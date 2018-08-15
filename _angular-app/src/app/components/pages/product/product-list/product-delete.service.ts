import { Injectable } from '@angular/core';
import { NotifyMessageService } from '../../../../services/notify-message.service';
import { ProductListComponent } from './product-list.component';
import { HttpErrorResponse } from '@angular/common/http';

    @Injectable({
        providedIn: 'root'
    })

    export class ProductDeleteService {

        private _productListComponent: ProductListComponent

        constructor(private notifyMessage: NotifyMessageService){
        }

        set ProductListComponent(value: ProductListComponent) {
            this._productListComponent = value;
        }

        showModalDelete(productId: number){
            this._productListComponent.productId = productId;
            this._productListComponent.productDeleteModal.showModal();
        }
    
        onDeleteSuccess($event: any){
            this.notifyMessage.success('Produto excluído com sucesso.');
            console.log($event);
            this._productListComponent.getProducts();
        }
    
        onDeleteError($event: HttpErrorResponse){
            this.notifyMessage.error('Não foi possível excluir o produto.');
            console.log($event);
        }
    
}  