import React from 'react'
import Moment from 'react-moment';
import Link from 'next/link'


export default function HomeView1(props) {


    function truncate(line){

                var length = 72;
                var myString = line;
                var myTruncatedString = myString.substring(0,length);

                console.log(myTruncatedString)
                return myTruncatedString;

    }

    var data = props.data;
    return (
        <div className="jl_m_center blog-style-one blog-small-grid">
            <Link exact href={data.totalurl} passHref={true}>
            <div className="jl_m_center_w jl_radus_e" style={{height:'423px'}}>
            <div className="jl_f_img_bg" style={{backgroundImage: 'url("'+process.env.backendURLMAIN+'/'+data.imagethumb+'")'}} />
            
          
            <div className="text-box">
                <span className="jl_f_cat"><a className="post-category-color-text" style={{background: '#eba845'}} >{data.category}</a></span>
                <h3 className="text-white" style={{cursor:'pointer'}}> 
                {/* <Truncate lines={2} ellipsis={<span> ...</span>}>
                {data.title}
                        </Truncate>   */}
                        {truncate(data.title)} ...
                        
                        </h3>
                 <span className="jl_post_meta">
                    <span className="post-date"><i className="jli-pen" /><Moment format="MMMM M, YYYY">{data.createdAt}</Moment></span>
                    
                </span>
            </div>
            
            </div>
            </Link>
        </div>
    )
}