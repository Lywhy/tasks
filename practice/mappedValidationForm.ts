interface IForm {
    name: string,
    password: string
}

const form: IForm = {
    name: 'test',
    password: '123'
}

type Validation<T> = {
    [K in keyof T]: { isValid: true } | { isValid: false, errorMessage: string}
}

const formValidation: Validation<IForm> = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: 'Пароль должен быть длинее 5 символов' }
}