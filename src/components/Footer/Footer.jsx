import React from "react";
import "./Footer.css";
import FooterList from "../FooterList/FooterList.jsx";

export default class Footer extends React.Component{
    render(){
        return(
            <footer itemScope itemtype="http://schema.org/ProfilePage">
                
                    <FooterList />
                
            </footer>
        );
    }
}