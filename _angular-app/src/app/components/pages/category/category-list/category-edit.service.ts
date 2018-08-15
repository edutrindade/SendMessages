import { Injectable } from '@angular/core';
import { NotifyMessageService } from '../../../../services/notify-message.service';
import { CategoryListComponent } from './category-list.component';
import { HttpErrorResponse } from '@angular/common/http';

    @Injectable({
        providedIn: 'root'
    })

    export class CategoryEditService {

        private _categoryListComponent: CategoryListComponent

        constructor(private notifyMessage: NotifyMessageService){
        }

        set CategoryListComponent(value: CategoryListComponent) {
            this._categoryListComponent = value;
        }

        showModalEdit(categoryId: number){
            this._categoryListComponent.categoryId = categoryId;
            this._categoryListComponent.categoryEditModal.showModal();
        }

        onEditSuccess($event: any){
            this.notifyMessage.success('Categoria atualizada com sucesso.');
            console.log($event);
            this._categoryListComponent.getCategories();
        }
    
        onEditError($event: HttpErrorResponse){
            this.notifyMessage.error('Os dados não puderam ser atualizados. Verifique sua conexão e tente novamente.');
            console.log($event);
        }
    
    
}  