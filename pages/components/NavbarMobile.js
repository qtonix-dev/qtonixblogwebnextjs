import React, { Component } from 'react'
import Link from 'next/link'
import axios from 'axios'

export default class NavbarMobile extends Component {

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
console.log(menus)
        return (
            <>



                {/* <ul id="mobile_menu_slide" className="menu_moble_slide">
                        <li className="menu-item current-menu-item current_page_item"> <a href="index-2.html">Home<span className="border-menu" /></a></li>
                        <li className="menu-item menu-item-has-children">
                        <a href="#">Features<span className="border-menu" /></a>
                        <ul className="sub-menu">
                            <li className="menu-item menu-item-has-children">
                            <a href="post-layout-1.html">Post Layout<span className="border-menu" /></a>
                            <ul className="sub-menu">
                                <li className="menu-item"> <a href="post-layout-1.html">Post Layout 1<span className="border-menu" /></a></li>
                                <li className="menu-item"> <a href="post-layout-2.html">Post Layout 2<span className="border-menu" /></a></li>
                                <li className="menu-item"> <a href="post-layout-3.html">Post Layout 3<span className="border-menu" /></a></li>
                            </ul>
                            </li>
                            <li className="menu-item menu-item-has-children">
                            <a href="post-format-standard.html">Post Format<span className="border-menu" /></a>
                            <ul className="sub-menu">
                                <li className="menu-item"> <a href="post-format-standard.html">Post format standard<span className="border-menu" /></a></li>
                                <li className="menu-item"> <a href="post-format-gallery.html">Post format gallery<span className="border-menu" /></a></li>
                                <li className="menu-item"> <a href="post-format-quote.html">Post Format Quote<span className="border-menu" /></a></li>
                                <li className="menu-item"> <a href="post-format-video.html">Post format video<span className="border-menu" /></a></li>
                                <li className="menu-item"> <a href="post-format-audio.html">Post format audio<span className="border-menu" /></a></li>
                            </ul>
                            </li>
                            <li className="menu-item"> <a href="author.html">Author Page<span className="border-menu" /></a></li>
                            <li className="menu-item"> <a href="category.html">Category Page<span className="border-menu" /></a></li>
                            <li className="menu-item"> <a href="page-404.html">Page 404<span className="border-menu" /></a></li>
                        </ul>
                        </li>
                        <li className="menu-item"> <a href="inspiration.html">Inspiration<span className="border-menu" /></a></li>
                        <li className="menu-item"> <a href="category.html">Active<span className="border-menu" /></a></li>
                        <li className="menu-item"> <a href="business.html">Business<span className="border-menu" /></a></li>
                        <li className="menu-item menu-item-has-children">
                        <a href="shop.html">Shop<span className="border-menu" /></a>
                        <ul className="sub-menu">
                            <li className="menu-item"> <a href="cart.html">Cart<span className="border-menu" /></a></li>
                            <li className="menu-item"> <a href="my-account.html">My Account<span className="border-menu" /></a></li>
                        </ul>
                        </li>
                    </ul> */}





              <ul id="mobile_menu_slide" className="menu_moble_slide">


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
