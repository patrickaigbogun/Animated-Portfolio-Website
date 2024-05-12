import Image from "next/image";

export default function Landing() {
  return (
    <>
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


        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
        <script src="script.js"></script>
      </>
  );
}
