import * as React from 'react'
import { TextField } from '../../styled'
import { IFieldProps } from './FieldExports'

/**
 * テキスト入力のプロパティのインターフェース
 */
interface ITextInputProps extends IFieldProps {
    type?: string
    prefix?: string
}

/**
 * テキスト入力のStateのインターフェース
 */
interface ITextInputState {
    value: string
}

/**
 * テキスト入力
 */
export default class TextInput extends React.Component<
    ITextInputProps,
    ITextInputState
> {
    /**
     * Stateの初期値をセット
     *
     * @type {{value: any}}
     */
    public state: ITextInputState = { value: this.props.field.value }

    /**
     * レンダリング
     */
    public render() {
        const { readonly, prefix, type } = this.props
        const { value } = this.state
        return (
            <>
                {prefix || null}
                {readonly ? (
                    <label>{value}</label>
                ) : (
                    <TextField
                        value={value}
                        type={type || 'text'}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    />
                )}
            </>
        )
    }

    /**
     * コンポーネントを際描写する必要があるかを判定
     *
     * @param {ITextInputProps} nextProps
     * @param {ITextInputState} nextState
     * @returns {boolean}
     */
    public shouldComponentUpdate(
        nextProps: ITextInputProps,
        nextState: ITextInputState
    ) {
        return (
            this.props.readonly !== nextProps.readonly ||
            this.state.value !== nextState.value
        )
    }

    /**
     * テキスト入力の値が変わった時実行
     */
    private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            value: event.currentTarget.value
        })
    }

    /**
     * テキスト入力からフォーカスが外れた時実行
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event
     */
    private handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (this.props.setFieldValue) {
            this.props.setFieldValue(
                this.props.field.name,
                event.currentTarget.value
            )
        }
    }
}
