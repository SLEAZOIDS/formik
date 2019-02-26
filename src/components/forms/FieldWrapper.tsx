import * as React from 'react'

interface IProps {
    step?: number
    setFieldValue?: (
        arg1: string,
        arg2: number | string | object | File
    ) => void
}

const FieldWrapper: React.FC<IProps> = props => {
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

export default React.memo(FieldWrapper)
