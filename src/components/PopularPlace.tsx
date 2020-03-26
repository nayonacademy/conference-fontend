import React from 'react';
const locationOne = require("../images/popular-location-01.jpg");
const locationTwo = require("../images/popular-location-02.jpg");
const locationThree = require("../images/popular-location-03.jpg");
const locationFour = require("../images/popular-location-04.jpg");
class PopularPlace extends React.Component{
    render(){
        return(
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="headline centered margin-bottom-35 margin-top-70">Popular Cities <span>Browse Conference in popular places</span></h3>
                    </div>
                    <div className="col-md-4">
                        <a href="listings-list-with-sidebar.html" className="img-box" data-background-image={String(locationOne)}>
                            <div className="img-box-content visible">
                                <h4>New York </h4>
                                <span>14 Listings</span>
                            </div>
                        </a>
                    </div>	
                        
                    <div className="col-md-8">
                        <a href="listings-list-with-sidebar.html" className="img-box" data-background-image={String(locationTwo)}>
                            <div className="img-box-content visible">
                                <h4>Los Angeles</h4>
                                <span>24 Listings</span>
                            </div>
                        </a>
                    </div>	

                    <div className="col-md-8">
                        <a href="listings-list-with-sidebar.html" className="img-box" data-background-image={String(locationThree)}>
                            <div className="img-box-content visible">
                                <h4>San Francisco </h4>
                                <span>12 Listings</span>
                            </div>
                        </a>
                    </div>	
                        
                    <div className="col-md-4">
                        <a href="listings-list-with-sidebar.html" className="img-box" data-background-image={String(locationFour)}>
                            <div className="img-box-content visible">
                                <h4>Miami</h4>
                                <span>9 Listings</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            </div>    
        )
    }
}
export default PopularPlace;