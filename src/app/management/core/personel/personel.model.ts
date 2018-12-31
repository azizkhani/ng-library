/*
*
*    @ AH.GHORAB
*
*/
import {BaseEntity} from '../../../shared/baseEntity/baseEntity.model';

export class Personel extends BaseEntity<number> {
    constructor(
        public personCode?: string, // code personeli
        public firstName?: string,
        public lastName?: string,
        public fullName?: string,
        public fatherName?: string,
        public nationalCode?: string, // code meli
        public identityNumber?: string, // shomare shenasname
        public birthDate?: string, // tarikhe tavalod
        public homePhone?: string, // shomare telphone
        public cellphone?: string, //
        public description?: string,
        public registrationDate?: string,
        public homeAddress?: string, // adrese manzel
        public postalCode?: string, // shenaseye posti
        public workAddress?: string, // addresse mahale kar
        public workPhone?: string, // telphone mahale kar
        public phoneKousarOfficeLocation?: string, // telphone kousar mahahle kar
        public disabilityPercent?: number, // darsade az kar oftadegi
        public veteranPercent?: number, // darsade janbazi
        public locationIssuance?: string, // mahale tavalod
        public isInternal?: boolean,
        public personelImageTitle?: string,
        public personelImageCode?: string,
        public personelImage?: string,
        public active?: boolean,
        public genderId?: number,
        public genderTopic?: string,
        public maritalStatusId?: number, // vaziyate tahol
        public maritalStatusTopic?: string,
        public typeId?: number, // noe personel
        public typeTopic?: string,
        public educationLevelId?: number, // maghtae tahsili
        public educationLevelTopic?: string,
        public educationFieldId?: number, // reshte tahsili
        public educationFieldTopic?: string,
        public categoryId?: number, // code raste
        public categoryTopic?: string,
        public gradeId?: number, // code daraje
        public gradeTopic?: string,
        public physicalStatusId?: number, // code vaziyate jesmani
        public physicalStatusTopic?: string,
        public powerId?: number, // rade personel
        public powerTitle?: string,
        public powerCode?: string,
        public postId?: number, // post
        public postTitle?: string,
        public postCode?: string,
        public supplierId?: number,
        public supplierTitle?: string,
        public religionGroupId?: number,
        public religionGroupTopic?: string,
        public religionId?: number,
        public religionTopic?: string,
        public birthPlace?: string,
        public identityRegisterPlace?: string, // mahale sabte shenasname
        public identitySerial?: string, // seriyale shenasname

        public membershipStatus?: number,
        public membershipStatusPersianTitle?: string,
        public identitySerialChar?: string, // harfe seriale shenasname
        public identitySerialSet?: string, // seriye seriale shenasname
        public birthPlaceStateId?: number, // ostane mahale tavalod
        public birthPlaceStateTopic?: string,
        public birthPlaceCityId?: number, // shahre mahale tavalod
        public birthPlaceCityTopic?: string,
        public habitantStateId?: number, // ostane mahale sokunat
        public habitantStateTopic?: string,
        public habitantCityId?: number, // shahre mahale sokunat
        public habitantCityTopic?: string
    ) {
        super();
        this.id = -1;
        this.powerId = -1;
        personelImageCode = '-1';
    }
}




