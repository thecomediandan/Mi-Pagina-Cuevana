Los models son mas para Typescript para la representacion de entidades.

Para mostrar items de un texto de selection o comboBox

export interface SelectOption {
    label: string;
    value: string;
}

Para identificar acciones de redux

export interface Action<T> {
    type: string;
    payload: T;
}