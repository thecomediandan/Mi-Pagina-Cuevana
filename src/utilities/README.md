Para reutiliza logica de programacion

Ejemplo:

export const FormatDateMMMD = (dateString: string): string => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString('en-us', {month: 'short'})} ${date.getDate()}`;
}

Para formatear fechas, esto puede llegar a utilizarce muchas veces en el proyecto.