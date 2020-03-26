import React from 'react';
const ItemOne = require("../images/listing-item-01.jpg");
const ItemTwo = require("../images/listing-item-02.jpg");
const ItemThree = require("../images/listing-item-03.jpg");
const ItemFour = require("../images/listing-item-04.jpg");
const ItemFive = require("../images/listing-item-05.jpg");
const ItemSix = require("../images/listing-item-06.jpg");
class ReviewSlider extends React.Component{
    render(){
        return(
            <div>
                <section className="fullwidth  padding-top-45 padding-bottom-45" data-background-color="#f8f8f8">

                <div className="container">
                    <div className="row">

                        <div className="col-md-12">
                            <h3 className="headline centered margin-bottom-45">
                                <span>Discover Conference reviews</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="simple-fw-slick-carousel dots-nav">
                    <div className="fw-carousel-item">
                        <span className="listing-item-container compact">
                            <div className="listing-item">
                                <img src={String(ItemOne)} alt=""/>

                                <div className="listing-badge now-open">Now Open</div>

                                <div className="listing-item-content">
                                    <div className="numerical-rating" data-rating="3.5"></div>
                                    <h3>Windy Town</h3>
                                    <span>964 School Street, New York</span>
                                </div>
                                <span className="like-icon"></span>
                            </div>
                        </span>
                    </div>
                    <div className="fw-carousel-item">
                        <span className="listing-item-container compact">
                            <div className="listing-item">
                                <img src={String(ItemTwo)} alt=""/>
                                <div className="listing-item-details">
                                    <ul>
                                        <li>Friday, August 10</li>
                                    </ul>
                                </div>
                                <div className="listing-item-content">
                                    <div className="numerical-rating" data-rating="5.0"></div>
                                    <h3>Celebrity Hall</h3>
                                    <span>Bishop Avenue, New York</span>
                                </div>
                                <span className="like-icon"></span>
                            </div>
                        </span>
                    </div>
                    <div className="fw-carousel-item">
                        <span className="listing-item-container compact">
                            <div className="listing-item">
                                <img src={String(ItemThree)} alt=""/>
                                <div className="listing-item-details">
                                    <ul>
                                        <li>Starting from $59 per booking</li>
                                    </ul>
                                </div>
                                <div className="listing-item-content">
                                    <div className="numerical-rating" data-rating="2.0"></div>
                                    <h3>Media Bazar</h3>
                                    <span>778 Country Street, New York</span>
                                </div>
                                <span className="like-icon"></span>
                            </div>

                        </span>
                    </div>
                    <div className="fw-carousel-item">
                        <span className="listing-item-container compact">
                            <div className="listing-item">
                                <img src={String(ItemFour)} alt=""/>

                                <div className="listing-badge now-open">Now Open</div>

                                <div className="listing-item-content">
                                    <div className="numerical-rating" data-rating="5.0"></div>
                                    <h3>BCDM Conference</h3>
                                    <span>2726 Shinn Street, New York</span>
                                </div>
                                <span className="like-icon"></span>
                            </div>
                        </span>
                    </div>
                    <div className="fw-carousel-item">
                        <span className="listing-item-container compact">
                            <div className="listing-item">
                                <img src={String(ItemFive)} alt=""/>
                                <div className="listing-item-content">
                                    <div className="numerical-rating" data-rating="3.5"></div>
                                    <h3>Lecture Theatre Building</h3>
                                    <span>1512 Duncan Avenue, New York</span>
                                </div>
                                <span className="like-icon"></span>
                            </div>
                        </span>
                    </div>
                    <div className="fw-carousel-item">
                        <span className="listing-item-container compact">
                            <div className="listing-item">
                                <img src={String(ItemSix)} alt=""/>

                                <div className="listing-badge now-closed">Now Closed</div>

                                <div className="listing-item-content">
                                    <div className="numerical-rating" data-rating="4.5"></div>
                                    <h3>Hall of fame</h3>
                                    <span>215 Terry Lane, New York</span>
                                </div>
                                <span className="like-icon"></span>
                            </div>
                        </span>
                    </div>
                </div>
                </section>
            </div>    
        )
    }
}
export default ReviewSlider;