import ContactForm from '../../components/ContactsForm';
import PageHeader from '../../components/PageHeader';

export default function EditContact() {
  return (
    <>
      <PageHeader title="Editar contato" />

      <ContactForm buttonText="Salvar alterações" />
    </>
  );
}
