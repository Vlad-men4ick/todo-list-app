import { Component } from "react";

export default class Header extends Component{

    render(){
        return(
            <header className="header">
                <h1>todos</h1>
                {this.props.children}
            </header>
        )
    }
}