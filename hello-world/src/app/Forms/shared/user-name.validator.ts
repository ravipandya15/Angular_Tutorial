import { AbstractControl, ValidatorFn } from "@angular/forms";

// export function forbiddenNameValidator(control : AbstractControl) : {[key: string] : any} | null{
//     // it checks control.value contains admin or not if it contains then return true else false..
//     const forbidden = /admin/.test(control.value);
//     return forbidden ? {'forbiddenName': {value : control.value}} : null; 
// }

export function forbiddenNameValidator(forbiddenName : RegExp) : ValidatorFn{
    return (control : AbstractControl) : {[key: string] : any} | null => {
        // it checks control.value contains forbiddenName or not if it contains then return true else false..
        const forbidden = forbiddenName.test(control.value);
        return forbidden ? {'forbiddenName': {value : control.value}} : null; 
    };
}
