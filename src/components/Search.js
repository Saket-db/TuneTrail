// src/components/Search.js
import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './Search.css'; // Custom CSS for additional styling

const Search = () => {
  return (
    <Form className="search-form d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2 search-input"
        aria-label="Search"
      />
      <Button variant="outline-light" className="search-button">Search</Button>
    </Form>
  );
};

export default Search;
