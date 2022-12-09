import React, { useContext } from "react";
import OrderItem from "@components/OrderItem";
import AppContext from '@context/AppContext';
import flecha from '@icons/flechita.svg';
import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
    const { state } = useContext(AppContext);

    const sumTotal = () => {
        const reducer = (accumalator, currentValue) =>  accumalator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    }

    return (
        <aside className={styles.MyOrder}>
            <div className="title-container">
                <img src={flecha} alt="arrow" />
                <p className="title">My order</p>
            </div>
            <div className="my-order-content">
                { state.cart.map((product, index) => {
                    return <OrderItem product={product} indexValue={index} key={index} />
                })}
                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>${sumTotal()}</p>
                </div>
                <button className="primary-button">
                    Checkout
                </button>
            </div>
        </aside>
    );
};

export default MyOrder;