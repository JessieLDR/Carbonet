// import ParticlesBg from "particles-bg";
import graph from "../images/header.png";
export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        {/* <ParticlesBg type="circle" bg={{zIndex: 0, position:"absolute", top:0}} /> */}
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <div className="left">
                  <h1>
                    {props.data ? props.data.title : 'Loading'}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                  <a
                    href='#features'
                    className='btn btn-custom btn-lg page-scroll'
                  >
                    Start Now
                  </a>{' '}
                  <a
                    href='#demo'
                    className='btn btn-custom btn-lg page-scroll'
                  >
                    Watch Demo
                  </a>{' '}
                </div>
                <div className="graph"><img src={graph} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
