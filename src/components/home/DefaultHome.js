import './DefaultHome.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function DefaultHome() {
  useEffect(() => document.title = "TrietRoBotVjp Client", [])
  return (
    <div className="jumbotron text-center" id="home">
      <h1 className="display-4 shadow-text">TrietRoBotVjp</h1>
      <p className="lead">Một ứng dụng giải trí đa nền tảng, gồm TrietRoBotVjp Discord v2, TrietRoBotVjp Messenger và TrietRoBotVjp Client.</p>
        <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner justify-content-center">
            <div className="carousel-item active" data-bs-interval="2000">
              <Link to="/docs/client">
              <img src="https://drive.google.com/uc?export=view&id=1TJG7yQHPCmelR1kf31nnKv0PSNz6Hzw8" className="d-block" alt="..." width={650}/>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="shadow-text">TrietRoBotVjp Client</h5>
              </div>
              </Link>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <Link to="/docs/discord">
              <img src="https://drive.google.com/uc?export=view&id=1GNJ7toSEJcDmiyGdPUfypF2A-XJWJyPD" className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="shadow-text">TrietRoBotVjp Discord v2</h5>
              </div>
              </Link>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <Link to="/docs/messenger">
              <img src="..." className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="shadow-text">TrietRoBotVjp Messenger (Unreleased)</h5>
              </div>
              </Link>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      <hr className="my-4"/>
      <p>TrietRoBotVjp - Nhanh, dễ hiểu, dễ sử dụng, và giải trí cao.</p>
      <Link className="btn btn-primary btn-lg mt-3" to="/docs" role="button">Tìm hiểu thêm</Link>
    </div>
  )
}

export default DefaultHome;
