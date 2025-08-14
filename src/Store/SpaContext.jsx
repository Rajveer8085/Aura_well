// src/context/SpaContext.js
import React, { createContext} from "react";
import { useNavigate } from "react-router-dom";

// Context create karna
const SpaContext = createContext();


// Provider component
export const AppointmentProvider = ({ children }) => {
    const navigator = useNavigate()
    
    const appointmentNavigate = () =>{
        navigator("/appointment")
    }
   

    return (
        <SpaContext.Provider value={{
            appointmentNavigate
        }}>
            {children}
        </SpaContext.Provider>
    );
};

export default SpaContext