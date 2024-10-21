'use client'
import React, { useEffect, useRef } from 'react'
import FormInput from '../../components/formInput'
import styles from './contact.module.css'
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas'

function ContactPage() {
  const canvasRef = useRef<ReactSketchCanvasRef | null>(null)

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
    const drawingSvg = await canvasRef?.current?.exportSvg()

    event.preventDefault()
    const formData = new FormData(event.target)

    if (drawingSvg) {
      formData.append('drawing', drawingSvg)
    }
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

  const clearDrawing = () => {
    canvasRef?.current?.clearCanvas()
  }

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center px-12 w-[500px]">
          <img
            src="/images/get-in-touch-text.png"
            alt="get in touch text"
            width={300}
          />
          <div className="pb-3 text-center">
            I'd love to hear from you! Please get in touch using the form or
            through any of the links below.
          </div>
          <form
            onSubmit={validateInputs}
            className="flex flex-col items-center w-full"
            noValidate
          >
            <div className="flex flex-col w-full">
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
            <div className="relative w-full">
              <p className="absolute text-placeholder-text top-1 left-2">
                Draw Something
              </p>
              <button
                type="button"
                onClick={clearDrawing}
                className="absolute top-1 right-2"
              >
                <img
                  src="images/round-arrow.png"
                  alt="restart arrow icon"
                  width={40}
                />
              </button>
              <ReactSketchCanvas
                ref={canvasRef}
                strokeWidth={1}
                strokeColor="black"
                className={
                  'border-0 rounded-lg w-full pb-6 ' + styles.sketchCanvas
                }
              />
            </div>
            <button type="submit" className="bg-light-blue-grey rounded-lg p-2">
              Send Message
            </button>
            {success && (
              <div className="pt-2 text-xs text-green">
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
