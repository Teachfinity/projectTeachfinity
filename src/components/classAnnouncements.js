import React, { Component } from "react";
import MyLoader from "./content-loader" ;

class classAnnouncements extends Component{
    constructor(props){
        super(props) ;
    }

    render(){
        return(
            <>
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader /> 

            </>
        )
    }
}

export default classAnnouncements ;