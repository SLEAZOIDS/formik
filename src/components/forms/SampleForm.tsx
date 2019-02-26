import { Field, Form, FormikProps, withFormik } from 'formik'
import * as React from 'react'
import * as Yup from 'yup'
import FieldTemplate from './fields/FieldTemplate'
import RadioButton, { IRadioButtonItem } from './fields/RadioButton'
import TextInput from './fields/TextInput'
import FieldWrapper from './FieldWrapper'
import { IFormProps } from './FormExports'

interface IFormValue {
    name: string
    gender: string
}

/**
 * 性別（ラジオボタン）のアイテム
 */
const genderItems: IRadioButtonItem[] = [
    { id: 0, name: '男' },
    { id: 1, name: '女' },
    { id: 2, name: '回答なし' },
]

/**
 * フォーム
 */
const InnerForm = React.memo<FormikProps<IFormValue> & IFormProps>(props => (
    <Form id="form" className="form">
        <FieldWrapper step={props.step} setFieldValue={props.setFieldValue}>
            <FieldTemplate label="氏名" name="name" required={true}>
                <Field component={TextInput} />
            </FieldTemplate>
            <FieldTemplate label="性別" name="gender" required={true}>
                <Field component={RadioButton} items={genderItems} />
            </FieldTemplate>
        </FieldWrapper>
    </Form>
))

/**
 * FormikをHOCしたフォーム
 */
const MainForm = withFormik<IFormProps, IFormValue>({
    mapPropsToValues: props => ({
        name: props.data.name || '',
        gender: props.data.gender || 0,
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .max(20, '氏名は20文字以内にしてください。')
            .required('氏名を入力してください'),
        gender: Yup.string().required('性別を入力してください'),
    }),
    handleSubmit: (values, { props, setSubmitting }) => {
        if (props.onSubmit) {
            props.onSubmit(values)
        }
        setSubmitting(false)
    }
})(InnerForm)

export default MainForm
