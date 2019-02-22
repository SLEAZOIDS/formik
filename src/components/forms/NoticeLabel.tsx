import * as React from 'react'

/**
 * お知らせラベルのスタイル
 */
const styles: React.CSSProperties = {
    textAlign: 'center',
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'aliceblue'
}

/**
 * お知らせラベルのインターフェース
 */
interface INoticeLabelProps {
    value: string
}

/**
 * お知らせラベル・コンポーネント
 */
const NoticeLabel = React.memo<INoticeLabelProps>(props => (
    <div style={styles}>{props.value}</div>
))

export default NoticeLabel
