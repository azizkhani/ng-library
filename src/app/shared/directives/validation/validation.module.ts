/**
 *   @H.RASOULI /A.GHORAB/@ S.SEYFI
 *
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IpValidatorDirective} from './ip-validator.directive';
import {TimeValidatorDirective} from './time-validator.directive';
import {TelephoneValidatorDirective} from './telephone-validator.directive';
import {MobileValidatorDirective} from './mobile-validator.directive';
import {DateValidatorDirective} from './date-validator.directive';
import {IbannumberValidatorDirective} from './ibannumber-validator.directive';
import {EnglishletteronlyValidatorDirective} from './englishletteronly-validator.directive';
import {EnglishonlyValidatorDirective} from './englishonly-validator.directive';
import {ComboValidatorDirective} from './combo-validator.directive';
import {FixLengthValidatorDirective} from './fixLength-validator.directive';
import {CompareValidatorDirective} from './compare-validator.directive';
import {PasswordCheckValidatorDirective} from './passwordcheck-validator.directive';
import {PersianDateValidatorDirective} from './persiandate-validator.directive';
import {PersiandatefromValidatorDirective} from './persiandatefrom-validator.directive';
import {PersianDateToValidatorDirective} from './persiandateto-validator.directive';
import {NationalCodeValidatorDirective} from './nationalcode-validator.directive';
import {PersianLetterOnlyValidatorDirective} from './persiantextonly-validator.directive';
import {PersianOnlyValidatorDirective} from './persianonly-validator.directive';
import {FloatNumberValidatorDirective} from './floatnumber-validator.directive';
import {EmailValidatorDirective} from './email-validator.directive';
import {GroupCheckBoxValidatorDirective} from './groupCheckbox-validator.directive';
import {ForbiddenValidatorDirective} from './forbiddenName-validator.directive';
import {MainValidationDirective} from './mainValidation.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        IpValidatorDirective,
        TimeValidatorDirective,
        TelephoneValidatorDirective,
        MobileValidatorDirective,
        DateValidatorDirective,
        IbannumberValidatorDirective,
        EnglishletteronlyValidatorDirective,
        EnglishonlyValidatorDirective,
        ComboValidatorDirective,
        FixLengthValidatorDirective,
        CompareValidatorDirective,
        PasswordCheckValidatorDirective,
        PersianDateValidatorDirective,
        PersiandatefromValidatorDirective,
        PersianDateToValidatorDirective,
        NationalCodeValidatorDirective,
        PersianLetterOnlyValidatorDirective,
        PersianOnlyValidatorDirective,
        FloatNumberValidatorDirective,
        EmailValidatorDirective,
        GroupCheckBoxValidatorDirective,
        ForbiddenValidatorDirective,
        MainValidationDirective
    ],
    providers: [],
    exports: [
        IpValidatorDirective,
        TimeValidatorDirective,
        TelephoneValidatorDirective,
        MobileValidatorDirective,
        DateValidatorDirective,
        IbannumberValidatorDirective,
        EnglishletteronlyValidatorDirective,
        EnglishonlyValidatorDirective,
        ComboValidatorDirective,
        FixLengthValidatorDirective,
        CompareValidatorDirective,
        PasswordCheckValidatorDirective,
        PersianDateValidatorDirective,
        PersiandatefromValidatorDirective,
        PersianDateToValidatorDirective,
        NationalCodeValidatorDirective,
        PersianLetterOnlyValidatorDirective,
        PersianOnlyValidatorDirective,
        FloatNumberValidatorDirective,
        EmailValidatorDirective,
        GroupCheckBoxValidatorDirective,
        ForbiddenValidatorDirective,
        MainValidationDirective
    ]
})
export class BhValidationModule {
    constructor() {
    }
}
