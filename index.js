import React, { useContext } from 'react'

const createStore = (initialValue) => {
    let StoreContext = React.createContext();

    class Provider extends  React.Component  {
        constructor(props) {
            super(props)
            this.state = initialValue || {}
        }
        setGlobalStateDecorator = async (...args) => {
            let newState = args[0], setStateCallback = args[1];

            if(typeof args[0] === 'function'){
                const fun = args[0];
                newState = await fun(this.state);
            }

            this.setState(newState, setStateCallback);
        }
        render() {
            return (
                <StoreContext.Provider value={{globalState: this.state, setGlobalState: this.setGlobalStateDecorator}}>
                    {this.props.children}
                </StoreContext.Provider>
            )
        }
    }

    const withStore = ( WrappedComponent, mapProps )=> {
        return function (props) {
            let extraProps = null;
            if(StoreContext) {
                const context = useContext(StoreContext);
                if(typeof mapProps === 'function') {
                    console.log(context);
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

    return {
        Provider,
        withStore
    }
}

export default createStore
