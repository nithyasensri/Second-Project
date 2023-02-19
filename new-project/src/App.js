import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios'
import Home from './components/Home';
import About from './components/About';
import Fruits from './components/fruits';
import Veggies from './components/veggies';
import Contactus from './components/contact';
import AddProducts from './components/AddProducts';
import AddCart from './components/addcart';
import Productinfo from './components/productinfo';
import Searchinfo from './components/search';
import Footer from './components/footer';

import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';





function App() {



  const [cart, setCart] = useState([]);
  const [viewcart, setviewCart] = useState([]);
  const [searchVal, setsearchVal] = useState([])

  const [finsearchVal, setfinalsearchVal] = useState([])

  const [veggies, setVeggies] = useState([]);
  const [fruits, setFruits] = useState([]);
  const [openCart, setopenCart] = useState(false)

  const [isComplete, setIsComplete] = useState(false)
  const [info, infosetproduct] = useState([]);

  const [infosearch, setinfosearch] = useState(false);
  const [serinfopage, setserinfopage] = useState(false);

  const remData = (i) => {
    // console.log(i._id == cart._id)
    setCart(cart.filter((items) => items._id !== i))
    // console.log(cart)
  }

  const addCart = async (data) => {
    // console.log(data)
    const cartItem = await cart.find((x) => x._id === data._id)
    // console.log(cartItem)

    if (cartItem) {

      setCart(cart.map((e) =>
        e.id === data._id ? { ...cartItem, Quantity: cartItem.Quantity + 1 } : e
      ))
    }

    else {
      setCart([...cart, data])
      // console.log(cart);
    }


  }

  const Increase = (i) => {
    // console.log(veggies, i);
    setVeggies(veggies => veggies.map((items) => {
      if (items._id === i) {
        var quantityVal = items.Quantity + 1
        return { ...items, Quantity: quantityVal, Rupees: quantityVal * items.FixRupees }
      }
      return items;
    }))

  }

  const Decrease = (i) => {
    setVeggies(veggies => veggies.map((items) => {
      if (items._id === i) {
        var quantityVal = items.Quantity - 1
        return { ...items, Quantity: quantityVal, Rupees: quantityVal * items.FixRupees }
      }
      return items;
    }))
  }


  const fruIncrease = (i) => {
    // console.log(fruits, i);
    setFruits(fruits => fruits.map((items) => {
      if (items._id === i) {
        var quantityVal = items.Quantity + 1
        return { ...items, Quantity: quantityVal, Rupees: quantityVal * items.FixRupees }
      }
      return items;
    }))

  }

  const fruDecrease = (i) => {
    setFruits(fruits => fruits.map((items) => {
      if (items._id === i) {
        var quantityVal = items.Quantity - 1
        return { ...items, Quantity: quantityVal, Rupees: quantityVal * items.FixRupees }
      }
      return items;
    }))
  }






  const basketClick = () => {
    return setopenCart(!openCart);
  }

  const closebtn = () => {
    return setopenCart(!openCart);
  }

  const cartIncrease = async (i) => {

    setCart(cart => cart.map((items) => {
      if (items._id === i._id) {
        var Quantity = items.Quantity + 1
        return { ...items, Quantity: Quantity, Rupees: items.FixRupees * Quantity }
      }
      return items;
    }))

  }

  const cartPlus = async (items) => {
    console.log('items');
    var Quantity = items.Quantity + 1
    console.log(items);
    infosetproduct({ ...items, Quantity: Quantity, Rupees: items.FixRupees * Quantity })
    // console.log(info);

  }

  const cartMinus = async (items) => {

    var Quantity = items.Quantity - 1
    // console.log(items, info);
    infosetproduct({ ...items, Quantity: Quantity, Rupees: items.FixRupees * Quantity })
    // console.log(info);

  }


  const serPlus = async (items) => {
    console.log('items');
    var Quantity = items.Quantity + 1
    console.log(items);
    setfinalsearchVal({ ...items, Quantity: Quantity, Rupees: items.FixRupees * Quantity })
    // console.log(info);

  }

  const serMinus = async (items) => {

    var Quantity = items.Quantity - 1
    // console.log(items, info);
    setfinalsearchVal({ ...items, Quantity: Quantity, Rupees: items.FixRupees * Quantity })
    // console.log(info);

  }


  const cartDecrease = async (i) => {
    setCart(cart => cart.map((items) => {
      if (items._id === i._id) {
        var Quantity = items.Quantity - 1
        return { ...items, Quantity: Quantity, Rupees: items.FixRupees * Quantity }
      }
      return items;
    }))
  }




  // console.log(cartqty);
  const cartCountItem = cart.length;
  const cartCountTotal = cart.reduce((acc, item) => acc + item.Rupees, 0);
  // const cartPriceTotal = cart.reduce(
  //   (acc, item) => acc + item.price * item.quantity,
  //   0
  // );

  const cartcheck = async () => {
    var data = cart
    console.log(data);
    const result = await axios.post('http://localhost:3000/info/addcart', data)
      .then(function (response) {
        // console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleSubmit = (e) => {
    setsearchVal(e.target.value);

  }

  const submitSearch = () => {
    console.log(cart)
    console.log(searchVal);
    setinfosearch(true);
    var newVal = searchVal.toLowerCase();
    var searchval = veggies.find(e => e.Name.toLowerCase() === newVal) ||
      fruits.find(e => e.Name.toLowerCase() === newVal)
    console.log(searchval);
    setfinalsearchVal(searchval);

  }

  const newbtn = () => {
    setinfosearch(false);
    setserinfopage(false)
  }

  const productinfo = (data) => {
    console.log(data);
    setIsComplete(!isComplete);
    infosetproduct(data);
  }
  const infopage = () => {
    console.log('aa')
    setIsComplete(false);
  }

  const infoser = (data) => {
    console.log(data)
    setserinfopage(true);
    infosetproduct(data);
  }

  const serlink =() =>{
    console.log('aa');
    setinfosearch(false);
  }



  useEffect(() => {
    fetch('http://localhost:3000/info')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setVeggies(data)
      });

    fetch('http://localhost:3000/info/addcart')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setviewCart(data)
      });

    fetch('http://localhost:3000/info/fruits')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setFruits(data)
      });


  }, [])

  // console.log(addcart)
  // console.log(isComplete);
  // console.log(addcart)
  // console.log(data)
  // console.log(file, fileName)
  // console.log(veggies)
  // console.log(cartCountItem,cartCountTotal)

  // console.log(fruits);
  // console.log(finsearchVal)
  console.log(serinfopage)

  return (<Router>
    <Container fluid>
      <Row>
        <div className="main-header">
          <Row>
            <Navbar basketClick={basketClick} cartCountItem={cartCountItem}
              handleSubmit={handleSubmit} submitSearch={submitSearch} newbtn={newbtn} />
          </Row>

          <Switch>
            <Route path="/addproducts">
              <AddProducts />
            </Route>

            {infosearch ?
              <Link to="/about">
                <Searchinfo finsearchVal={finsearchVal} addCart={addCart}
                  serPlus={serPlus} serMinus={serMinus} infoser={infoser} serinfopage={serinfopage} 
                  serlink={serlink}/>
              </Link> : ""
            }

            {/* {serinfopage ? <Link to="/about">
              <Searchinfo info={info} serinfopage={serinfopage} infopage={infopage} />
            </Link> : ""} */}
            {/* <Route path="/about">
              <About />
            </Route> */}
            {/* <Route path="/fruits">
            <Fruits fruits={fruits} fruIncrease={fruIncrease} fruDecrease={fruDecrease}
              addCart={addCart} productinfo={productinfo} />
          </Route> */}
            {/* <Route path="/fruits"> */}
            {isComplete ? <Link to="/infoaa"><Productinfo info={info} infopage={infopage} addCart={addCart}
              cartPlus={cartPlus} cartMinus={cartMinus} /></Link> : <Route path="/fruits">
              <Fruits fruits={fruits} fruIncrease={fruIncrease} fruDecrease={fruDecrease}
                addCart={addCart} productinfo={productinfo} />
            </Route>
            }


            {isComplete ? <Link to="/infoaa"><Productinfo info={info} infopage={infopage} addCart={addCart}
              cartPlus={cartPlus} cartMinus={cartMinus} /></Link> :
              <Route path="/veggies">
                <Veggies veggies={veggies} Increase={Increase} Decrease={Decrease}
                  addCart={addCart} productinfo={productinfo} />
              </Route>
            }
            <Route path="/contacts">
              <Contactus />
            </Route>
            <Route path="/">
              <Home fruits={fruits} veggies={veggies} addCart={addCart}
                productinfo={productinfo} />
            </Route>
          </Switch>
        </div>
        <div>
          <div>
            {/* <input type="text" onChange={(e) => handleSubmit(e)} />
            <button type='submit' onClick={() => submitSearch()}>Search</button>
            <br /> */}
            {/* <div className='basketClick' onClick={basketClick}><p>Cart</p></div> */}

            {openCart ? <AddCart cartCountItem={cartCountItem} cartCountTotal={cartCountTotal}
              cart={cart} cartIncrease={cartIncrease} cartDecrease={cartDecrease} remData={remData}
              cartcheck={cartcheck} viewcart={viewcart} openCart={openCart} closebtn={closebtn} />
              : <AddCart cartCountItem={cartCountItem} cartCountTotal={cartCountTotal}
                cart={cart} cartIncrease={cartIncrease} cartDecrease={cartDecrease} remData={remData}
                cartcheck={cartcheck} viewcart={viewcart} openCart={openCart} closebtn={closebtn} />}
          </div>
          {/* {isComplete ?
            <Link to="/infoaa"><Productinfo info={info} infopage={infopage} addCart={addCart}
              cartPlus={cartPlus} cartMinus={cartMinus} /></Link> : ""
          } */}
          {/* {infosearch ?
            <Link to="/search"><Searchinfo finsearchVal={finsearchVal} infopage={infopage} addCart={addCart}
              cartPlus={cartPlus} cartMinus={cartMinus} /></Link> : ""
          } */}

          <Footer newbtn={newbtn} />

        </div>
      </Row>
    </Container>
  </Router>
  );
}

export default App;
