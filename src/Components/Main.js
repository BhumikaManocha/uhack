import React,{Component,useState} from 'react';
import Header from './HeaderComponent/HeaderComponent';
import Categories from './categoriesComponent/categories';

import Userinfo from '../Components/Userinfo';



class Main extends Component{
    
    render(){
        return(
            <>
           <Header/>
           <Categories/>
           <Userinfo/>
           </>
        );
    }
}

export default Main;