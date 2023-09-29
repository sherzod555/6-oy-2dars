import "./reimagening.css"

import icon1 from '../../assets/Icon-2.svg'
import icon2 from '../../assets/Icon-1.svg'
import icon3 from '../../assets/Icon.svg'
import icon4 from '../../assets/Icon-3.svg'
import icon5 from '../../assets/Icon-4.svg'
import icon6 from '../../assets/Icon-5.svg'


import member1 from '../../assets/Member2.png'
import member2 from '../../assets/Member1.png'
import member3 from '../../assets/Member.png'
import member4 from '../../assets/ava-black.png'




const Reimagening = () =>{
    return(
        <main>
          <div className="main_section container">

            <div className="main_section_header">
                <h2 className="main_title">
                    Reimagining what it means to work
                </h2>
                <p className="main_desc">
                Teams and communities using Open Enterprise fundamentally unlock a reality of work that reimagines how people engage in economic opportunity, meeting the demands and expectations of a modern organization.
                </p>
            


                <div className="cards_wrapper">
                    <div className="card_box">
                        <img className="card_box_img" src={icon1} alt="icon" />
                        <h3 className="card_box_title">
                        Modern workforce
                        </h3>
                        <p className="card_box_desc">
                        Multistakeholder governance aligns employees with the organization’s wider community.
                        </p>
                    </div>

                    <div className="card_box">
                        <img className="card_box_img" src={icon2} alt="icon" />
                        <h3 className="card_box_title">
                        Meritocratic by design
                        </h3>
                        <p className="card_box_desc">
                        Tokenized ownership aligns deeply committed individuals with the organization’s success.
                        </p>
                    </div>

                    <div className="card_box">
                        <img className="card_box_img" src={icon3} alt="icon" />
                        <h3 className="card_box_title">
                        Engineered for resilience
                        </h3>
                        <p className="card_box_desc">
                        Open Enterprise supports best practices in sociocratic management.
                        </p>
                    </div>

                </div>
            </div>

            <div className="feature_info_section">

                <div className="course_box">
                    <img className="course_box_img" src={icon4} alt="icon" />
                    <h3 className="course_box_title">
                    Kickstart an organization with your co-founders
                    </h3>
                    <p className="course_box_desc">
                    It’s the early days, you just had a long conversation with two friends about a meaningful challenge that you’re all passionate about and have a potential solution for. You’re ready to embark the startup journey.
                    </p>
                </div>

                <div className="members_list">
                    <h4 className="members_title">
                    Members
                    </h4>
                    <div className="members_box">
                        <img src= {member1} alt="mem" />
                        <div>
                            <p className="mem_name">Dillon Kydd</p>
                            <p className="mem_shares">100 SHARES</p>
                        </div>
                    </div>

                    <div className="members_box">
                        <img src= {member2} alt="mem" />
                        <div>
                            <p className="mem_name">Anna Olsen</p>
                            <p className="mem_shares">100 SHARES</p>
                        </div>
                    </div>

                    <div className="members_box">
                        <img src= {member3} alt="mem" />
                        <div>
                            <p className="mem_name">Kas Moss</p>
                            <p className="mem_shares">100 SHARES</p>
                        </div>
                    </div>
                </div>

                <div className="member_info">

                    <div className="members_box">
                        <img src= {member4} alt="mem" />
                        <div>
                            <p className="mem_name">Jassir Jonis</p>
                            <p className="mem_shares">Pre-seed angel investor</p>
                        </div>
                    </div>

                    <p className="member_desc">
                    Hey guys, love what you’re doing and I’m convinced that together we’ll achieve amazing things.
                    </p>

                    <div className="commit_shares">
                        <div className="commit">
                            <p className="cs_title">COMMIT</p>
                            <p className="cs_value">10,000 DAI</p>
                        </div>
                        <div className="shares">
                            <p className="cs_title">SHARES</p>
                            <p className="cs_value">20</p>
                        </div>
                    </div>

                    <button className="vote_btn">Go to vote</button>


                </div>

                <div className="course_box">
                    <img className="course_box_img" src={icon5} alt="icon" />
                    <h3 className="course_box_title">
                    Onboard users, investors and advisors as you grow
                    </h3>
                    <p className="course_box_desc">
                    You’ve bootstrapped and delivered an MVP, and some investors and advisors are interested in having a chat with you. As an Open Enterprise, you can onboard them seamlessly into your digital organization and align them with your success.
                    </p>
                </div>

                <div className="course_box">
                    <img className="course_box_img" src={icon6} alt="icon" />
                    <h3 className="course_box_title">
                    Engage highly committed contributors
                    </h3>
                    <p className="course_box_desc">
                    You need talented people on-demand across various tasks that your full-time workforce can’t prioritize at the moment. As an Open Enterprise, you can easily fund tasks and have people apply to work on them in return for funds or shares.
                    </p>
                </div>

            </div>

          </div>
        </main>
    )
}

export default Reimagening