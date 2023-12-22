import PropTypes from 'prop-types';
import { createContext, useState } from 'react'
export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const authInfo = { user, };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
AuthProvider.propTypes = {
    children : PropTypes.node
}