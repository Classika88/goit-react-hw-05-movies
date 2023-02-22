import { useSearchParams } from 'react-router-dom';
import { Form, Input } from './InputForm.styled';

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    const query = e.target.value;
    setSearchParams({ query });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          debounceTimeout={500}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          value={query}
          placeholder="Search movie..."
        />
      </Form>
    </div>
  );
}
