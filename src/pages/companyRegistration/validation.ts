const companyNameRegEx : RegExp = /^[a-zA-Z0-9]{1,30}$/;
const countryNameRegEx : RegExp = /^[a-zA-Z]{4,10}$/;

export const companyNameValidation = {
    required: 'Поле пустое',
    validate: (companyName: string) => {
        if (!companyNameRegEx.test(companyName)) {
            return 'Название компании должно содержать только латинские буквы и цифры и быть длиной от 1 до 30 символов'
        }
        return true;
    }
}


export const countryNameValidation = {
    required: 'Поле пустое',
    validate: (countryName: string) => {
        if (!countryNameRegEx.test(countryName)) {
            return 'Название страны должно содержать только латинские буквы'
        }
        return true;
    }
}