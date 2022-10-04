import { createContext, useState } from 'react';

export const InshortsDataContext = createContext(null);

const ContextProvider = ({children}) => {

    const [ Data, SetData ] = useState([]);
    const [Element,SetElement] = useState('All News');
    const [loading, setLoading] = useState(true);
    
    return (
        <InshortsDataContext.Provider value={{ Data, SetData,Element,SetElement,loading,setLoading}}>
            {children}
        </InshortsDataContext.Provider>
    )
}

export default ContextProvider;