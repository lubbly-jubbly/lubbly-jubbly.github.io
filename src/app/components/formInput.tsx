import React from 'react'
import styles from './formInput.module.css'

type FormInputProps = {
  type?: string
  name: string
  placeholder: string
  textarea?: boolean
  error?: string
}

const FormInput: React.FC<FormInputProps> = ({
  type,
  name,
  placeholder,
  textarea,
  error,
}) => {
  return (
    <div>
      {textarea ? (
        <textarea className="input" name={name} placeholder={placeholder} />
      ) : (
        <input
          className="input"
          type={type}
          name={name}
          placeholder={placeholder}
        />
      )}
      <div className={styles.errorContainer}>{error && <p>{error}</p>}</div>
    </div>
  )
}

export default FormInput
