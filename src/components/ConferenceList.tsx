import React from 'react';
const item1 = require("../images/listing-item-01.jpg");
const item2 = require("../images/listing-item-02.jpg");
const item3 = require("../images/listing-item-03.jpg");
const item4 = require("../images/listing-item-04.jpg");
const item5 = require("../images/listing-item-05.jpg");
const item6 = require("../images/listing-item-06.jpg");
class ConferenceList extends React.Component{
    render(){
        return(
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="headline centered margin-bottom-45 padding-top-75">
                            Most Recent Conference
                            <span>Discover Conference nearby</span>
                        </h3>
                    </div>
                    <div className="col-md-12">
                        <div className="row margin-bottom-25 margin-top-30">

                            <div className="col-md-6">
                                <div className="layout-switcher">
                                    <a href="listings-grid-full-width.html" className="grid"><i className="fa fa-th"></i></a>
                                    <a href="#" className="list active"><i className="fa fa-align-justify"></i></a>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="fullwidth-filters">
                
                                    <div className="panel-dropdown wide float-right">
                                        <a href="#">More Filters</a>
                                        <div className="panel-dropdown-content checkboxes">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <input id="check-a" type="checkbox" name="check"/>
                                                    <label>All Categories</label>

                                                    <input id="check-b" type="checkbox" name="check"/>
                                                    <label>Multilingual</label>

                                                    <input id="check-c" type="checkbox" name="check"/>
                                                    <label>Environment</label>
                                                </div>	

                                                <div className="col-md-6">
                                                    <input id="check-e" type="checkbox" name="check" />
                                                    <label>Science</label>

                                                    <input id="check-f" type="checkbox" name="check" />
                                                    <label>Business</label>

                                                    <input id="check-g" type="checkbox" name="check"/>
                                                    <label>Others</label>	

                                                </div>
                                            </div>
                                            
                                            <div className="panel-buttons">
                                                <button className="panel-cancel">Cancel</button>
                                                <button className="panel-apply">Apply</button>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="panel-dropdown float-right">
                                        <a href="#">Distance Radius</a>
                                        <div className="panel-dropdown-content">
                                            <input className="distance-radius" type="range" min="1" max="100" step="1" value="50" data-title="Radius around selected destination"/>
                                            <div className="panel-buttons">
                                                <button className="panel-cancel">Disable</button>
                                                <button className="panel-apply">Apply</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sort-by">
                                        <div className="sort-by-select">
                                            <select data-placeholder="Default order" className="chosen-select-no-single">
                                                <option>Default Order</option>	
                                                <option>Highest Rated</option>
                                                <option>Most Reviewed</option>
                                                <option>Newest Listings</option>
                                                <option>Oldest Listings</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="listing-item-container list-layout">
                                    <a href="listings-single-page.html" className="listing-item">
                                        
                                        <div className="listing-item-image">
                                            <img src={String(item1)} alt=""/>
                                            <span className="tag">Environment</span>
                                        </div>
                                        
                                        <div className="listing-item-content">
                                            <div className="listing-badge now-open">Now Open</div>

                                            <div className="listing-item-inner">
                                                <h3>The Astor House <i className="verified-icon"></i></h3>
                                                <span>964 School Street, New York</span>
                                                <div className="star-rating" data-rating="3.5">
                                                    <div className="rating-counter">(12 reviews)</div>
                                                </div>
                                            </div>

                                            <span className="like-icon"></span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="listing-item-container list-layout">
                                    <a href="listings-single-page.html" className="listing-item">
                                        
                                        <div className="listing-item-image">
                                            <img src={String(item2)} alt=""/>
                                            <span className="tag">Business</span>
                                        </div>
                                        
                                        <div className="listing-item-content">

                                            <div className="listing-item-inner">
                                            <h3>583 Park Avenue</h3>
                                            <span>Bishop Avenue, New York</span>
                                                <div className="star-rating" data-rating="5.0">
                                                    <div className="rating-counter">(23 reviews)</div>
                                                </div>
                                            </div>

                                            <span className="like-icon"></span>

                                            <div className="listing-item-details">Friday, August 10</div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="listing-item-container list-layout">
                                    <a href="listings-single-page.html" className="listing-item">
                                        
                                        <div className="listing-item-image">
                                            <img src={String(item3)} alt=""/>
                                            <span className="tag">Science</span>
                                        </div>
                                        
                                        <div className="listing-item-content">

                                            <div className="listing-item-inner">
                                            <h3>Conferences at 180</h3>
                                            <span>778 Country Street, New York</span>
                                                <div className="star-rating" data-rating="2.0">
                                                    <div className="rating-counter">(17 reviews)</div>
                                                </div>
                                            </div>

                                            <span className="like-icon"></span>

                                            <div className="listing-item-details">Starting from $59  Booking</div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="listing-item-container list-layout">
                                    <a href="listings-single-page.html" className="listing-item">
                                        
                                        <div className="listing-item-image">
                                            <img src={String(item4)} alt=""/>
                                            <span className="tag">Techonology</span>
                                        </div>
                                        
                                        <div className="listing-item-content">
                                            <div className="listing-badge now-open">Now Open</div>
                                            
                                            <div className="listing-item-inner">
                                            <h3>FSTA Conference <i className="verified-icon"></i></h3>
                                            <span>2726 Shinn Street, New York</span>
                                                <div className="star-rating" data-rating="5.0">
                                                    <div className="rating-counter">(31 reviews)</div>
                                                </div>
                                            </div>

                                            <span className="like-icon"></span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="listing-item-container list-layout">
                                    <a href="listings-single-page.html" className="listing-item">
                                        
                                        <div className="listing-item-image">
                                            <img src={String(item5)} alt=""/>
                                            <span className="tag">Other</span>
                                        </div>
                                        
                                        <div className="listing-item-content">

                                            <div className="listing-item-inner">
                                            <h3>Conferences at Town</h3>
                                            <span>1512 Duncan Avenue, New York</span>
                                                <div className="star-rating" data-rating="3.5">
                                                    <div className="rating-counter">(46 reviews)</div>
                                                </div>
                                            </div>

                                            <span className="like-icon"></span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="listing-item-container list-layout">
                                    <a href="listings-single-page.html" className="listing-item">
                                        
                                        <div className="listing-item-image">
                                            <img src={String(item6)} alt=""/>
                                            <span className="tag">Environment</span>
                                        </div>
                                        
                                        <div className="listing-item-content">
                                            <div className="listing-badge now-closed">Now Closed</div>

                                            <div className="listing-item-inner">
                                            <h3>TED</h3>
                                            <span>215 Terry Lane, New York</span>
                                                <div className="star-rating" data-rating="5.0">
                                                    <div className="rating-counter">(31 reviews)</div>
                                                </div>
                                            </div>

                                            <span className="like-icon"></span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>

                        <div className="clearfix"></div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="pagination-container margin-top-20 margin-bottom-40">
                                    <nav className="pagination">
                                        <ul>
                                            <li><a href="#" className="current-page">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#"><i className="sl sl-icon-arrow-right"></i></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            </div>    
        )
    }
}
export default ConferenceList;