import PropTypes from 'prop-types';
import FormGroup from '../FormGroup';
import { Button } from '../UI/Button';
import { ButtonContainer, Container } from './styles';
import { Input } from '../UI/Input';
import { Select } from '../UI/Select';

export default function ContactForm({ buttonText }) {
  return (
    <Container>
      <FormGroup>
        <Input type="text" placeholder="Nome" />
      </FormGroup>

      <FormGroup error="O formato do e-mail é inválido.">
        <Input type="text" placeholder="E-mail" error />
      </FormGroup>

      <FormGroup>
        <Input type="text" placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="123">Instagram</option>
          <option value="123">Instagram</option>
          <option value="123">Instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="button">{buttonText}</Button>
      </ButtonContainer>
    </Container>
  );
}

ContactForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
};
