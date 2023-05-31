import React, {useState} from 'react';
import h from '../styles/Header.module.css'
import {FaShoppingCart} from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
    let sum = 0;
    props.orders.forEach(el => sum += Number.parseFloat(el.price))
    return (
        <div>
            <span className={h.ordersTitle}>Your orders</span>
            {props.orders.map(el => (
                    <Order key={el.id}
                           item={el}
                           deleteOrder={props.deleteOrder}
                    />
            ))}
            <p className={h.total}>Total: {new Intl.NumberFormat().format(sum)}$</p>
        </div>
    )
}

const showNothing = () => {
    return (
        <div className={h.empty}>
            <h4>Cart is empty</h4>
        </div>
    )
}

const Header = (props) => {

    let [cartOpen, setCartOpen] = useState(false)

    const onClickCloseCart = () => setCartOpen(cartOpen = !cartOpen)

    return (
        <header className={h.header}>
            <div className={h.top}>
                <span className={h.title}>Clothing Shop</span>
                <nav className={h.menu}>
                    <span className={h.menuItem}>Home</span>
                    <span className={h.menuItem}>Search</span>
                    <span className={h.menuItem}>Categories</span>
                    <span className={h.menuItem}>About</span>
                    <span className={h.menuItem}>Contacts</span>

                    <div className={h.cart}>
                        <FaShoppingCart
                            className={`${h.shopCartBtn} ${cartOpen && h.active}`}
                            onClick={onClickCloseCart}
                        />
                        <div className={h.cartLength}>{props.orders.length}</div>
                    </div>

                    {cartOpen && (
                        <div className={h.shopCart}>
                            <span className={h.closeCart}
                                  onClick={onClickCloseCart}
                            >x</span>
                            {props.orders.length > 0 ?
                                showOrders(props) : showNothing()
                            }
                        </div>
                    )}

                    <div className={h.authentication}>
                        <span className={h.menuItem}>Log in</span>
                        <span className={h.menuItem}>Sign up</span>
                    </div>
                </nav>
            </div>
            <div className={h.presentation}></div>
        </header>
    );
};

export default Header;