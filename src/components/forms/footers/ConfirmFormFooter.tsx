import * as React from 'react'
import { Button } from '../../styled'

interface IConfirmFormFooterProps {
    onResetStep: () => void
}

const ConfirmFormFooter = React.memo<IConfirmFormFooterProps>(props => (
    <div className="form__footer">
        <Button variant="outlined" onClick={props.onResetStep}>
            戻る
        </Button>
        <Button variant="contained" color="primary" type="submit" form="form">
            確認
        </Button>
    </div>
))

export default ConfirmFormFooter
