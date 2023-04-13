/* eslint-disable operator-linebreak */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import FormGroup from '../FormGroup';
import { Button } from '../UI/Button';
import { ButtonContainer, Container } from './styles';
import { Input } from '../UI/Input';
import { Select } from '../UI/Select';
import isEmailValid from '../../utils/isEmailValid';

export default function ContactForm({ buttonText }) {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
  });

  const [errors, setErrors] = useState([]);

  // --- Error Handlers --- //

  const handleFieldError = (isError, field, message) => {
    const errorAlreadyExists = errors.find((err) => err.field === field);

    if (!errorAlreadyExists && isError) {
      setErrors((old) => [
        ...old,
        {
          field,
          message,
        },
      ]);

      return;
    }

    setErrors((old) => old.filter((el) => el.field !== field));
  };

  // --- Form Handlers --- //

  const handleChange = (e) => {
    if (e.target.name === 'name' && !e.target.value) {
      handleFieldError(true, 'name', 'Nome é obrigatório!');
    }

    if (
      e.target.name === 'email' &&
      e.target.value &&
      !isEmailValid(e.target.value)
    ) {
      handleFieldError(true, 'email', 'E-mail está errado!');
    } else {
      handleFieldError(false, 'email');
    }

    return setFormValues((old) => ({
      ...old,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValues.name === '') {
      return handleFieldError(true, 'name', 'Nome é obrigatório!');
    }

    return console.log({ formValues });
  };

  // --- useEffects --- //

  useEffect(() => {
    if (formValues.name !== '') {
      handleFieldError(false, 'name');
    }
  }, [formValues]);

  useEffect(() => console.log({ errors }), [errors]);

  return (
    <Container onSubmit={handleSubmit}>
      <FormGroup
        error={
          errors.find((el) => el.field === 'name')
            ? errors.find((el) => el.field === 'name').message
            : ''
        }
      >
        <Input
          type="text"
          name="name"
          placeholder="Nome"
          onChange={handleChange}
          error={!!errors.find((el) => el.field === 'name')}
        />
      </FormGroup>

      <FormGroup
        error={
          errors.find((el) => el.field === 'email')
            ? errors.find((el) => el.field === 'email').message
            : ''
        }
      >
        <Input
          name="email"
          type="text"
          placeholder="E-mail"
          onChange={handleChange}
          error={!!errors.find((el) => el.field === 'email')}
        />
      </FormGroup>

      <FormGroup>
        <Input
          name="phone"
          type="text"
          placeholder="Telefone"
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Select name="category" placeholder="Categoria" onChange={handleChange}>
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="linkedin">Linkedin</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">{buttonText}</Button>
      </ButtonContainer>
    </Container>
  );
}

ContactForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
};
