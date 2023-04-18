/* eslint-disable operator-linebreak */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import FormGroup from '../FormGroup';
import { Button } from '../UI/Button';
import { ButtonContainer, Container } from './styles';
import { Input } from '../UI/Input';
import { Select } from '../UI/Select';
import isEmailValid from '../../utils/isEmailValid';
import useErrors from '../../hooks/useErrors';
import formatPhone from '../../utils/phoneMask';

export default function ContactForm({ buttonText }) {
  const { errors, removeError, setError, getErrorMessageByFieldName } =
    useErrors();

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
  });

  // --- Error Handlers --- //

  const handleFieldError = (isError, field, message) => {
    if (isError) {
      setError({
        field,
        message,
      });
    }

    if (!isError) removeError({ field });
  };

  // --- Form Handlers --- //

  const errorHandler = ({ name, value }) => {
    if (name === 'name' && !value) {
      handleFieldError(true, 'name', 'Nome é obrigatório!');
    }

    if (name === 'email' && value.length > 3) {
      if (!isEmailValid(value)) {
        handleFieldError(true, 'email', 'E-mail está errado!');
      } else {
        handleFieldError(false, 'email');
      }
    }
  };

  const handleChange = (e) => {
    errorHandler({
      name: e.target.name,
      value: e.target.value,
    });

    if (e.target.name === 'phone') {
      return setFormValues((prev) => ({
        ...prev,
        [e.target.name]: formatPhone(e.target.value),
      }));
    }

    return setFormValues((old) => ({
      ...old,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    errorHandler({
      name: 'name',
      value: formValues.name,
    });

    if (errors.length > 0) return;

    console.log({ formValues });
  };

  // --- useEffects --- //

  useEffect(() => {
    if (formValues.name !== '') {
      handleFieldError(false, 'name');
    }
  }, [formValues]);

  const isFormValid = formValues.name === '' || errors.length > 0;

  return (
    <Container onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          type="text"
          name="name"
          placeholder="Nome*"
          onChange={handleChange}
          error={!!getErrorMessageByFieldName('name')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          onChange={handleChange}
          error={!!getErrorMessageByFieldName('email')}
        />
      </FormGroup>

      <FormGroup>
        <Input
          name="phone"
          type="text"
          value={formValues.phone}
          placeholder="Telefone"
          onChange={handleChange}
          maxLength={15}
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
        <Button type="submit" disabled={isFormValid}>
          {buttonText}
        </Button>
      </ButtonContainer>
    </Container>
  );
}

ContactForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
};
