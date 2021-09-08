import React from 'react'
import Truncate from 'react-truncate';
import Moment from 'react-moment';
import Link from 'next/link'
import {motion} from "framer-motion";


export default function HomeView3(props) {
    function truncatehead(line){

        var length = 36;
        var myString = line;
        var myTruncatedString = myString.substring(0,length);

        console.log(myTruncatedString)
        return myTruncatedString;

}

function truncatepara(line){

    var length = 142;
    var myString = line;
    var myTruncatedString = myString.substring(0,length);

    console.log(myTruncatedString)
    return myTruncatedString;

}
    var data = props.data;
    return (
        <div className="jl-grid-cols">
            <Link exact href={data.totalurl} passHref={true}>
            <div className="p-wraper post-2959">
                <div className="jl_grid_w">
                <div className="jl_img_box jl_radus_e"><a >
                    
                    <motion.img width={500} height={350} src={process.env.backendURLMAIN+'/'+data.imagethumb} className="attachment-sprasa_slider_grid_small size-sprasa_slider_grid_small wp-post-image" alt="" loading="lazy" />
                    
        
                    

                    </a> <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#62ce5c'}} >{data.category}</a></span></div>
                <div className="text-box">
                    <h3>
                        {/* <Truncate lines={2} ellipsis={<span> ...</span>}>
                            {data.title}
                        </Truncate> */}
                        {truncatehead(data.title)} ...
                        </h3>
                    <span className="jl_post_meta"> <span className="post-date"><i className="jli-pen" /><Moment format="MMMM M, YYYY">{data.createdAt}</Moment></span></span>
                    <p>
                    {truncatepara(data.description)} ...
                        {/* <Truncate lines={3} ellipsis={<span>... Read more</span>}>
                            {data.description}
                        </Truncate> */}
                        </p>
                </div>
                </div>
            </div>
            </Link>
        </div>
    )
}