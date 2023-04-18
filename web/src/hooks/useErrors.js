import { useState } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  function setError({ field, message }) {
    const errorAlreadyExists = errors.find((err) => err.field === field);

    if (!errorAlreadyExists) {
      setErrors((prev) => [
        ...prev,
        {
          field,
          message,
        },
      ]);
    }
  }

  function removeError({ field }) {
    setErrors((old) => old.filter((el) => el.field !== field));
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((err) => err.field === fieldName)?.message;
  }

  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  };
}
