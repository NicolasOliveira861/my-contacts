/* eslint-disable react/jsx-no-bind */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import Loader from '../../components/Loader';

import {
  Card,
  Container,
  Header,
  InputSearchContainer,
  ListHeader,
} from './styles';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [contacts, searchTerm]
  );

  function fetchData() {
    setLoading(true);

    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
      .then(async (res) => {
        const json = await res.json();

        setContacts(json);
      })
      .catch((err) => console.log({ err }))

      .finally(() => setLoading(false));
  }

  useEffect(fetchData, [orderBy]);

  function handleOrderBy() {
    setOrderBy((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>
      <Loader isLoading={loading} />

      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquisar contato..."
          onChange={handleChangeSearchTerm}
        />
      </InputSearchContainer>
      <Header>
        <strong>
          {filteredContacts.length}{' '}
          {filteredContacts.length === 1 ? 'contato' : 'contatos'}
        </strong>

        <Link to="/new">Novo contato</Link>
      </Header>

      {filteredContacts.length > 0 && (
        <ListHeader>
          <button className="sort-button" type="button" onClick={handleOrderBy}>
            Nome
            <img
              src={arrow}
              alt="Up Arrow Icon"
              className={orderBy === 'desc' ? 'active' : ''}
            />
          </button>
        </ListHeader>
      )}

      {filteredContacts?.length > 0 &&
        filteredContacts.map((contact) => (
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
    </Container>
  );
}
