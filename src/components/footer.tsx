import React from 'react';
const logo = require("../images/conference-logo.png");
class Footer extends React.Component{
    render(){
        return(
            <div>
                <div id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-6">
                                <img className="footer-logo" src={String(logo)} alt="" />
                                <br/><br/>
                                <p>Conference Tracker is a #1 Conference directory. You can browse and attend any important conference world wide or near by your location. Very easy to Registration and attend</p>
                            </div>

                            <div className="col-md-4 col-sm-6 ">
                                <h4>Helpful Links</h4>
                                <ul className="footer-links">
                                    <li><a href="#">Login</a></li>
                                    <li><a href="#">Sign Up</a></li>
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>

                                <ul className="footer-links">
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Join </a></li>
                                    <li><a href="#">How It Works</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>		

                            <div className="col-md-3  col-sm-12">
                                <h4>Contact Us</h4>
                                <div className="text-widget">
                                    <span>12345 Little Lonsdale St, Melbourne</span> <br/>
                                    Phone: <span>(123) 123-456 </span><br/>
                                    E-Mail:<span> <a href="#">office@conference-tracker.com</a> </span><br/>
                                </div>

                                <ul className="social-icons margin-top-20">
                                    <li><a className="facebook" href="#"><i className="icon-facebook"></i></a></li>
                                    <li><a className="twitter" href="#"><i className="icon-twitter"></i></a></li>
                                    <li><a className="gplus" href="#"><i className="icon-gplus"></i></a></li>
                                    <li><a className="vimeo" href="#"><i className="icon-vimeo"></i></a></li>
                                </ul>

                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyrights">© 2020 Conference Tracker. All Rights Reserved.</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>    
        )
    }
}
export default Footer;