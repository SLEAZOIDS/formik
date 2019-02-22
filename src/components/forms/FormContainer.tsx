import * as React from 'react'
import { IFieldProps } from './fields/IField'

/**
 * IFieldPropsから不要なpropsを削除した型
 */
type PartialProps = Pick<
    IFieldProps,
    Exclude<keyof IFieldProps, 'field' | 'readonly'>
>

/**
 * フォームコンテナのPropsタイプ
 */
interface IProps extends PartialProps {
    step?: number
}

/**
 * フォームコンテナのコンポーネント
 */
const FormContainer: React.FC<IProps> = props => {
    const { children, setFieldValue, step } = props

    const childrenWithProps = React.Children.map(children, child => {
        const element = child as React.ReactElement<any>
        return element
            ? React.cloneElement(element, {
                  setFieldValue,
                  step
              })
            : null
    })

    return <div>{childrenWithProps}</div>
}

export default React.memo(FormContainer)
