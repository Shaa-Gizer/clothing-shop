import React, {Component} from 'react';
import i from "../styles/Items.module.css"

class ShowFullItem extends Component {
    render() {
        return (
            <div className={i.fullItem}>
                <div>
                    <img src={'./img/' + this.props.item.img}
                         alt="good"
                         className={i.itemEl}
                         onClick={() => this.props.onShowItem(this.props.item)}/>
                    <h2 className={i.itemEl}>{this.props.item.title}</h2>
                    <p className={i.itemEl}>{this.props.item.maxDesc}</p>
                    <b className={i.itemEl}>{this.props.item.price}$</b>
                    <div
                        className={i.addToCart}
                        onClick={() => this.props.addToOrders(this.props.item)}
                    >+
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowFullItem;