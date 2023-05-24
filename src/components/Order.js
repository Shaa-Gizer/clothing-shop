import React, {Component} from 'react';
import o from "../styles/Order.module.css"
import { FaTrash } from "react-icons/fa";

class Order extends Component {
    render() {
        return (
            <div className={o.item}>
                <img src={'./img/' + this.props.item.img} alt="good"/>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.price}$</p>
                <FaTrash className={o.deleteBtn}
                         onClick={() => this.props.deleteOrder(this.props.item.id)}
                />
            </div>
        );
    }
}

export default Order;