import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
    return (
        <>
            <div id="layoutError">
                <div id="layoutError_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                    <div className="text-center mt-4">
                                        <img
                                            className="mb-4 img-error"
                                            src="assets/img/error-404-monochrome.svg"
                                        />
                                        <p className="lead">
                                            This requested URL was not found on this server.
                                        </p>
                                        <Link to="/">
                                            <i className="fas fa-arrow-left me-1" />
                                            Return to Dashboard
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div id="layoutError_footer">
                    <footer className="py-4 bg-light mt-auto">
                        <div className="container-fluid px-4">
                            <div className="d-flex align-items-center justify-content-between small">
                                <div className="text-muted">Copyright © Your Website 2023</div>
                                <div>
                                    <Link to="#">Privacy Policy</Link>·
                                    <Link to="#">Terms &amp; Conditions</Link>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>

    )
}

export default Error404