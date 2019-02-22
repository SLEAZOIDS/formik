import CircularProgress from '@material-ui/core/CircularProgress'
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import * as React from 'react'
import ConfirmFormFooter from './footers/ConfirmFormFooter'
import InputFormFooter from './footers/InputFormFooter'
import { FormSteps, IFormProps } from './IForm'
import NoticeLabel from './NoticeLabel'

interface IProps {
    form: React.ComponentType<IFormProps>
}

interface IState {
    id: number
    uri: string
    data: { [value: string]: string }
    otherData: { [value: string]: string }
    step: number
    isLoading: boolean
    isValid: boolean
}

/**
 * ローディングのスタイル
 * @param {Spacing} spacing
 * @returns {StyleRules<string>}
 */
const styles = ({ spacing }: Theme) =>
    createStyles({
        progress: {
            margin: spacing.unit * 2
        }
    })

/**
 * フォームテンプレートのコンポーネント
 */
class FormTemplate extends React.PureComponent<
    IProps & WithStyles<typeof styles>,
    IState
> {
    /**
     * stateの初期化
     */
    public state = {
        id: 0,
        uri: '',
        data: {},
        otherData: {},
        step: FormSteps.INPUT,
        isLoading: true,
        isValid: false
    }

    /**
     * 前処理
     * APIで必要なデータを取得するなど
     */
    public componentDidMount() {
        // APIで必要なデータを取得するならばここに記述

        // APIでデータ取得後にローディングを終了させる
        this.setState({ isLoading: false })
    }

    /**
     * ローディング、メッセージボックス、メインコンテンツ、フッターのレンダリング
     */
    public render() {
        return (
            <>
                {this.state.isLoading ? (
                    <div>
                        <CircularProgress
                            className={this.props.classes.progress}
                        />
                    </div>
                ) : (
                    <>
                        {this.state.step === FormSteps.COMPLETE &&
                            this.state.isValid && (
                                <NoticeLabel value="登録しました" />
                            )}
                        <this.props.form
                            data={this.state.data}
                            otherData={this.state.otherData}
                            step={this.state.step}
                            onSubmit={this.handleSubmit}
                        />
                        <div className="form__footer">
                            {this.state.step === FormSteps.INPUT ? (
                                <InputFormFooter />
                            ) : this.state.step === FormSteps.CONFIRM ? (
                                <ConfirmFormFooter
                                    onResetStep={this.resetStep}
                                />
                            ) : null}
                        </div>
                    </>
                )}
            </>
        )
    }

    /**
     * フォームのsubmit時に呼ばれる関数
     */
    private handleSubmit = () => {
        if (this.proceedStep() === FormSteps.COMPLETE) {
            // 最終処理

            //　処理が終わったらNoticeLabelを表示させる
            this.setState({ isValid: true })
        }
    }

    /**
     * フォームのStepを次の段階に変更する
     */
    private proceedStep = () => {
        this.setState({
            step: this.state.step ? this.state.step + 1 : FormSteps.INVALID
        })
        return this.state.step
    }

    /**
     * フォームのStepを初期の状態に戻す
     */
    private resetStep = () => {
        this.setState({ step: FormSteps.INPUT })
    }
}

export default withStyles(styles)(FormTemplate)
