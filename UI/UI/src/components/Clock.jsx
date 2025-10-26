import React from "react";
import ReactDOM from 'react-dom';

class Clock extends React.Component{
    render() {
        return(

           <div>

             <h1 className="heading">
                <span className="clock">
                    { new Date().toLocaleTimeString(this.props.locale) }
                    
                </span>
            </h1>
           </div>
        );
    }
}  

Clock.defaultProps ={
    Local: 'bn-BD'
}

    ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById('root'));

export default Clock;
