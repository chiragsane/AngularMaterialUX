import { Injectable } from '@angular/core';
declare var $: any;

@Injectable()
export class ToastService {
    constructor() { }

    toast() {
        setTimeout(function () {
            $('#Snackbar').addClass('visible');
            setTimeout(function () {
                $('#Snackbar').addClass('dismiss');
            }, 3000);
        }, 50);
    }
}
