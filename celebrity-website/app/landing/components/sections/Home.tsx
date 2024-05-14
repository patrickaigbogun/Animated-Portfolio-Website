

export default function Home() {
    return (
      <>
          <section className="home" id="home">
            <div className="px-4 pt-5 my-5 text-center border-bottom">
              <h1 className="display-4 fw-bold">Home</h1>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5 btn-box">
                  <a href="button" className="btn btn-primary btn-lg px-4 me-sm-3 ">Join the club!</a>
                  <a href="button" className="btn btn-outline-secondary btn-lg px-4">Book me!</a>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="container px-5">
                  <img src="/home.png" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"></img>
                </div>
              </div>  
            </div>  
            <div className="home-sci">
              <a href=""><i className='bx bxl-linkedin'></i></a>
              <a href=""><i className='bx bxl-twitter'></i></a>
              <a href=""><i className='bx bxl-github'></i></a>
            </div>
          </section>
  
  
         
        </>
    );
  }
  