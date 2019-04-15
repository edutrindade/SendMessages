import { FieldsOptions } from "../../../common/fields-options";

const fieldsOptions : FieldsOptions = {
    name: {
        id: 'name',
        label: 'Nome',
        validationMessage: {
            maxlength: 60 
        }
    },
    email: {
        id: 'email',
        label: 'E-mail',
        validationMessage: {
            maxlength: 255 
        }
    },
    password: {
        id: 'password',
        label: 'Senha',
        validationMessage: {
            minlength: 6,
            maxlength: 16
        }
    }
};

export default fieldsOptions;