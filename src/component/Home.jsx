
// import  '../style/scss/_home.scss';

const Home = ()=>{
    return<> 
    <div className='section'>
      <div className='home-container'>
        <div className="wrap">
          <div className='stage'>THE NEW CREATIVE ECONOMY</div>
          <h1 className='h1'>Share your creations with the world</h1>
          <div className='text'>Collect and sell digital art, powered by the best online tools.</div>
          <div className='btns'>
            <button
              aria-hidden="true"
           
              className='button'
            >
             Contact US
            </button>
          </div>
        </div>

        <div className='gallery'>
          <div className='heroWrapper'>
            <img
             
              className='preview'
              layout="fill"
              src='https://cosmic-nextjs-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F4929d930-d6a5-11ec-bb19-d9085ce408df-background-description.png&w=1920&q=60'
              placeholder="blur"
              objectFit="cover"
              alt="Team"
              priority
            />
          </div>
        </div>
      </div>
    </div>
    </>
}

export default Home;