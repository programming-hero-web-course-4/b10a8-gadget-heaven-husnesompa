# Gadget Heaven
## React Fundamental Concepts what I Used

1. Functional Components: The project is built using functional components for better performance and cleaner code.
2. Hooks:
    # useState(): To manage component-level states like cart, wishlist, and total price.
    # useEffect: To synchronize data with local storage and perform side effects like sorting or resetting states.
    # useLoaderData: For fetching and passing data to components dynamically.
    # useNavigate: For programmatic navigation to the home page.
3. Props: Passed data between parent and child components for reusability and clean architecture.
4. Dynamic Routing:
    Implemented routes using react-router-dom to handle category-specific pages, cart, and wishlist.
5. Local Storage Integration: 
    Persistent storage for cart and wishlist using getStoredCartList() and getStoredWishList() utility functions.

## Data Handling and State Management
   # Local Storage:
        Used for storing the cart and wishlist data persistently, even after the page reloads.
        Utility functions like getStoredCartList and addToStoredCartList handle adding and retrieving data.

    # React State:
        State is managed locally using useState for components like cart, wishlist, and total price.

    # Event Handling:
        Handled button clicks for sorting, purchasing, and managing products in the cart or wishlist dynamically.

## Features
    1. Dynamic Cart and Wishlist System
        Add or remove products from the cart or wishlist.
        Cart and wishlist states are synced with local storage.
    2. Purchase Functionality with Modal
        Displays a congratulatory modal upon successful purchase.
        Clears the cart and resets the total price without reloading the page.
    3. Dynamic Favicon and Title Updates
         Dynamically updates the browser tab title and favicon based on the page or state.
    4. Sorting by Price
        Sorts products in the cart by price in descending order.
    5. Responsive Design
        Fully responsive UI implemented using Tailwind CSS for mobile and desktop compatibility.









This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
