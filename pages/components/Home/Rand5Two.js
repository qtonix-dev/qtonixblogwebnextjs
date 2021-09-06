import React from 'react'
import {motion} from "framer-motion";
import Truncate from 'react-truncate';
import Moment from 'react-moment';
import Link from 'next/link'

export default function Rand5Two({data}) {
    return (
        <div className="jl_mg_sm">
            <Link exact href={data.url} passHref={true}>
                                <div className="jl_mg_sm_w">
                                    <div className="jl_f_img jl_radus_e"><motion.img width={1000} height={650} src={`${process.env.backendURLMAIN+'/'+data.imagethumb}`} className="attachment-sprasa_feature_large size-sprasa_feature_large wp-post-image" alt="" loading="lazy" /> </div>
                                    <div className="jl_mg_content">
                                    <h3 className="entry-title">{data.name}</h3>
                                    {/* <p><Truncate lines={3} ellipsis={<span> ...</span>}>
                {data.description}
                        </Truncate></p> */}
                                    {/* <span className="jl_post_meta"> <span className="jl_author_img_w"><i className="jli-user" /><a href="#" title="Posts by Spraya" rel="author">Spraya</a></span><span className="post-date"><i className="jli-pen" />July 24, 2019</span></span> */}
                                    </div>
                                </div>
                                </Link>
                                </div>
    )
}
