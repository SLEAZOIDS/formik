import {
    Button as MuiButton,
    List as MuiList,
    ListItem as MuiListItem,
    ListItemIcon as MuiListItemIcon,
    ListItemText as MuiListItemText,
    TextField as MuiTextField
} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'

/**
 * CSSをoverrideしたButtonコンポーネント
 *
 * @type {React.ComponentType<Omit<JSX.LibraryManagedAttributes<React.ComponentType<ConsistentWith<PropsOf<C>, InjectedProps>>, PropsOf<React.ComponentType<ConsistentWith<PropsOf<C>, InjectedProps>>>>, keyof InjectedProps> & AdditionalProps>}
 */
export const Button = withStyles({
    root: {
        padding: 5,
        margin: 5,
        width: 120
    }
})(MuiButton)

/**
 * CSSをoverrideしたListコンポーネント
 *
 * @type {React.ComponentType<Omit<JSX.LibraryManagedAttributes<React.ComponentType<ConsistentWith<PropsOf<C>, InjectedProps>>, PropsOf<React.ComponentType<ConsistentWith<PropsOf<C>, InjectedProps>>>>, keyof InjectedProps> & AdditionalProps>}
 */
export const List = withStyles({
    root: {
        padding: '10px 0 8px 10px'
    }
})(MuiList)

/**
 * CSSをoverrideしたListItemコンポーネント
 *
 * @type {React.ComponentType<Omit<JSX.LibraryManagedAttributes<React.ComponentType<ConsistentWith<PropsOf<C>, InjectedProps>>, PropsOf<React.ComponentType<ConsistentWith<PropsOf<C>, InjectedProps>>>>, keyof InjectedProps> & AdditionalProps>}
 */
export const ListItem = withStyles({
    root: {
        padding: 0
    }
})(MuiListItem)

/**
 * CSSをoverrideしたListItemIconコンポーネント
 *
 * @type {React.ComponentType<Omit<JSX.LibraryManagedAttributes<React.ComponentType<ListItemIconProps>, PropsOf<React.ComponentType<ListItemIconProps>>>, keyof InjectedProps> & AdditionalProps>}
 */
export const ListItemIcon = withStyles({
    root: {
        padding: 0,
        margin: '0 5px 0 0'
    }
})(MuiListItemIcon)

/**
 * CSSをoverrideしたListItemTextコンポーネント
 *
 * @type {React.ComponentType<Omit<JSX.LibraryManagedAttributes<React.ComponentType<ConsistentWith<PropsOf<C>, InjectedProps>>, PropsOf<React.ComponentType<ConsistentWith<PropsOf<C>, InjectedProps>>>>, keyof InjectedProps> & AdditionalProps>}
 */
export const ListItemText = withStyles({
    root: {
        fontSize: '14px',
        padding: 0
    }
})(MuiListItemText)

/**
 * CSSをoverrideしたTextFieldコンポーネント
 *
 * @type {React.ComponentType<Omit<JSX.LibraryManagedAttributes<React.ComponentType<TextFieldProps>, PropsOf<React.ComponentType<TextFieldProps>>>, keyof InjectedProps> & AdditionalProps>}
 */
export const TextField = withStyles({
    root: {
        fontSize: '10px',
        width: 300
    }
})(MuiTextField)
