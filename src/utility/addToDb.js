
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getStoredCartList = () => {
    const storedListStr = localStorage.getItem('cart-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;

    }
    else {
        return [];
    }
}
const addToStoredCartList = (id) => {
    const storedList = getStoredCartList();
    if (storedList.includes(id)) {
        // console.log(id,'already exist in the read list');
        toast.success("already exist in the Cart list");
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart-list', storedListStr);
        toast.success("Added to Cart List");
    }
}

const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;

    }
    else {
        return [];
    }
}
const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if (!storedList.includes(id)) {
        storedList.push(id);
        localStorage.setItem("wish-list", JSON.stringify(storedList));
        toast("Added to Wish List", { autoClose: 3000 });
    }
}


export { addToStoredCartList, addToStoredWishList, getStoredCartList, getStoredWishList }