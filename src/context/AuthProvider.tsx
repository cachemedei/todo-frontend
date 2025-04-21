import { createContext, ReactNode, useState } from 'react';

interface AuthData {
    token: string | null;
    firstName: string | null;
    userId: string | null;
}

interface AuthContextType {
    auth: AuthData;
    setAuth: React.Dispatch<React.SetStateAction<AuthData>>;
}

export const AuthContext = createContext<AuthContextType>({
    auth: {
        token: null,
        firstName: null,
        userId: null,
    },
    setAuth: () => {
        throw new Error('setAuth called outside of AuthProvider')
    }
});

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [auth, setAuth] = useState<AuthData>({
        token: window.localStorage.getItem('token'),
        firstName: window.localStorage.getItem('firstName'),
        userId: window.localStorage.getItem('userId'),
    });

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
