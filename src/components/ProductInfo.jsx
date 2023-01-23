import React from 'react';
import Image from 'next/image';
import addCart from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductInfo.module.scss';

const bike = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const ProductInfo = () => {
    return(
        <>
            <Image 
                src={bike} 
                alt="bike" 
                width={50}
                height={50} 
            />
            <div classname={styles.ProductInfo}>
                <p>$35,00</p>
                <p>Bike</p>
                <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
                <button classname={`${styles['primary-button']} ${styles['add-to-cart-button']}`}>
                    <Image 
                        src={addCart} 
                        alt="add to cart" 
                        width={50}
                        height={50} 
                    />
                    Add to cart
                </button>
            </div>
        </>
    );
};

export default ProductInfo;