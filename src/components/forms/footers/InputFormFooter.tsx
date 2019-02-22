import * as React from 'react'
import { Button } from '../../styled'

const InputFormFooter: React.FC = () => (
    <div className="form__footer">
        <Button variant="contained" color="primary" type="submit" form="form">
            確認
        </Button>
    </div>
)

export default InputFormFooter
