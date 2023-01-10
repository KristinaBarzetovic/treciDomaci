import React, { useContext } from "react";

export const UserContext = React.createContext({ user: undefined });

export function useUserContext() {
    return useContext(UserContext);
}