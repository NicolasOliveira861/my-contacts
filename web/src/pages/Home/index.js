import { Link } from 'react-router-dom';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

import {
  Card,
  Container,
  Header,
  InputSearchContainer,
  ListContainer,
} from './styles';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>

        <Link to="/new">Novo contato</Link>
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
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>

            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
