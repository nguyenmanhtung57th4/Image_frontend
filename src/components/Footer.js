import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer font-small indigo">
                <div className="container">
                    <div className="row text-center d-flex justify-content-center pt-5 mb-3">
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                        <a href="#!">About us</a>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                        <a href="#!">Products</a>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                        <a href="#!">Awards</a>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                        <a href="#!">Help</a>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-3">
                        <h6 className="text-uppercase font-weight-bold">
                        <a href="#!">Contact</a>
                        </h6>
                    </div>
                    </div>
                    <hr className="rgba-white-light"/>
                    <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
                    <div className="col-md-8 col-12 mt-5">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo.
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                    </div>
                    </div>
                    <hr className="clearfix d-md-none rgba-white-light"/>
                    <div className="row pb-3">
                    <div className="col-md-12">

                        <div className="mb-5 flex-center">
                        <a className="fb-ic">
                            <i className="fab fa-facebook-f fa-lg white-text mr-4"> </i>
                        </a>
                        <a className="tw-ic">
                            <i className="fab fa-twitter fa-lg white-text mr-4"> </i>
                        </a>
                        <a className="gplus-ic">
                            <i className="fab fa-google-plus-g fa-lg white-text mr-4"> </i>
                        </a>
                        <a className="li-ic">
                            <i className="fab fa-linkedin-in fa-lg white-text mr-4"> </i>
                        </a>
                        <a className="ins-ic">
                            <i className="fab fa-instagram fa-lg white-text mr-4"> </i>
                        </a>
                        <a className="pin-ic">
                            <i className="fab fa-pinterest fa-lg white-text"> </i>
                        </a>

                        </div>

                    </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2018 Copyright:
                    <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
                </div>
                </footer>
            </div>
        )
    }
}
