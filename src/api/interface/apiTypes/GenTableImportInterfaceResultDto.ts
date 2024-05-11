export interface GenTableImportInterfaceResultDto {
    /** name */
    name: string;
    /** desc */
    desc: string;
    /** tsType */
    tsType: 'string' | 'number' | 'boolean' | 'Date';
    /** hasQuestionToken */
    hasQuestionToken: boolean;
}
