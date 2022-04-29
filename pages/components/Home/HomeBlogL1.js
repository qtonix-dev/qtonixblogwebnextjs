import React from 'react'
import {motion} from "framer-motion";
import Truncate from 'react-truncate';
import Moment from 'react-moment';
import Link from 'next/link'

export default function HomeBlogL1({data}) {
    console.log(data)
    return (
        <div className="jl-grid-cols">
            <Link exact href={data.totalurl} passHref={true}>
                                    <div className="p-wraper post-2691">
                                    <div className="jl_grid_w">
                                        <div className="jl_img_box jl_radus_e"><a ><motion.img width={500} height={350} src={process.env.backendURLMAIN+'/'+data.imagethumb} alt="b" loading="lazy" /></a></div>
                                        <div className="text-box">
                                        <h5 style={{cursor:'pointer'}}><Truncate lines={2} ellipsis={<span> ...</span>}>
                            {data.title}
                        </Truncate></h5>
                                        <span className="jl_post_meta" style={{marginTop:'-20px'}}> <span className="post-date"><i className="jli-pen" /><Moment format="MMMM M, YYYY">{data.createdAt}</Moment></span></span>
                                        </div>
                                    </div>
                                    </div>
                                    </Link>
                                </div>
    )
}
