import React, { Component } from 'react'
import Body from '../../components/Body'
import {motion} from "framer-motion";
import axios from 'axios'
import Link from 'next/link'
import Moment from 'react-moment';
import { DiscussionEmbed } from 'disqus-react';
import Head from 'next/head'

export default class blogdetails extends Component {

    static async getInitialProps({query}) {
        var data ={query};
        const response = await axios.get(`${process.env.backendURL}/blog/viewbyurl/${data.query.blogdetails}`);
        
        
        return{
            datas:response.data.data
        }
    }

    render() {
        var data = this.props.datas;
        console.log(data)
        return (
            <Body>
               <Head>
                <title>{data.title}</title>

                <script type='application/ld+json' dangerouslySetInnerHTML={ { __html: `
                    "@context":"http://schema.org",
                    "@type": "BlogPosting",
                    "image": "http://example.com/images/image.jpg",
                    "url": ${process.env.backendURL}${data.categoryurl}/${data.blogurl},
                    "headline": ${data.title},
                    "alternativeHeadline": ${data.title},
                    "dateCreated": ${data.createdAt},
                    "datePublished": ${data.createdAt},
                    "dateModified": ${data.updatedAt},
                    "inLanguage": "en-US",
                    "isFamilyFriendly": "true",
                    "copyrightYear": "2021",
                    "copyrightHolder": "Qtonix Software Pvt Ltd",
                    "accountablePerson": {
                        "@type": "Person",
                        "name": "Patrick Coombe",
                        "url": "https://www.qtonix.com"
                    },
                    "author": {
                        "@type": "Person",
                        "name": "Patrick Coombe",
                        "url": "https://www.qtonix.com"
                    },
                    "creator": {
                        "@type": "Person",
                        "name": "Patrick Coombe",
                        "url": "https://www.qtonix.com"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "Qtonix Software Pvt Ltd",
                        "url": "https://www.qtonix.com",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://www.qtonix.com/logo.png",
                            "width":"400",
                            "height":"55"
                        }
                    },
                    "mainEntityOfPage": "True",
                    "keywords": [
                        "keyword1",
                        "keyword2",
                        "keyword3",
                        "keyword4"
                    ],
                    "genre":["SEO","JSON-LD"],
                    "articleSection": ${data.category},                    
                    `}} />


               </Head>



                    <div className="mobile_menu_overlay" />
                    <section id="content_main" className="clearfix jl_spost">
                        <div className="container">
                        <div className="row main_content">
                            
                            <div className="col-md-12 loop-large-post" id="content">
                            <div className="widget_container content_page">

                            
                                            
                                            
                                            <div className="post-2970 post type-post status-publish format-gallery has-post-thumbnail hentry category-business tag-inspiration tag-morning tag-tip tag-tutorial post_format-post-format-gallery" id="post-2970">
                                                
                                                <p style={{color:'orangered',marginBottom:'-2px'}}> <Link exact href='/' style={{color:'orangered'}}>Home</Link> / <Link exact href={`${data.categoryurl}`} style={{color:'orangered'}}>{data.category}</Link> / {data.title}</p>

                                                
                                                <h1 className="single_post_title_main stkytopnight">{data.title}</h1>
                                                <p style={{marginTop:'-25px'}}> <motion.img src="https://www.seekpng.com/png/full/139-1395950_is-the-consumer-or-supply-chain-partner-expected.png" width="20px" alt="image" /> Adam - <Moment format="M MMMM YYYY">{data.createdAt}</Moment> &nbsp; <span style={{backgroundColor:'orangered',padding:'3px 10px', color:'white', borderRadius:'20px'}}>{data.category}</span></p>
                                                


                                                <div className="single_section_content box blog_large_post_style">
                                                    <div className="jl_single_style2">
                                                        
                                                    <div className="single_post_entry_content single_bellow_left_align jl_top_single_title jl_top_title_feature">
                                                        {/* <span className="meta-category-small single_meta_category">   <p className="post-category-color-text" style={{background: '#eba845'}} >{data.category}</p></span>  */}
                                                        {/* <h1 className="single_post_title_main">{data.title}</h1> */}
                                                        <p className="post_subtitle_text">{data.description}</p>
                                                        <motion.img src={process.env.REACT_APP_BACKENDURL+'/'+data.image} className="w-100 mt-3" alt=""/>
                                                        {/* <span className="jl_post_meta"><span className="post-date"><i className="jli-pen" /><Moment format="MMMM M, YYYY">{data.createdAt}</Moment></span><span className="meta-comment"><i className="jli-comments" /><a href="#respond">0 Comment</a></span></span> */}
                                                    </div>
                                                    </div>
                                                    <div className="post_content_w">
                                                        <div dangerouslySetInnerHTML={{__html: data.content}}></div>
                                                    </div>
                                                    

                                                    <div className="clearfix" />
                                                    
                                                    {/* <div className="related-posts">
                                                    <h4>Related Articles</h4>
                                                    <div className="single_related_post">
                                                        
                                                    {this.state.relatedblogs.length>0
                                                    ?
                                                        <>
                                                        {this.state.relatedblogs.map((relabl)=>{
                                                            return(
                                                                <RelatedArticleView key={relabl._id} data={relabl} />
                                                            )
                                                        })}
                                                        </>
                                                    :
                                                    <h6>Loading...</h6>
                                                    } 
        
                                                    </div>
                                                    </div> */}
                                                    <div id="respond" className="comment-respond">

                                                   


                                                    <DiscussionEmbed
                                                        shortname='QtonixBlog'
                                                        config={
                                                            {
                                                                url: `${process.env.REACT_APP_WEBSITEURL}/${data.totalurl}`,
                                                                identifier: `QB-${data._id}`,
                                                                title: data.title,
                                                                language: 'en'	
                                                            }
                                                        }
                                                    />

                                                    
                                                    </div>
                                                </div>
                                            </div>
                                            

                                

                                
                                




                                <div className="brack_space" />
                            </div>
                            </div>
                            
                            <div className="col-md-4" id="sidebar">
                            
                            {/* <SidebarBlog /> */}

                            </div>
                        </div>
                        </div>
                    </section>
            </Body>
        )
    }
}
