Son pequenas partes de la UI que deberian ser reutilizables.

Ejemplo:

import { InputError } from '@/styled-components';
import { FieldErrors } from 'react-hook-form';

const formValidation = (errors: FieldErrors, errorKey: string) => {
    return errors[errorKey] ? <InputError className="error-message">{
        errors[errorKey].message}</InputError> : '';
};

export const Input = ({ register, name, errors, label = '', type, inputProps, disable = false, trigger }: InputProps) => {
    return (
        <div>
        <TextField
            required
            disabled={disabled}
            type={type}
            error={errors && !!errors[name]}
            id={name}
            label={label}
            variant="standard"
            {...register(name)}
            {...(inputProps && { inputProps: inputProps })}
            onChange={() => trigger && trigger()}
            fullwidth
        />
        { errors && formValidation(errors, name) }
        </div>
    )
}

Este ejemplo es un imput personalizado podriamos utilizar el componente de React Textfield simplemente, pero en
este caso estamos introduciendo una logica de errores del input.