import React, { Component } from 'react'
import axios from 'axios'
import {motion} from "framer-motion";
import BlogListBlock from '../components/BlogListBlock'
import Body from '../components/Body'
import Head from 'next/head'

export default class index extends Component {


    render() {

      console.log(this.props.datas)

        return (
            <Body>
              <Head>
                <title>{this.props.datas.meta.metatitle}</title>
                <meta name="description" content={`${this.props.datas.meta.metadescription}`} />
              </Head>
            <div className="jl_post_loop_wrapper" id="wrapper_masonry">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 grid-sidebar" id="content">
                    <div className="jl_cat_mid_title">
                      <h3 className="categories-title title">All Blogs</h3>
                      
                    </div>
                    <div className="jl_wrapper_cat">
                      <div id="content_masonry" className="jl_cgrid pagination_infinite_style_cat load_more_main_wrapper">
                        {this.props.datas.blogs.map((data)=>{
                          return(
                            <BlogListBlock data={data} key={data._id} />
                          )
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4" id="sidebar">
                    <div className="jl_sidebar_w">
                      <div id="sprasa_widget_social_counter_c-2" className="widget jl-widget-social-counter">
                        <div className="widget-title">
                          <h2 className="jl_title_c">Stay Connected</h2>
                        </div>
                        <div className="jl_social_counter social_counter_wraper jl_count_style_2 social_counter_item>">
                          <div className="jlsocial-element jl-facebook jl_radus_e"> <a href="https://facebook.com/envato" className="facebook" title="facebook" /> <span className="jlsocial-element-left"> <i className="jli-facebook" aria-hidden="true" /> <span className="num-count">228.8k</span> </span> <span className="jlsocial-element-right">fans</span> </div>
                          <div className="jlsocial-element jl-youtube jl_radus_e"> <a href="https://www.youtube.com/user/envato" title="Youtube" /> <span className="jlsocial-element-left"> <i className="jli-youtube" aria-hidden="true" /> <span className="num-count">65.5k</span> </span> <span className="jlsocial-element-right">subscribers</span> </div>
                          <div className="jlsocial-element jl-vimeo jl_radus_e"> <a  href="https://vimeo.com/beeple" title="vimeo" /> <span className="jlsocial-element-left"> <i className="jli-vimeo" aria-hidden="true" /> <span className="num-count">240</span> </span> <span className="jlsocial-element-right">subscribers</span> </div>
                          <div className="jlsocial-element jl-pinterest jl_radus_e"> <a  href="https://pinterest.com/envato" className="pinterest" title="pinterest" /> <span className="jlsocial-element-left"> <i className="jli-pinterest" aria-hidden="true" /> <span className="num-count">9.87k</span> </span> <span className="jlsocial-element-right">followers</span> </div>
                        </div>
                      </div>
                      
                      
                      <div id="sprasa_ads300x250_widget-2" className="widget jellywp_ads300x250_widget">
                        <div className="widget_jl_wrapper ads_widget_container">
                          <div className="widget-title">
                            <h2 className="jl_title_c">Advertisement</h2>
                          </div>
                          <div className="ads300x250-thumb jl_radus_e"> <a href="#"> <motion.img src="img/ads.png" alt="" /> </a> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            </Body>
        )
    }
}


export async function getStaticProps(){
  const response = await axios.get(`${process.env.backendURL}/blog`);
  return {
    props: {
      datas:response.data,
    },
    revalidate: 5,
  }
}