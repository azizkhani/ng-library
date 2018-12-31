/*
*
*    @ AH.GHORAB
*
*/
/**
 * TODO: chera generic file? khob esmesh ro IFile bezarim behtare
 */
export class GenericFile {
    constructor(public file?: File,
                public fileCode?: string,
                public fileName?: string) {
        this.fileCode = '-1';
        this.fileName = '';
    }
}
