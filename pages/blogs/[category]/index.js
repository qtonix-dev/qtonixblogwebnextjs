import React, { Component } from 'react'
import BlogListBlock from '../../components/BlogListBlock'
import Body from '../../components/Body'
import {motion} from "framer-motion";
import Head from 'next/head'
import axios from 'axios'


export default class index extends Component {


  static async getInitialProps({query}) {
      var data ={query};
      const response = await axios.get(`${process.env.backendURL}/blog/category/${data.query.category}`);
      const response2 = await axios.get(`${process.env.backendURL}/blogcategory/view/${data.query.category}`);

      
      return{
          datas:response.data.data,
          pageinfo:response2.data.data
      }
  }

    render() {
      console.log(this.props)
        return (
            <Body>
              <Head>
            <title>{this.props.pageinfo.metatitle}</title>
            <meta name="description" content={`${this.props.pageinfo.metadesc}`} />
          </Head>
              
              <div className="jl_post_loop_wrapper" id="wrapper_masonry">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 grid-sidebar" id="content">
                      <div className="jl_cat_mid_title">
                        <h3 className="categories-title title">{this.props.pageinfo.name} Blogs</h3>
                        <p>{this.props.pageinfo.description}</p>
                      </div>
                      <div className="jl_wrapper_cat">
                        <div id="content_masonry" className="jl_cgrid pagination_infinite_style_cat load_more_main_wrapper">
                         
                          {this.props.datas.map((data)=>{
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
                            <div className="jlsocial-element jl-facebook jl_radus_e"> <a  href="https://facebook.com/envato" className="facebook" title="facebook" /> <span className="jlsocial-element-left"> <i className="jli-facebook" aria-hidden="true" /> <span className="num-count">228.8k</span> </span> <span className="jlsocial-element-right">fans</span> </div>
                            <div className="jlsocial-element jl-youtube jl_radus_e"> <a  href="https://www.youtube.com/user/envato" title="Youtube" /> <span className="jlsocial-element-left"> <i className="jli-youtube" aria-hidden="true" /> <span className="num-count">65.5k</span> </span> <span className="jlsocial-element-right">subscribers</span> </div>
                            <div className="jlsocial-element jl-vimeo jl_radus_e"> <a  href="https://vimeo.com/beeple" title="vimeo" /> <span className="jlsocial-element-left"> <i className="jli-vimeo" aria-hidden="true" /> <span className="num-count">240</span> </span> <span className="jlsocial-element-right">subscribers</span> </div>
                            <div className="jlsocial-element jl-pinterest jl_radus_e"> <a href="https://pinterest.com/envato" className="pinterest" title="pinterest" /> <span className="jlsocial-element-left"> <i className="jli-pinterest" aria-hidden="true" /> <span className="num-count">9.87k</span> </span> <span className="jlsocial-element-right">followers</span> </div>
                          </div>
                        </div>

                        {/* <div id="sprasa_recent_post_text_widget-9" className="widget post_list_widget">
                          <div className="widget_jl_wrapper">
                            <div className="ettitle">
                              <div className="widget-title">
                                <h2 className="jl_title_c">Art &amp; Fashion</h2>
                              </div>
                            </div>
                            <div className="bt_post_widget">
                              <div className="jl_m_right jl_sm_list jl_ml jl_clear_at">
                                <div className="jl_m_right_w">
                                  <div className="jl_m_right_img jl_radus_e"> <a href="#"> <motion.img width={120} height={120} src="img/pexels-daria-shevtsova-1257105-120x120.jpg" className="attachment-sprasa_small_feature size-sprasa_small_feature wp-post-image" alt="" loading="lazy" /> </a> </div>
                                  <div className="jl_m_right_content">
                                    <h2 className="entry-title"> <a href="#" tabIndex={-1}>This place really good place for reading</a></h2>
                                    <span className="jl_post_meta"><span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 24, 2016</span></span>
                                  </div>
                                </div>
                              </div>
                              <div className="jl_m_right jl_sm_list jl_ml jl_clear_at">
                                <div className="jl_m_right_w">
                                  <div className="jl_m_right_img jl_radus_e"> <a href="#"> <motion.img width={120} height={120} src="img/jo-jo-M46Z1FXmD-c-unsplash-120x120.jpg" className="attachment-sprasa_small_feature size-sprasa_small_feature wp-post-image" alt="" loading="lazy" /> </a> </div>
                                  <div className="jl_m_right_content">
                                    <h2 className="entry-title"> <a href="#" tabIndex={-1}>Having fun with DJ and the best music drop</a></h2>
                                    <span className="jl_post_meta"><span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 24, 2016</span></span>
                                  </div>
                                </div>
                              </div>
                              <div className="jl_m_right jl_sm_list jl_ml jl_clear_at">
                                <div className="jl_m_right_w">
                                  <div className="jl_m_right_img jl_radus_e"> <a href="#"> <motion.img width={120} height={120} src="img/melanie-van-leeuwen-QA-qQfWJM0E-unsplash-120x120.jpg" className="attachment-sprasa_small_feature size-sprasa_small_feature wp-post-image" alt="" loading="lazy" /> </a> </div>
                                  <div className="jl_m_right_content">
                                    <h2 className="entry-title"> <a href="#" tabIndex={-1}>This guitar sound is so good and i need it more</a></h2>
                                    <span className="jl_post_meta"><span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 24, 2016</span></span>
                                  </div>
                                </div>
                              </div>
                              <div className="jl_m_right jl_sm_list jl_ml jl_clear_at">
                                <div className="jl_m_right_w">
                                  <div className="jl_m_right_img jl_radus_e"> <a href="#"> <motion.img width={120} height={120} src="img/daniel-korpai-_RYbP9O-vTU-unsplash-120x120.jpg" className="attachment-sprasa_small_feature size-sprasa_small_feature wp-post-image" alt="" loading="lazy" /> </a> </div>
                                  <div className="jl_m_right_content">
                                    <h2 className="entry-title"> <a href="#" tabIndex={-1}>Technology can make your live easy and fast</a></h2>
                                    <span className="jl_post_meta"><span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 24, 2016</span></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}

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
