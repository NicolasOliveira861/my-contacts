import { Container, Overlay, Footer } from './styles';

import { Button } from '../UI/Button';

export default function Modal() {
  // title, description, buttons
  return (
    <Overlay>
      <Container>
        <h1>Title</h1>
        <p>description</p>

        <Footer>
          <button className="cancel-button" type="button">
            Cancelar
          </button>

          <Button type="button">Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  );
}
