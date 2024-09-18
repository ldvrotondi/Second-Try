import React, { useState } from 'react'
import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState(false)
    const [captchaToken, setCaptchaToken] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const validateForm = () => {
        const newErrors = {}

        if (!formData.name) {
            newErrors.name = 'Name is required'
        }

        if (!formData.email) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid'
        }

        if (!formData.message) {
            newErrors.message = 'Message is required'
        }

        if (!captchaToken) {
            newErrors.captcha = 'Please complete the reCAPTCHA'
        }

        return newErrors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const validationErrors = validateForm()

        if (Object.keys(validationErrors).length === 0) {
            try {
                await axios.post('/api/contact', {
                    ...formData,
                    captchaToken
                })
                setSuccess(true)
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                })
                setCaptchaToken(null) 
                setErrors({})
            } catch (error) {
                console.error('Error submitting the form', error)
                setSuccess(false)
            }
        } else {
            setErrors(validationErrors)
            setSuccess(false)
        }
    }

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6 px-5 my-3 text-custom bg-transparent-white">
                    <h2 className="display-6 fw-bolder text-custom mb-4 text-center">Contact Us</h2>
                    {success && (
                        <div className="alert alert-success text-center" role="alert">
                            Thank you for your message!
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                            />
                            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                        </div>

                        {/* CAPTCHA */}
                        <ReCAPTCHA
                            sitekey="6Le1YkgqAAAAAPq6p1PwhmlTI72mI5mymurrrUdt" 
                            onChange={(token) => setCaptchaToken(token)}
                            onExpired={() => setCaptchaToken(null)} 
                        />
                        {errors.captcha && <div className="text-danger">{errors.captcha}</div>}

                        <button type="submit" className="btn btn-primary text-light mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
