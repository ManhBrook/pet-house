import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./containers/home";
import Products from "./containers/products";
import Details from "./containers/products/details";
import Contact from "./containers/contact";
import Review from "./containers/review";

const Wrapper = styled.div`
    margin-top: 80px;
`;

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <Wrapper>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/review">
                        <Review />
                    </Route>
                    <Route path="/products/details">
                        <Details />
                    </Route>
                    <Route path="/products">
                        <Products />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Wrapper>
            <Footer />
        </Router>
    );
}

export default App;
