import React from "react";
import "./Main.css";
import react from "./react.png";

export default class Main extends React.Component{
    render(){
        return(
            <main>
                <p>Este é um pequeno teste de uma aplicação <a href="https://reactjs.org/" itemRef="url">React</a></p>
                <figure  className="react">
                    <img src={react} className="logo-react" itemProp="image"/>
                </figure>
            </main>
        );
    }
}