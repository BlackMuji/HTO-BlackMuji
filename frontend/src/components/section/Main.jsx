import React from "react";
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from './Header';
import Search from './Search';
import Footer from './Footer';

const Main = (props) => {
    return (
        <HelmetProvider>
            <Helmet
                titleTemplate="%s | test"
                defaultTitle="test"
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />
            </Helmet>

            <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
                <Search />
            </div>
            <Header id="header" />
            <main id="main_dash" role="main">
                {props.children}
            </main>
            <Footer id="footer" />
        </HelmetProvider>
    )
}

export default Main;
