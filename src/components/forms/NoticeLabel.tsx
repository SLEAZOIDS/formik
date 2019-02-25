import * as React from 'react'

const styles = {
    textAlign: 'center',
    padding: 10,
    marginBottom: 15,
} as React.CSSProperties

const success: React.CSSProperties = {
    ...styles,
    backgroundColor: 'aliceblue'
}

const fail: React.CSSProperties = {
    ...styles,
    backgroundColor: 'red'
}


interface INoticeLabelProps {
    value: string,
    type?: string
}

const NoticeLabel = React.memo<INoticeLabelProps>(props => (
    props.type === 'fail' ?
        (<div style={fail}>{props.value}</div>):
        (<div style={success}>{props.value}</div>)
))

export default NoticeLabel
