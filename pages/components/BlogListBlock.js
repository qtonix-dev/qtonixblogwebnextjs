import React, { Component } from 'react'
import {motion} from "framer-motion";
import Truncate from 'react-truncate';
import Moment from 'react-moment';
import Link from 'next/link'

export default class BlogListBlock extends Component {
    render() {
        // console.log(this.props.data)
        var blog=this.props.data;
        return (
            <>
                <div className="box jl_grid_layout1 blog_grid_post_style post-2947 post type-post status-publish format-standard has-post-thumbnail hentry category-active tag-gaming tag-morning">
                <Link passHref={true} href={blog.totalurl}>
                              <div className="jl_grid_w">
                                <div className="jl_img_box jl_radus_e">  <motion.img width={500} height={350} src={`${process.env.backendURLMAIN}/${blog.imagethumb}`} className="attachment-sprasa_slider_grid_small size-sprasa_slider_grid_small wp-post-image" alt="" loading="lazy" />  <span className="jl_f_cat"></span> </div>
                                <div className="text-box">
                                  
                                   <h3>
                                    <Truncate lines={2} ellipsis={<span> ...</span>}>
                                        {blog.title}
                                    </Truncate></h3>
                                    <span className="jl_post_meta">
                                        <span className="post-date"><i className="jli-pen" /><Moment format="MMMM M, YYYY">{blog.createdAt}</Moment></span>
                                    </span> 
                                    <p>
                                        <Truncate lines={3} ellipsis={<span>... </span>}>
                                            {blog.description}
                                        </Truncate>
                                    </p>

                                </div>
                              </div>
                              </Link>
                            </div>
            </>
        )
    }
}
