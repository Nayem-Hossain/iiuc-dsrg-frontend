import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Separator from '../CommonComponents/Separator';

const ContactForm = () => {
    return (
        <>
            <div id="contact" class="contact-area section-padding my-5">
                <div class="container">
                    <div class="title-div partners">
                        <Separator /><div><h3>Get in Touch</h3></div><Separator />
                    </div>
                    <div class="row">

                        <div class="col-lg-5 g-5">
                            <div class="single_address">
                                {/* <FontAwesomeIcon icon={faLocationDot} /> */}
                                <i class="bi bi-geo-alt-fill"></i>
                                <h4>Address</h4>
                                <p>Kumira, Chattogram-4318, Bangladesh</p>
                            </div>
                            <div class="single_address">
                                <i class="bi bi-envelope-at-fill"></i>
                                <h4>Email</h4>
                                <p>idsrg.info@gmail.com</p>
                            </div>
                            {/* <div class="single_address">
                                <i class="bi bi-telephone-outbound-fill"></i>
                                <h4>Phone</h4>
                                <p>+880&#10803;&#10803;&#10803;&#10803;&#10803;&#10803;&#10803;&#10803;&#10803;&#10803;</p>
                            </div> */}
                            <div class="single_address">
                                <i class="bi bi-stopwatch-fill"></i>
                                <h4>Research Meeting</h4>
                                <p>Every Saturday : <br /> 12.00 PM - 01.30 PM.</p>
                            </div>
                        </div>

                        <div class="col-lg-7">
                            <div class="contact">
                                <form class="form" name="enq" method="post" action="contact.php" onsubmit="return validation();">
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <input type="text" name="name" class="form-control" placeholder="Name" required="required" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <input type="email" name="email" class="form-control" placeholder="Email" required="required" />
                                        </div>
                                        <div class="form-group col-md-12">
                                            <input type="text" name="subject" class="form-control" placeholder="Subject" required="required" />
                                        </div>
                                        <div class="form-group col-md-12">
                                            <textarea rows="6" name="message" class="form-control" placeholder="Your Message" required="required"></textarea>
                                        </div>
                                        <div class="col-md-12 text-center">
                                            <button type="submit" value="Send message" name="submit" id="submitButton" class="btn btn-contact-bg" title="Submit Your Message!">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactForm;