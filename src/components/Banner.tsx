import React from 'react';
const poster = require("../images/main-search-video-poster.jpg");
const video = require("../images/main-search-video.mp4");
class Banner extends React.Component{
    render(){
        return(
            <div>
                <div className="main-search-container dark-overlay">
                    <div className="main-search-inner">

                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Find Conference Nearby</h2>
                                    <h4>Expolore conference, activities and more</h4>

                                    <div className="main-search-input">

                                        <div className="main-search-input-item">
                                            <input type="text" placeholder="What are you looking for?" value=""/>
                                        </div>

                                        <div className="main-search-input-item location">
                                            <input type="text" placeholder="Location" value=""/>
                                            <a href="#"><i className="fa fa-dot-circle-o"></i></a>
                                        </div>

                                        <div className="main-search-input-item">
                                            <select data-placeholder="All Categories" className="chosen-select" >
                                                <option>All Categories</option>	
                                                <option>Multilingual</option>
                                                <option>Environment</option>
                                                <option>Science</option>
                                                <option>Business</option>
                                                <option>Others</option>
                                            </select>
                                        </div>

                                        <button className="button">Search</button>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    <div className="video-container">
                        <video poster={String(poster)} loop autoPlay muted>
                            <source src={String(video)} type="video/mp4" />
                        </video>
                    </div>

                </div>
            </div>    
        )
    }
}
export default Banner;