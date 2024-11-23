//페이지 임포트
import './App.css';
import Categori from './pages/categori.js';
import Search from './pages/search.js';
import Main from './pages/main.js';
import Info from './pages/info.js';
import Cart from './pages/cart.js';

//라이브러리 임포트
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';






let NavBar = ()=>{
				return(
				<>
				<div className="nav">
				<Container className="navBar">
								<Row>
												<Col className="customCol">
																<Link className="linkcss" to="/categori" > 카테고리 </Link>
				</Col>
												<Col className="customCol">
																<Link className="linkcss" to="/search"> 검색 </Link>
				</Col>
												<Col className="customCol">
																<Link className="linkcss" to="/main"> 쿠팡홈 </Link>
				</Col>
												<Col className="customCol">
																<Link className="linkcss" to="/info"> 마이쿠팡 </Link>
				</Col>
												<Col className="customCol">
																<Link className="linkcss" to="/cart"> 장바구니 </Link>
				</Col>
				
				
				</Row>
				</Container>
				</div>
				</>
				)
}



function App() {
  return (
  
  
  
  
    <div className="App">
								<NavBar />
								<Routes>
													<Route path="/categori" element={<Categori />}>
  </Route>
													<Route path="/search" element={<Search />}></Route>
													<Route path="/main" element={<Main />}></Route>
													<Route path="/info" element={<Info />}></Route>
													<Route path="/cart" element={<Cart />}></Route>
								</Routes>
  
  
    </div>
  );
}

export default App;
