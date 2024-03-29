import React from 'react';
import Image from 'next/image';
import flecha from '@icons/flechita.svg';
import styles from '@styles/Order.moduele.scss';

const Order = () => {
    return(
        <div className={styles.Order}>
            <p>
                <span>03.25.21</span>
                <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <Image src={flecha} alt="arrow" />
        </div>
    );
};

export default Order;