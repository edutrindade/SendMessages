import { Injectable } from '@angular/core';
import { NotifyMessageService } from '../../../../services/notify-message.service';
import { ProductOutputListComponent } from './product-output-list.component';
import { ProductOutputNewModalComponent } from '../product-output-new-modal/product-output-new-modal.component';
import { HttpErrorResponse } from '@angular/common/http';

    @Injectable({
        providedIn: 'root'
    })

    export class ProductOutputInsertService {

        outputListComponent: ProductOutputListComponent

        constructor(private notifyMessage: NotifyMessageService){
        }

        set ProductOutputListComponent(value: ProductOutputListComponent) {
            this.outputListComponent = value;
        }

        showModalInsert(){
            this.outputListComponent.outputNewModal.showModal();
        }

        onInsertSuccess($event: any){
            this.notifyMessage.success('Estoque atualizado com sucesso.');
            console.log($event);
            this.outputListComponent.getOutputs();
        }
    
        onInsertError($event: HttpErrorResponse){
            console.log($event);
        }
    
}  