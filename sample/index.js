import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { PP,PPP }from './components.js'
import { Provider, withStore } from './store.js'
import { Provider as Provider2, withStore  as withStore2} from './store2.js'

const PPC = withStore(PP, ({ globalState, setGlobalState }) => {
    return {
        name: globalState.name,
        other: globalState.other,
        setGlobalState,
    }
});
const PPPC = withStore(PPP, ({ globalState, setGlobalState }) => {
    return {
        name: globalState.name,
        other: globalState.other,
        setGlobalState,
    }
});

const PPC2 = withStore2(PP, ({ globalState, setGlobalState }) => {
    return {
        name: globalState.name,
        other: globalState.other,
        setGlobalState,
    }
});

const PPPC2 = withStore2(PPP, ({ globalState, setGlobalState }) => {
    return {
        name: globalState.name,
        other: globalState.other,
        setGlobalState,
    }
});

const MyContainer = props => {
    return (
        <div>
            <Provider>
                <PPC>
                    <PPPC />
                </PPC>
            </Provider>
            <div>---------------</div>
            <Provider2>
                <PPC2>
                    <PPPC2 />
                </PPC2>
            </Provider2>
        </div>
    )
}

ReactDOM.render(
    <MyContainer />,
    document.getElementById('root')
);



