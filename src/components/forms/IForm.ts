/**
 * フォームの共通インターフェース
 */
export interface IFormProps {
    id?: number
    data?: any
    otherData?: { [value: string]: string }
    step?: number
    onSubmit?: (values: any) => void
}

/**
 * フォームStepの一覧
 */
export enum FormSteps {
    INVALID = 0,
    INPUT = 1,
    CONFIRM = 2,
    COMPLETE = 3
}
