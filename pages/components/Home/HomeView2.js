import React from 'react'
import Truncate from 'react-truncate';
import Moment from 'react-moment';
import Link from 'next/link'
import {motion} from "framer-motion";

export default function HomeView2(props) {
    var data = props.data;
    return (
        <div className="jl_m_right">
            {/* <Link exact href={data.totalurl} passHref={true}> */}
            <div className="jl_m_right_w">
            <div className="jl_m_right_img jl_radus_e"><a ><motion.img width={120} height={120} src={process.env.backendURLMAIN+'/'+data.imagesmall} alt="b" loading="lazy" /></a></div>
            <div className="jl_m_right_content">
                {/* <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#91bd3a'}} >Inspiration</a></span> */}
                
                <h3 className="entry-title"><Truncate lines={2} ellipsis={<span> ...</span>}>
                            {data.title}
                        </Truncate></h3>
                
                <span className="jl_post_meta"> <span className="post-date"><i className="jli-pen" /><Moment format="MMMM M, YYYY">{data.createdAt}</Moment></span></span>
                <p className="mt-2"><Truncate lines={2} ellipsis={<span>... Read more</span>}>
                            {data.description}
                        </Truncate></p>

            
            </div>
            </div>
            {/* </Link> */}
        </div>
    )
}