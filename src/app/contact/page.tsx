'use client'
import React from 'react'
import FormInput from '../../components/formInput'
import styles from './contact.module.css'

function ContactPage() {
  const defaultInputErrors = {
    name: '',
    email: '',
    message: '',
  }

  const [inputErrors, setInputErrors] = React.useState<{
    name: string
    email: string
    message: string
  }>({
    name: '',
    email: '',
    message: '',
  })

  const [success, setSuccess] = React.useState<boolean>(false)

  async function handleSubmit(event: any) {
    event.preventDefault()
    const formData = new FormData(event.target)

    formData.append('access_key', 'ac3442b0-b10c-475b-b0d6-0a2aabaddcc5')

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    })
    const result = await response.json()
    if (result.success) {
      setInputErrors(defaultInputErrors)
      setSuccess(true)
      console.log(result)
    }
  }

  const validateInputs = (event: any) => {
    event.preventDefault()
    const inputs = new FormData(event.target)
    const validEmailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    const emailValid = validEmailRegex.test(
      inputs.get('email')?.toString() ?? ''
    )
    const errors = {
      name: '',
      email: '',
      message: '',
    }
    let valid = true
    if (inputs.get('name')?.length === 0) {
      errors.name = 'Please enter your name'
      valid = false
    }
    if (inputs.get('message')?.length === 0) {
      errors.message = 'Please enter a message'
      valid = false
    }
    if (inputs.get('email')?.length === 0) {
      errors.email = 'Please enter your email'
      valid = false
    } else if (!emailValid) {
      errors.email = 'This email address is invalid'
      valid = false
    }

    if (valid === false) {
      setInputErrors(errors)
      return
    }

    handleSubmit(event)
  }

  return (
    <div>
      <div className={styles.contactContainer}>
        <div className={styles.contact}>
          <img
            src="/images/get-in-touch-text.png"
            alt="get in touch text"
            width={300}
          />
          <div className="pb-3 text-center">
            I'd love to hear from you! Please get in touch using the form or
            through any of the links below.
          </div>
          <form onSubmit={validateInputs} className={styles.form} noValidate>
            <div className={styles.formInputsContainer}>
              <FormInput
                type="text"
                name="name"
                placeholder="Name"
                error={inputErrors.name}
              />
              <FormInput
                type="email"
                name="email"
                placeholder="Email"
                error={inputErrors.email}
              />
              <FormInput
                name="message"
                placeholder="Message"
                textarea
                error={inputErrors.message}
              />
            </div>

            <button type="submit">Send Message</button>
            {success && (
              <div className={styles.successMessage}>
                Email sent! Thanks for contacting me.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
