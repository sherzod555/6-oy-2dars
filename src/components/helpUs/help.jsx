import "./help.css"

import divider from '../../assets/Divider.svg'


const Help = () =>{
    return(
        <main>
          <div className="help_main container">

            <div className="help_main_section">
                <h2 className="help_main_title">
                Help us improve Open Enterprise
                </h2>
                <p className="help_main_desc">
                As an Open Enterprise ourselves, we are actively looking for new talent to join our mission of improving and delivering the Open Enterprise model to the world. Apply for open tasks and earn a stake in our success.
                </p>


                <div className="help_card_wrapper">
                    <div className="help_card">
                        <p className="hCard_title">
                        Ideate a list of features based on the Sociocracy model
                        </p>

                        <p className="hCard_desc">
                        We’re looking for someone interested in business theory and research that’ll help us bridge the gap between our s...
                        </p>
                        <div className="hCard_footer">
                            <button className="hCard_button">
                            5 AUT
                            </button>

                            <p className="hCard_date">
                            Apply by May 15
                            </p>
                        </div>
                    </div>
                    <div className="help_card">
                        <p className="hCard_title">
                        Update documentation with FAQs
                        </p>

                        <p className="hCard_desc">
                        Review our community chat for the most frequently asked questions and document answers for our product docs.
                        </p>
                        <div className="hCard_footer">
                            <button className="hCard_button">
                            10 AUT
                            </button>

                            <p className="hCard_date">
                            Apply by May 18
                            </p>
                        </div>
                    </div>
                    <div className="help_card">
                        <p className="hCard_title">
                        Tutorial video series
                        </p>

                        <p className="hCard_desc">
                        Create a series of video tutorials that cover everything from start to finish on using Open Enterprise.
                        </p>
                        <div className="hCard_footer">
                            <button className="hCard_button">
                            40 AUT
                            </button>

                            <p className="hCard_date">
                            Apply by May 20
                            </p>
                        </div>
                    </div>
                </div>

                <button className="view_more">
                    View more
                </button>
            </div>

           
          </div>
          <div className="divider_img">
            {/* <img src={divider} alt="divider" /> */}
          </div>
        </main>
    )
}

export default Help