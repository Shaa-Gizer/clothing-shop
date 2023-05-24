import React, {Component} from 'react';
import c from "../styles/Categories.module.css"

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: '1',
                    name: 'Category 1'
                },
                {
                    key: '2',
                    name: 'Category 2'
                },
                {
                    key: '3',
                    name: 'Category 3'
                }
            ]
        }
    }

    render() {
        return (
            <div className={c.categories}>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        );
    }
}

export default Categories;