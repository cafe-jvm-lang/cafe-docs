import {useEffect, useState} from "react";

function useClientWindow(){
    const [clientGlobals, setClientGlobals] = useState({
        clientWindow: undefined,
        clientDoc: undefined
    })

    useEffect(() => {
        function handleResize() {
            setClientGlobals({
                clientWindow: window,
                clientDoc: document
            });
        }

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return clientGlobals;
}

export default useClientWindow;