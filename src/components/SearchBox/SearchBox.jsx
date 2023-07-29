import { Form, Input, Icon } from './SearchBox.styled';

export const SearchBox = ({ onHandleSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const query = e.target.elements.searchInput.value.trim();
    onHandleSubmit(query);
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Icon />
      <Input name="searchInput" type="text" />
    </Form>
  );
};
