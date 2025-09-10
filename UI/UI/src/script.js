
const React = (()  => {
  let state;
    const useState = (initialValue) =>{
        if(state === undefined){
            state = initialValue;
        }
        // let state = initialValue;
        let setter = (newState) => {
            state = newState;
        };

        return [state, setter];
    }

    return {
        useState,
    }
})();


//? Experiment
const {useState} = React;

const Component = () => {
    const [Count, setCount] = useState(1);
    console.log(Count);
    setCount(2)
};

Component();
Component();