import React, { useContext } from "react";
import Image from "next/image";
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product, indexValue }) => {
    const { removeFromCart } = useContext(AppContext);

    const handleRemove = (index) => {
        removeFromCart(index);
    };

    return (
        <div className={styles.OrderItem}>
            {
                product?.images[0] !== '' && product?.images.length > 1 && product?.images[0].startsWith('https://') 
                ?  
                <>
                    <figure>
                        <Image
                            src={product?.images[0]}
                            alt={product?.title} />
                    </figure>
                    <p>{product?.title}</p>
                    <p>${product?.price}</p>
                </>
                : <p>   No tiene productos agregados en el carrito!!    </p>
            }
            <Image 
                className={`${styles.pointer} ${styles['more-clickable-area']}`}
                src={close} alt="close" 
                onClick={() => handleRemove(indexValue)} 
            />
        </div>
    );
};

export default OrderItem;