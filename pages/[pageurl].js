import React, { Component } from 'react'
import Body from './components/Body'
import axios from 'axios'

export default class pageurl extends Component {

    static async getInitialProps({query}) {
        var data ={query};
        const response = await axios.get(`${process.env.backendURL}/page/viewpage/${data.query.pageurl}`);
        
        return{
            datas:response.data.data,
        }
    }

    render() {
        return (
            <Body>
                <section id="content_main" className="clearfix">
                        <div className="container">
                            <div className="row main_content">
                                <div className="col-md-12">
                                    <div dangerouslySetInnerHTML={{__html: this.props.datas.content}} />
                                    
                                </div>
                            </div>
                        </div>
                    </section>
            </Body>
        )
    }
}
