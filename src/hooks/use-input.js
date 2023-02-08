import React, {useState } from 'react'

const useInput = (validateValue, initialValue,) => {
  const [enteredValue, setEnteredValue] = useState(initialValue)
  const [isTouched, setIsTouched] = useState(false)

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
      setEnteredValue(event.target.value)
  }

  const inputBlurHandler = (event) => {
    setIsTouched(true)
}

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

  return {
      value: enteredValue,
      isValid: valueIsValid,
      hasError,
      valueChangeHandler,
      inputBlurHandler,
      reset,
  }
}

export default useInput