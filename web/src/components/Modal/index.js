import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import { Container, Overlay, Footer } from './styles';
import { Button } from '../UI/Button';

export default function Modal({ danger }) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Title</h1>
        <p>description</p>

        <Footer>
          <button className="cancel-button" type="button">
            Cancelar
          </button>

          <Button danger={danger} type="button">
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root')
  );
}

Modal.propTypes = {
  danger: propTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
