import Image from "next/image";
import '@/app/page.module.css';


export default function Landing() {
  return (
    <><head>
      <meta charSet="UTF-8"></meta>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <title>Animated Portfolio Website HTML CSS JS</title>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <link rel="stylesheet" href="style.css"></link>
      </head><body>

        <header className="header">
          <a href="#" className="logo">Patrick</a>
          <nav className="navbar">
            <a href="#" className="active">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
          </nav>
        </header>

        <section className="home">
          <div className="home-content">
            <h1>Hi, I am Patrick</h1>
            <h3>Frontend Developer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam facilis ea
              deserunt sed dignissimos temporibus enim quos impedit perferendis iste accusamus fuga,
              ratione quisquam aliquam incidunt quaerat, sit dolore asperiores.
            </p>
            <div className="btn-box">
              <a href="">Hire Me</a>
              <a href="">Let's Talk</a>
            </div>
          </div>
          <div className="home-sci">
            <a href=""><i className='bx bxl-linkedin'></i></a>
            <a href=""><i className='bx bxl-twitter'></i></a>
            <a href=""><i className='bx bxl-github'></i></a>
          </div>

          <span className="home-imgHover"></span>
        </section>

        <section className="home">
          <div className="home-content">
            <h3>Services</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam facilis ea
              deserunt sed dignissimos temporibus enim quos impedit perferendis iste accusamus fuga,
              ratione quisquam aliquam incidunt quaerat, sit dolore asperiores.
            </p>
            <div className="btn-box">
              <a href="">Hire Me</a>
              <a href="">Let's Talk</a>
            </div>
          </div>
          <div className="home-sci">
            <a href=""><i className='bx bxl-linkedin'></i></a>
            <a href=""><i className='bx bxl-twitter'></i></a>
            <a href=""><i className='bx bxl-github'></i></a>
          </div>

        </section>

        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
        <script src="script.js"></script>
      </body></>
  );
}
