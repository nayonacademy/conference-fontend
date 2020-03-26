import React from 'react';
class FlipBanner extends React.Component{
    render(){
        return(
            <div>
                <a href="listings-half-screen-map-list.html" className="flip-banner parallax margin-top-65" data-background="images/slider-bg-02.jpg" data-color="#f91942" data-color-opacity="0.85" data-img-width="2500" data-img-height="1666">
                    <div className="flip-banner-content">
                        <h2 className="flip-visible">Expolore Conference nearby</h2>
                        <h2 className="flip-hidden">Browse all Conferences <i className="sl sl-icon-arrow-right"></i></h2>
                    </div>
                </a>
            </div>    
        )
    }
}
export default FlipBanner;