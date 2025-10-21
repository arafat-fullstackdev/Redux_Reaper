const logger = (state)=> (next)=> (action)=>{
    console.group(action.type);
    console.info("prev States",state.getState());
    const result = next(action);
    console.info("Next State", state.getState());
    console.groupEnd();

    return result;

  return next(action);
};

export  default logger;