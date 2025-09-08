
const React = (()  => {

    const useState = (initialValue) =>{
        let state = initialValue;
        let setter = (newState) => {
            state = newState;
        };

        return [state, setter];
    }

    return {
        useState,
    }
})();