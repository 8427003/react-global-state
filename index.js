import React, { useContext, useReducer } from 'react'

const StoreContext = React.createContext(null);

export const Provider = props => {
    const [state, dispatch] = useReducer(props.reducer, props.store);
    const Context = props.context || StoreContext;

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {props.children}
        </StoreContext.Provider>
    )
}

export const connect = (WrappedComponent, mapProps) => {
    return function (props) {
        let extraProps = null;
        if(StoreContext) {
            const context = useContext(StoreContext);
            if(typeof mapProps === 'function') {
                extraProps = mapProps(context) || {}
            }
            else {
                extraProps = context || {};
            }
            return <WrappedComponent {...extraProps} {...props} />
        }
        return <WrappedComponent {...props} />
    }
}
