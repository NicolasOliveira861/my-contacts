import { Card, Container, Header, ListContainer } from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>

        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button className="sort-button" type="button">
            Nome
            <img src={arrow} alt="Up Arrow Icon" />
          </button>
        </header>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Nicolas Oliveira</strong>
              <small>instagram</small>
            </div>
            <span>nicolassouzadeoliveira84@gmail.com</span>
            <span>(41)99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>

            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Nicolas Oliveira</strong>
              <small>instagram</small>
            </div>
            <span>nicolassouzadeoliveira84@gmail.com</span>
            <span>(41)99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>

            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Nicolas Oliveira</strong>
              <small>instagram</small>
            </div>
            <span>nicolassouzadeoliveira84@gmail.com</span>
            <span>(41)99999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>

            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
