import ContactForm from '../../components/ContactsForm';
import PageHeader from '../../components/PageHeader';

export default function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />

      <ContactForm buttonText="Cadastrar" />
    </>
  );
}
