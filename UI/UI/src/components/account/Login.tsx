import { useEffect, useState } from "react";
 
function Login(){
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() =>{
        setTimeout(() =>{
            setData('Fetched Data');
            setIsLoading(false);
        }, 2000);
    }, []);

    return(
        <div>
            {isLoading? (
                <p>Loading...</p>
            ): ( 
            <p>{data}</p>
        )}
        </div>
    );
}

export default Login;