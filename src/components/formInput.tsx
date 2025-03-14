import React from 'react'
import styles from './formInput.module.css'

type FormInputProps = {
  type?: string
  name: string
  placeholder: string
  textarea?: boolean
  error?: string
  value: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

const FormInput: React.FC<FormInputProps> = ({
  type,
  name,
  placeholder,
  textarea,
  error,
  value,
  onChange,
}) => {
  return (
    <div>
      {textarea ? (
        <textarea
          className="input placeholder-placeholder-text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          className="input placeholder-placeholder-text"
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      <div className={styles.errorContainer}>{error && <p>{error}</p>}</div>
    </div>
  )
}

export default FormInput
