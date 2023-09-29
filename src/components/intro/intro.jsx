import "./intro.css"


const Intro = () =>{
    return(
        <main>
          <div className='main_intro container'>

              <div className='intro_info'>
                <h1 className='intro_title'>
                    A new model for open collaboration
                </h1>
                <p className="intro_desc">
                    Run an organization where members get rewarded for their contributions with fractional ownership.
                </p>

                <button className="intro_button" type="button">Request early access</button>
              </div>

              <div className='intro_banner'>
              </div>

          </div>
        </main>
    )
}

export default Intro