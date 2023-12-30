'use client'
import styles from './contact.module.css'

function ContactPage() {
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
      console.log(result)
    }
  }

  return (
    <div>
      <div className={styles.contactContainer}>
        <div className={styles.contact}>
          <img
            src="./images/get-in-touch-text.png"
            alt="get in touch text"
            width={300}
          />
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formInputsContainer}>
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
              />
              <textarea
                className="input"
                name="message"
                placeholder="Message"
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
