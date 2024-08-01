Hace una peticion que intercepta la cabecera y podemos evaluar el resultado para luego mostrarlo

Ejemplo:

import { getBasicAuthorization } from '@/services';
import { SnackbarUtilities } from '@/utilities';
import { getValidatorErrorMessage } from '@/utilities/validation.utility';
import axios from 'axios';

export const PublicPrivateInterceptor = () => {
    axios.interceptors.request.use(function (request) {
        if (request.url?.includes('assets') || request.headers?.Authorization) {
            return request;
        }
        const token = getBasicAuthorization();
        const newHeaders = {
            Authorization: token,
            'Content-Type': 'application/json'
        }:

        request.headers = newHeaders;
        return request;
    });

    axios.interceptors.response.use(
        (response) => {
            window.location.href === '/reset-success';
            return response;
        },
        function (error) {
            if (error.response.data.error.code) SnackbaUtilities.error(getValidatorErrorMessage(error.response.data.error.code))
        }
    );
}
