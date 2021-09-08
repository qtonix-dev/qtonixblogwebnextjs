import React, { Component } from 'react'
import { connect } from 'react-redux'
import {motion} from "framer-motion";
import Body from './components/Body'
import axios from 'axios'

import HomeView1 from './components/Home/HomeView1'
import HomeView2 from './components/Home/HomeView2'
import HomeView3 from './components/Home/HomeView3'

import Rand5One from './components/Home/Rand5One'
import Rand5Two from './components/Home/Rand5Two'

import HomeBlogL1  from './components/Home/HomeBlogL1'


export class index extends Component {

    // export async function getServerSideProps(context){
//     const response = await axios.get(`${process.env.backendURL}/blog/homepage`);
//     return {
//       props: {
//         datas:response.data,
//       },
//       revalidate: 5,
//     }
//   }

    static async getInitialProps({query}) {
        var data ={query};
            const response = await axios.get(`${process.env.backendURL}/blog/homepage`);

        
        
        return{
            datas:response.data
        }
    }


  render() {
      console.log(this.props.datas.blogcategory5random4getblog)
    return (
      <Body>
  
  <section className="home_section1">
                    <div className="container" style={{marginTop:'9rem'}}>
                        <div className="row">
                        <div className="col-md-12">
                            <div className="jl_mright_wrapper jl_clear_at">
                            <div className="jl_mix_post">
                                <HomeView1 data={this.props.datas.latest4blog[0]} />
                                <HomeView2 data={this.props.datas.latest4blog[1]} />
                                <HomeView2 data={this.props.datas.latest4blog[2]} />
                                <HomeView2 data={this.props.datas.latest4blog[3]} />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section className="home_section2">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-12">
                            <div id="blockid_72be465" className="block-section jl-main-block" data-blockid="blockid_72be465" data-name="jl_mgrid" data-page_max={11} data-page_current={1} data-author="none" data-order="date_post" data-posts_per_page={6} data-offset={5}>
                            <div className="jl_grid_wrap_f jl_clear_at g_3col">
                                <div className="jl-roww content-inner jl-col3 jl-col-row">
                                <div className="jl_sec_title">
                                    <h3 className="jl_title_c"><span>Editors Picks Post</span></h3>
                                    <p>This is an optional subtitle for post section</p>
                                </div>
                                
                                {this.props.datas.random6blog.map((data)=>{
                                    return(
                                        <HomeView3 key={data._id} data={data} />
                                    )
                                })}
                               

         
                                </div>
                                
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section className="home_section3">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-12">
                            <div className="jl_sec_title">
                            <h3 className="jl_title_c">Lifestyle News</h3>
                            <p>This is an optional subtitle for post section</p>
                            </div>
                            <div className="jl_mg_wrapper jl_clear_at">
                            <div className="jl_mg_post jl_clear_at">                                
                                <Rand5One data={this.props.datas.blogcategory5random[0]} />


                                <Rand5Two data={this.props.datas.blogcategory5random[1]} />
                                <Rand5Two data={this.props.datas.blogcategory5random[2]} />
                                <Rand5Two data={this.props.datas.blogcategory5random[3]} />
                                <Rand5Two data={this.props.datas.blogcategory5random[4]} />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <section className="home_section4">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-12">
                            <div id="blockid_3f9d058" className="block-section jl-main-block">
                            <div className="jl_grid_wrap_f jl_clear_at g_4col">
                                <div className="jl-roww content-inner jl-col3 jl-col-row">
                                <div className="jl_sec_title">
                                    <h3 className="jl_title_c"><span>Health &amp; Fitness</span></h3>
                                    <p>This is an optional subtitle for post section</p>
                                </div>

                                {this.props.datas.blogcategory5random4getblog.map((data)=>{
                                    return(
                                        <HomeBlogL1 data={data} key={data._id}/>
                                    )
                                })}
                                
                                
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    
                    
                    
                    


      </Body>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(index)


// export async function getServerSideProps(context){
//     const response = await axios.get(`${process.env.backendURL}/blog/homepage`);
//     return {
//       props: {
//         datas:response.data,
//       },
//       revalidate: 5,
//     }
//   }
