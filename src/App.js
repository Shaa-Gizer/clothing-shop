import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: 'Item 1',
          img: '1.png',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, fugit!',
          maxDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda, consequatur culpa debitis deleniti dicta earum eveniet facilis, inventore libero mollitia officiis provident quasi quisquam rem repudiandae suscipit. Eaque, ipsam molestias! Adipisci alias consequatur, deserunt dignissimos ea eligendi expedita laborum maiores molestias odit officiis porro quae reprehenderit sequi, vel, voluptatem.',
          category: '1',
          price: '50'
        },
        {
          id: 2,
          title: 'Item 2',
          img: '2.png',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, fugit!',
          maxDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda, consequatur culpa debitis deleniti dicta earum eveniet facilis, inventore libero mollitia officiis provident quasi quisquam rem repudiandae suscipit. Eaque, ipsam molestias! Adipisci alias consequatur, deserunt dignissimos ea eligendi expedita laborum maiores molestias odit officiis porro quae reprehenderit sequi, vel, voluptatem.',
          category: '1',
          price: '50'
        },
        {
          id: 3,
          title: 'Item 3',
          img: '3.png',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, fugit!',
          maxDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda, consequatur culpa debitis deleniti dicta earum eveniet facilis, inventore libero mollitia officiis provident quasi quisquam rem repudiandae suscipit. Eaque, ipsam molestias! Adipisci alias consequatur, deserunt dignissimos ea eligendi expedita laborum maiores molestias odit officiis porro quae reprehenderit sequi, vel, voluptatem.',
          category: '2',
          price: '50'
        },
        {
          id: 4,
          title: 'Item 4',
          img: '4.png',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, fugit!',
          maxDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda, consequatur culpa debitis deleniti dicta earum eveniet facilis, inventore libero mollitia officiis provident quasi quisquam rem repudiandae suscipit. Eaque, ipsam molestias! Adipisci alias consequatur, deserunt dignissimos ea eligendi expedita laborum maiores molestias odit officiis porro quae reprehenderit sequi, vel, voluptatem.',
          category: '2',
          price: '50'
        },
        {
          id: 5,
          title: 'Item 5',
          img: '5.png',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, fugit!',
          maxDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda, consequatur culpa debitis deleniti dicta earum eveniet facilis, inventore libero mollitia officiis provident quasi quisquam rem repudiandae suscipit. Eaque, ipsam molestias! Adipisci alias consequatur, deserunt dignissimos ea eligendi expedita laborum maiores molestias odit officiis porro quae reprehenderit sequi, vel, voluptatem.',
          category: '3',
          price: '50'
        },
        {
          id: 6,
          title: 'Item 6',
          img: '6.png',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, fugit!',
          maxDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda, consequatur culpa debitis deleniti dicta earum eveniet facilis, inventore libero mollitia officiis provident quasi quisquam rem repudiandae suscipit. Eaque, ipsam molestias! Adipisci alias consequatur, deserunt dignissimos ea eligendi expedita laborum maiores molestias odit officiis porro quae reprehenderit sequi, vel, voluptatem.',
          category: '3',
          price: '50'
        }
        ,
        {
          id: 7,
          title: 'Item 7',
          img: '7.png',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, fugit!',
          maxDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda, consequatur culpa debitis deleniti dicta earum eveniet facilis, inventore libero mollitia officiis provident quasi quisquam rem repudiandae suscipit. Eaque, ipsam molestias! Adipisci alias consequatur, deserunt dignissimos ea eligendi expedita laborum maiores molestias odit officiis porro quae reprehenderit sequi, vel, voluptatem.',
          category: '3',
          price: '50'
        }
        ,
        {
          id: 8,
          title: 'Item 8',
          img: '8.png',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, fugit!',
          maxDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda, consequatur culpa debitis deleniti dicta earum eveniet facilis, inventore libero mollitia officiis provident quasi quisquam rem repudiandae suscipit. Eaque, ipsam molestias! Adipisci alias consequatur, deserunt dignissimos ea eligendi expedita laborum maiores molestias odit officiis porro quae reprehenderit sequi, vel, voluptatem.',
          category: '2',
          price: '50'
        },
        {
          id: 9,
          title: 'Item 9',
          img: '9.png',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, fugit!',
          maxDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda, consequatur culpa debitis deleniti dicta earum eveniet facilis, inventore libero mollitia officiis provident quasi quisquam rem repudiandae suscipit. Eaque, ipsam molestias! Adipisci alias consequatur, deserunt dignissimos ea eligendi expedita laborum maiores molestias odit officiis porro quae reprehenderit sequi, vel, voluptatem.',
          category: '1',
          price: '50'
        }
        ,
        {
          id: 10,
          title: 'Item 10',
          img: '10.png',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, fugit!',
          maxDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda, consequatur culpa debitis deleniti dicta earum eveniet facilis, inventore libero mollitia officiis provident quasi quisquam rem repudiandae suscipit. Eaque, ipsam molestias! Adipisci alias consequatur, deserunt dignissimos ea eligendi expedita laborum maiores molestias odit officiis porro quae reprehenderit sequi, vel, voluptatem.',
          category: '2',
          price: '50'
        }
        ,
        {
          id: 11,
          title: 'Item 11',
          img: '11.png',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, fugit!',
          maxDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda, consequatur culpa debitis deleniti dicta earum eveniet facilis, inventore libero mollitia officiis provident quasi quisquam rem repudiandae suscipit. Eaque, ipsam molestias! Adipisci alias consequatur, deserunt dignissimos ea eligendi expedita laborum maiores molestias odit officiis porro quae reprehenderit sequi, vel, voluptatem.',
          category: '1',
          price: '50'
        },
        {
          id: 12,
          title: 'Item 12',
          img: '12.png',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, fugit!',
          maxDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda, consequatur culpa debitis deleniti dicta earum eveniet facilis, inventore libero mollitia officiis provident quasi quisquam rem repudiandae suscipit. Eaque, ipsam molestias! Adipisci alias consequatur, deserunt dignissimos ea eligendi expedita laborum maiores molestias odit officiis porro quae reprehenderit sequi, vel, voluptatem.',
          category: '1',
          price: '50'
        }
      ],
      orders: [],
      currentItems: [],
      showFullItem: false,
      fullItem: {}
    }

    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  addToOrder(item) {

    let isInArr = false;
    this.state.orders.forEach(el => {
      if(el.id === item.id) {
        isInArr = true;
      }
    })

    if (!isInArr) {
      this.setState({orders: [...this.state.orders, item]})
    }
    else {
      item.length++
    }
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return;
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  onShowItem(item) {
    this.setState({fullItem: item});
    this.setState({showFullItem: !this.state.showFullItem});
  }

  render() {
    return (
        <div className="App">
          <Header orders={this.state.orders}
                  deleteOrder={this.deleteOrder}
          />
          <Categories chooseCategory={this.chooseCategory}/>
          <Items items={this.state.currentItems}
                 addToOrders={this.addToOrder}
                 onShowItem={this.onShowItem}
          />

          {this.state.showFullItem && <ShowFullItem item={this.state.fullItem}
                                                    addToOrders={this.addToOrder}
                                                    onShowItem={this.onShowItem}
          />}

          <Footer/>
        </div>
    )
  }
}

export default App;
