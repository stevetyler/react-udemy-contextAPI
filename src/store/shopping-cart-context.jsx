import { createContext } from 'react';

export const CartContext = createContext({
    // use for autocompletion
    items: [],
    addItemToCart: () => {}
});

