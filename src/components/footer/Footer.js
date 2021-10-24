import './footer.css'
function Footer() {
  return (
    <footer className="text-center text-lg-start bg-dark text-muted">
      <section
        className="d-flex justify-content-center justify-content-lg-between p-0"
      >


      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>TrietRoBotVjp
              </h6>
              <p>
              Thuộc sở hữu của trietgaming. Do người Việt, và cho người Việt.
              </p>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-globe me-3"></i>Mạng xã hội
              </h6>
              <p>
                <a href="#!" className="text-reset"><i className="fab fa-facebook me-3"></i>Facebook</a>
              </p>
              <p>
                <a href="#!" className="text-reset"><i className="fab fa-discord me-3"></i>Discord</a>
              </p>
            </div>

            <div className="col-md-5 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-phone me-3"></i>Liên hệ & Hỗ trợ
              </h6>
              <p>
                <i className="fas fa-envelope me-3"></i>
                admin@trietrobotvjp.ml
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                support@trietrobotvjp.ml
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
        {"© 2021 Copyright: "}
        <a href="https://trietgaming.ml" className="text-reset fw-bold">trietgaming</a>
      </div>
    </footer>
  )
}

export default Footer;
