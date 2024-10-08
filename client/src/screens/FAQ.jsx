import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="container px-5 my-5">
            <div className="text-center bg-transparent-white">
                <h2 className="display-4 fw-bolder mb-4 text-custom">FAQ</h2>
                <div className="text-start my-5 text-dark">
                    <div className="accordion">
                        <div className="accordion-item">
                            <div className="accordion-header" id="headingOne">
                                <Button
                                    className={`accordion-button ${openIndex === 0 ? 'collapsed' : ''}`}
                                    onClick={() => toggleSection(0)}
                                >
                                    Where can I download the patterns?
                                </Button>
                            </div>
                            <div
                                className={`accordion-collapse collapse ${openIndex === 0 ? 'show' : ''}`}
                                id="collapseOne"
                                aria-labelledby="headingOne"
                            >
                                <div className="accordion-body">
                                    The patterns are not available through this website. The pattern page will contain the pattern source. Patterns found in books or magazines can often be purchased via secondhand retailers such as <a href="https://order.mandarake.co.jp/order/listPage/list?categoryCode=02011401&lang=en" target="_blank" rel="noopener noreferrer">Mandarake</a> or <a href="https://www.dollyteria.com/product-list/36/0/photo?num=50&img=120&available=1&sort=" target="_blank" rel="noopener noreferrer">Dollyteria</a>.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <div className="accordion-header" id="headingTwo">
                                <Button
                                    className={`accordion-button ${openIndex === 1 ? 'collapsed' : ''}`}
                                    onClick={() => toggleSection(1)}
                                >
                                    Why is this website missing certain issues or books?
                                </Button>
                            </div>
                            <div
                                className={`accordion-collapse collapse ${openIndex === 1 ? 'show' : ''}`}
                                id="collapseTwo"
                                aria-labelledby="headingTwo"
                            >
                                <div className="accordion-body">
                                    This website only contains patterns from books I own. I update it when I get a new book, but unfortunately, there isn't enough information available online for me to add anything I do not own. If you'd like to get in touch with me to suggest other data to add, please use the contact form.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <div className="accordion-header" id="headingThree">
                                <Button
                                    className={`accordion-button ${openIndex === 2 ? 'collapsed' : ''}`}
                                    onClick={() => toggleSection(2)}
                                >
                                    Why is this website missing certain doll sizes?
                                </Button>
                            </div>
                            <div
                                className={`accordion-collapse collapse ${openIndex === 2 ? 'show' : ''}`}
                                id="collapseThree"
                                aria-labelledby="headingThree"
                            >
                                <div className="accordion-body">
                                    I add doll sizes based on what I encounter in books or remember off the top of my head. If you'd like a doll added, please contact me using the contact form and send the name of the doll along with its measurements.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <div className="accordion-header" id="headingFour">
                                <Button
                                    className={`accordion-button ${openIndex === 3 ? 'collapsed' : ''}`}
                                    onClick={() => toggleSection(3)}
                                >
                                    What do you mean by "similar dolls"?
                                </Button>
                            </div>
                            <div
                                className={`accordion-collapse collapse ${openIndex === 3 ? 'show' : ''}`}
                                id="collapseFour"
                                aria-labelledby="headingFour"
                            >
                                <div className="accordion-body">
                                    "Similar dolls" are dolls that have similar height, bust, waist, and hip measurements to the reference doll. They are included to help people figure out if clothes for one doll might fit another. Please note that the fit may not be perfect.
                                    <br />
                                    For example, MDDs, MSDs, and Kumakos would all be considered "similar dolls".
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <div className="accordion-header" id="headingFive">
                                <Button
                                    className={`accordion-button ${openIndex === 4 ? 'collapsed' : ''}`}
                                    onClick={() => toggleSection(4)}
                                >
                                    Some data is incorrect, or something isn't working.
                                </Button>
                            </div>
                            <div
                                className={`accordion-collapse collapse ${openIndex === 4 ? 'show' : ''}`}
                                id="collapseFive"
                                aria-labelledby="headingFive"
                            >
                                <div className="accordion-body">
                                    Sorry about that! Please let me know what the problem is via the contact form, and I'll take care of it as soon as possible.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
