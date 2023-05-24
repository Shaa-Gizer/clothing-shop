import React, {Component} from 'react';
import Item from "./Item";
import i from "../styles/Items.module.css"

class Items extends Component {
    render() {
        return (
            <main className={i.main}>
                {this.props.items.map(el => (
                    <Item key={el.id}
                          item={el}
                          addToOrders={this.props.addToOrders}
                          onShowItem={this.props.onShowItem}
                    />
                ))}
            </main>
        );
    }
}

export default Items;