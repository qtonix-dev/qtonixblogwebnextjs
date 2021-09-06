import React, { Component } from 'react'
import Link from 'next/link'
import axios from 'axios'

export default class Navbar extends Component {

    state={
        menus:null
    }

    componentDidMount(){
        axios.get(`${process.env.backendURL}/menu/5ff7218cb35f4f4170697f28`)
        .then(res=>{
            this.setState({
                    menus:res.data.data.menu
            })
        })
    }


    render() {
    var menus = this.state.menus;

        return (
            <>
              <ul id="mainmenu" className="jl_main_menu">


              <li className="menu-item current-menu-item current_page_item">
                                                
                                                <Link exact href='/'><a>Home<span className="border-menu" /></a></Link>
                                                
                                            </li>

                            {menus===null
                            ?
                            <>
                            </>
                            :
                            <>
                            {menus.map((menu)=>{
                                        return(
                                            menu.children !== undefined && menu.children.length > 0
                                            ?
                                            <li key={menu._id} className="menu-item menu-item-has-children">
                                                <Link exact href={menu.url}><a>{menu.text}<span className="border-menu" /></a></Link>
                                                <ul className="sub-menu">
                                                    {menu.children.map((menu1)=>{
                                                        return(
                                                            menu1.children !== null && menu1.children.length > 0
                                                            ?
                                                            <li key={menu1._id} className="menu-item menu-item-has-children">
                                                                {menu1.type !== 'custom'
                                                                ?
                                                                <Link exact href={menu1.url}><a>{menu1.text}<span className="border-menu" /></a></Link>
                                                                :
                                                                <a href={menu1.url} >{menu1.text}<span className="border-menu" /></a>
                                                                }
                                                                <ul className="sub-menu">

                                                                {menu1.children.map((menu2)=>{
                                                                    return(
                                                                        menu2.children !== null && menu2.children.length > 0 
                                                                        ?
                                                                        <></>
                                                                        :
                                                                        <li key={menu2._id} className="menu-item">
                                                                            {menu2.type !== 'custom'
                                                                            ?
                                                                            <Link exact href={menu2.url}><a>{menu2.text}<span className="border-menu" /></a></Link>
                                                                            :
                                                                            <a href={menu2.url} >{menu2.text}<span className="border-menu" /></a>
                                                                            }
                                                                        </li>
                                                                    )
                                                                })}
                                                                </ul>
                                                            </li>
                                                            :
                                                            <li key={menu1._id} className="menu-item">
                                                                {menu1.type !== 'custom'
                                                                ?
                                                                <Link exact href={menu1.url}><a>{menu1.text}<span className="border-menu" /></a></Link>
                                                                :
                                                                <a href={menu1.url} >{menu1.text}<span className="border-menu" /></a>
                                                                }
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                            :
                                            <li  key={menu._id} className="menu-item current-menu-item current_page_item">
                                                {menu.type !== 'custom'
                                                ?
                                                <Link exact href={menu.url}><a>{menu.text}<span className="border-menu" /></a></Link>
                                                :
                                                <a href={menu.url} >{menu.text}<span className="border-menu" /></a>
                                                }
                                            </li>
                                        )
                                    })}
                                    </>}                               
                            </ul>  
            </>
        )
    }
}

export async function getStaticProps(){
    const response = await axios.get(`${process.env.backendURL}/menu/5ff7218cb35f4f4170697f28`);
    return {
      props: {
        menus:response.data.data.menu,
      },
      revalidate: 5,
    }
  }
