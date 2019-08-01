import createStore from '../index.js'

const { Provider, withStore } = createStore({
    name: "init2"
});

export {
    Provider,
    withStore
}

