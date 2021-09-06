import React, { Component } from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from './Navbar'
import NavbarMobile from './NavbarMobile'
import {motion} from "framer-motion";
import axios from 'axios'
import {changeTheme} from '../../store/actions'
import cookie from 'react-cookies'

export class Body extends Component {

    state={
        mclass:'',
        theme:'today',
        sidenav:true
    }


    handleDarkModChange=e=>{
        cookie.save('themetype121212', e)
        this.props.changeTheme(e)
        
        if(e==='today'){
            this.setState({
                mclass:'',
                theme:'today'
            })
        }else{
            this.setState({
                mclass:'options_dark_skin',
                theme:'tonight'
            })
        }

    }


    componentDidMount(){
        var theme =cookie.load('themetype121212')
        console.log(theme)
        
        if(theme===undefined){
            this.setState({
                mclass:'',
                theme:'today'
            })
        }else{
            if(theme==='today'){
                this.setState({
                    mclass:'',
                    theme:'today'
                })
            }else{
                this.setState({
                    mclass:'options_dark_skin',
                    theme:'tonight'
                })  
            }
        }
    }


    handleShowHideNav=()=>{
        if(this.state.sidenav){
            this.setState({sidenav:false})
        }else{
            this.setState({sidenav:true})
        }
    }

    

    render() {

        // var theme =this.props.theme;
        

        

        return (
            <>
            <Head>
             
                
                </Head>

                <div id="themetype" className={`options_layout_wrapper jl_clear_at jl_radius jl_none_box_styles jl_border_radiuss jl_en_day_night `+this.state.mclass}>
                
                
                <div className="options_layout_container full_layout_enable_front">
                <header className="header-wraper jl_header_magazine_style two_header_top_style header_layout_style3_custom jl_cus_top_share">
                    <div className="header_top_bar_wrapper">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-12">
                            <div className="menu-primary-container navigation_wrapper">
                            <ul id="jl_top_menu" className="jl_main_menu">
                                <li className="menu-item current-menu-item current_page_item"> <a href="index-2.html">Home<span className="border-menu" /></a></li>
                                <li className="menu-item menu-item-4278"> <a href="#">About Us<span className="border-menu" /></a></li>
                                <li className="menu-item menu-item-4279"> <a href="#">special offer<span className="border-menu" /></a></li>
                                <li className="menu-item menu-item-4275"> <a href="#">Info!!<span className="border-menu" /></a></li>
                            </ul>
                            </div>
                            <div className="jl_top_cus_social">
                            <div className="menu_mobile_share_wrapper">
                                <span className="jl_hfollow">Share us</span>
                                <ul className="social_icon_header_top jl_socialcolor">
                                <li> <a className="facebook" href="#" target="_blank"><i className="jli-facebook" /></a></li>
                                <li> <a className="vk" href="#" target="_blank"><i className="jli-vk" /></a></li>
                                <li> <a className="telegram" href="#" target="_blank"><i className="jli-telegram" /></a></li>
                                <li> <a className="behance" href="#" target="_blank"><i className="jli-behance" /></a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* Start Main menu */}
                    <div className="jl_blank_nav" />
                    <div id="menu_wrapper" className="menu_wrapper jl_menu_sticky jl_stick">
                    <div className="container">
                        <div className="row">
                        <div className="main_menu col-md-12">
                            <div className="logo_small_wrapper_table">
                            <div className="logo_small_wrapper">
                                {/* begin logo */}
                                <a className="logo_link" href="index-2.html">
                                    <motion.img className="jl_logo_n" src="/images/logoblack.png" alt="sprasa" />
                                    <motion.img className="jl_logo_w" src="/images/logowhite.png" alt="sprasa" />
                                </a>{/* end logo */}
                            </div>
                            </div>
                            <div className="search_header_menu jl_nav_mobile">
                            <div className="menu_mobile_icons" onClick={this.handleShowHideNav}>
                                <div className="jlm_w"><span className="jlma" /><span className="jlmb" /><span className="jlmc" /></div>
                            </div>
                            
                                {this.state.theme==='today'
                                    ?
                                        <>
                                        
                                        <div id="themeday" className="jl_day_night jl_day_en" onClick={()=>this.handleDarkModChange('tonight')}> 
                                            <span className="jl-night-toggle-icon"> 
                                                <span className="jl_moon"> <i className="jli-moon"  /></span>
                                                <span className="jl_sun"> <i className="jli-sun" /></span>
                                            </span>
                                        </div>
                                       
                                        </>
                                    :
                                        <>
                             
                                        <div id="themeday1" className="jl_day_night jl_night_en" onClick={()=>this.handleDarkModChange('today')}> 
                                            <span className="jl-night-toggle-icon"> 
                                                <span className="jl_moon"> <i className="jli-moon"  /></span>
                                                <span className="jl_sun"> <i className="jli-sun" /></span>
                                            </span>
                                        </div>
                                       
                             </>
                            }



                            </div>




                            <div className="menu-primary-container navigation_wrapper jl_cus_share_mnu">
                                <Navbar />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>

                <div id="content_nav" className="jl_mobile_nav_wrapper jl_mobile_nav_open" hidden={this.state.sidenav}>
                    <div id="nav" className="jl_mobile_nav_inner">
                    <div className="menu_mobile_icons mobile_close_icons closed_menu" onClick={this.handleShowHideNav}> <span className="jl_close_wapper"><span className="jl_close_1" /><span className="jl_close_2" /></span></div>
                    

                    <NavbarMobile />
                    
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



                    <div id="sprasa_recent_post_text_widget-11" className="widget post_list_widget">
                        <div className="widget_jl_wrapper">
                        <div className="ettitle">
                            <div className="widget-title">
                            <h2 className="jl_title_c">Advertisement</h2>
                            </div>
                        </div>
                        {/* <div className="bt_post_widget">
                            <div className="jl_m_right jl_sm_list jl_ml jl_clear_at">
                            <div className="jl_m_right_w">
                                <div className="jl_m_right_img jl_radus_e"><a href="#"><motion.img width={120} height={120} src="img/pexels-ichad-windhiagiri-3993407-scaled-120x120.jpg" className="attachment-sprasa_small_feature size-sprasa_small_feature wp-post-image" alt="" loading="lazy" /></a></div>
                                <div className="jl_m_right_content">
                                <h2 className="entry-title"><a href="#" tabIndex={-1}>Best inspire dark photo in the winter season</a></h2>
                                <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 23, 2016</span></span>
                                </div>
                            </div>
                            </div>
                            <div className="jl_m_right jl_sm_list jl_ml jl_clear_at">
                            <div className="jl_m_right_w">
                                <div className="jl_m_right_img jl_radus_e"><a href="#"><motion.img width={120} height={120} src="img/ben-o-sullivan-GNp7ng0lR-8-unsplash-scaled-120x120.jpg" className="attachment-sprasa_small_feature size-sprasa_small_feature wp-post-image" alt="" loading="lazy" /></a></div>
                                <div className="jl_m_right_content">
                                <h2 className="entry-title"><a href="#" tabIndex={-1}>Your job will be perfect if you concentrate</a></h2>
                                <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 23, 2016</span></span>
                                </div>
                            </div>
                            </div>
                            <div className="jl_m_right jl_sm_list jl_ml jl_clear_at">
                            <div className="jl_m_right_w">
                                <div className="jl_m_right_img jl_radus_e"><a href="#"><motion.img width={120} height={120} src="img/pexels-unviajesinmaleta-3404200-120x120.jpg" className="attachment-sprasa_small_feature size-sprasa_small_feature wp-post-image" alt="" loading="lazy" /></a></div>
                                <div className="jl_m_right_content">
                                <h2 className="entry-title"><a href="#" tabIndex={-1}>Enjoy the best time with a special person</a></h2>
                                <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 23, 2016</span></span>
                                </div>
                            </div>
                            </div>
                        </div> */}
                        </div>
                    </div>
                    <div id="sprasa_about_us_widget-3" className="widget jellywp_about_us_widget">
                        <div className="widget_jl_wrapper about_widget_content">
                        <div className="jellywp_about_us_widget_wrapper">
                            <div className="social_icons_widget">
                            <ul className="social-icons-list-widget icons_about_widget_display">
                                <li> <a href="#" className="facebook" target="_blank"><i className="jli-facebook" /></a></li>
                                <li> <a href="#" className="behance" target="_blank"><i className="jli-behance" /></a></li>
                                <li> <a href="#" className="vimeo" target="_blank"><i className="jli-vimeo" /></a></li>
                                <li> <a href="#" className="youtube" target="_blank"><i className="jli-youtube" /></a></li>
                                <li> <a href="#" className="instagram" target="_blank"><i className="jli-instagram" /></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>


                <div className="search_form_menu_personal">
                    <div className="menu_mobile_large_close"> <span className="jl_close_wapper search_form_menu_personal_click"><span className="jl_close_1" /><span className="jl_close_2" /></span></div>
                    <form method="get" className="searchform_theme" action="#"><input type="text" placeholder="Search..." defaultValue name="s" className="search_btn" /><button type="submit" className="button"><i className="jli-search" /></button></form>
                </div>
                <div className="mobile_menu_overlay" />


                {/* <div className="jl_home_bw"> */}

                    {/* BODY */}


                    {this.props.children}


                    {/* END BODY */}
                {/* </div> */}




                {/* end content */}{/* Start footer */}
                <footer id="footer-container" className="jl_footer_act enable_footer_columns_dark">
                 
                    <div className="footer-bottom enable_footer_copyright_dark">
                    <div className="container">
                        <div className="row bottom_footer_menu_text">
                        <div className="col-md-12">
                            <div className="jl_ft_w">
                            Copyright 2021 Qtonix. All rights reserved powered by Qtonix Software Pvt Ltd
                            <ul id="menu-footer-menu" className="menu-footer">
                                <li className="menu-item menu-item-6"> <a title href="#">About Us</a></li>
                                <li className="menu-item menu-item-7"> <a title href="#">Private policy</a></li>
                                <li className="menu-item menu-item-8"> <a title href="#">Forums</a></li>
                                <li className="menu-item menu-item-9"> <a title href="#">Community</a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </footer>
                {/* End footer */}
                {/* <div id="go-top"> <a href="#go-top"><i className="jli-up-chevron" /></a></div> */}
                </div>
            </div>
 
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    theme:state.theme
})


export default connect(mapStateToProps, {changeTheme})(Body)

