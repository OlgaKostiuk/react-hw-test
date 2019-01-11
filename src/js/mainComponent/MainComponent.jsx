import React from 'react';
import './mainComponent.less';
import ContextConfig from '../context/context.jsx';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../login/Login.jsx';
import Home from '../home/Home.jsx';
import Navigator from '../navigator/Navigator.jsx';
import {languages} from "../../constants/languages";

export default class MainComponent extends React.Component {
    state = {
        isLogin: false,
        username: '',
        password: '',
        language: languages.en,
        showHints: false
    };

    setLanguage = lang => {
        this.setState({language: lang});
    };

    toggleShowHints = () => {
        this.setState(prevState => ({ showHints: !prevState.showHints }));
    };

    toggleLogin = (username, password) => {
        this.setState(() => ({isLogin: true, username: username, password: password}));
    };

    toggleLogout = () => {
        this.setState(() => ({isLogin: false, username: '', password: ''}));
    };

    render() {
        const settingsContext = {
            language: this.state.language,
            setLanguage: this.setLanguage,
            showHints: this.state.showHints,
            toggleShowHints: this.toggleShowHints
        };
        const { isLogin, username } = this.state;
        return (
            <div className="page-wrapper">
                <ContextConfig.Provider value={settingsContext}>
                    <header className="header page-wrapper__header">
                        <Header/>
                    </header>
                    <main className="content page-wrapper__content">
                        <BrowserRouter>
                            <>
                                <Navigator
                                    isLogin={isLogin}
                                    username={username}
                                    callbackLogout={this.toggleLogout}
                                />
                                <Switch>
                                    <Route path={'/login'} component={() => (!isLogin ? <Login callbackLogin={this.toggleLogin}/> : <Redirect to={'/'}/>)} />
                                    <Route path={'/'} component={() => <Home isLogin={isLogin}/>}/>
                                </Switch>
                            </>
                        </BrowserRouter>
                    </main>
                    <footer className="footer page-wrapper__footer">
                        <Footer/>
                    </footer>
                </ContextConfig.Provider>
            </div>
        );
    }
}
