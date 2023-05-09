/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable operator-linebreak */
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/contacts/')
      .then(async (res) => {
        const json = await res.json();

        setContacts(json);
      })
      .catch((err) => console.log({ err }));
  }, []);

  useEffect(() => console.log({ contacts }), [contacts]);

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>
          {contacts.length} {contacts.length === 1 ? 'contato' : 'contatos'}
        </strong>

        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button className="sort-button" type="button">
            Nome
            <img src={arrow} alt="Up Arrow Icon" />
          </button>
        </header>
        {contacts?.length > 0 &&
          contacts.map((contact) => (
            <Card key={contact.id}>
              <div className="info">
                <div className="contact-name">
                  <strong>{contact.name}</strong>
                  {contact.category_name && (
                    <small>{contact.category_name}</small>
                  )}
                </div>
                <span>{contact.email}</span>
                <span>{contact.phone}</span>
              </div>

              <div className="actions">
                <Link to={`/edit/${contact.id}`}>
                  <img src={edit} alt="Edit" />
                </Link>

                <button type="button">
                  <img src={trash} alt="Delete" />
                </button>
              </div>
            </Card>
          ))}

        {/* <Card>
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
        </Card> */}
      </ListContainer>
    </Container>
  );
}
