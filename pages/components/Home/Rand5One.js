import React from 'react'
import {motion} from "framer-motion";
import Truncate from 'react-truncate';
import Moment from 'react-moment';
import Link from 'next/link'

export default function Rand5One({data}) {
    return (
        <div className="jl_mg_main">
            <Link exact href={data.url} passHref={true}>
                                <div className="jl_mg_main_w">
                                    <div className="jl_img_box jl_radus_e"><motion.img width={1000} height={650} src={`${process.env.backendURLMAIN+'/'+data.imagethumb}`} alt="" loading="lazy" /></div>
                                    <div className="text-box">
                                    <h3 className="entry-title">
                                    {data.name}
                                    </h3>
                                    {/* <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 24, 2019</span><span className="post-read-time"><i className="jli-watch-2" />2 Mins read</span></span> */}
                                     <p><Truncate lines={1} ellipsis={<span> ...</span>}>
                {data.description}
                        </Truncate></p>
                                    
                                    </div>
                                </div>
                                </Link>
                                </div>
    )
}
