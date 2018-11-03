import { Injectable } from '@angular/core';
import { NotifyMessageService } from '../../../../services/notify-message.service';
import { ProductInputListComponent } from './product-input-list.component';
import { ProductInputNewModalComponent } from '../product-input-new-modal/product-input-new-modal.component';
import { HttpErrorResponse } from '@angular/common/http';

    @Injectable({
        providedIn: 'root'
    })

    export class ProductInputInsertService {

        inputListComponent: ProductInputListComponent

        constructor(private notifyMessage: NotifyMessageService){
        }

        set ProductInputListComponent(value: ProductInputListComponent) {
            this.inputListComponent = value;
        }

        showModalInsert(){
            this.inputListComponent.inputNewModal.showModal();
        }

        onInsertSuccess($event: any){
            this.notifyMessage.success('Estoque atualizado com sucesso.');
            console.log($event);
            this.inputListComponent.getInputs();
        }
    
        onInsertError($event: HttpErrorResponse){
            console.log($event);
        }
    
}  