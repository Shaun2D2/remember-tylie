import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Section from './Section';

const { Group, Label, Control } = Form;
const { Header, Title, Body } = Modal;

const MemoryFormModal = ({ show, onDismiss }) => (
  <Modal show={show} onHide={onDismiss} size="lg">
    <Header closeButton>
      <Title>Add Your Memory</Title>
    </Header>
    <Body>
      <Form>
        <Group>
          <Label>Your First Name</Label>
          <Control type="text" placeholder="James" />
        </Group>
        <Group>
          <Label>Your Memory</Label>
          <Control as="textarea" maxLength={500} rows={3} />
        </Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Body>

  </Modal>
);

MemoryFormModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

const Memories = () => {
  const [showForm, setShowForm] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('/.netlify/functions/comment').then((res) => setComments(res.data.data));
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    setShowForm(true);
  };

  const handleDismiss = () => {
    setShowForm(false);
  };

  return (
    <Section title="Memories" id="memories">
      <button type="button" className="btn btn-primary" onClick={handleClick}>Add your memory</button>
      <hr />
      <div className="card-columns">
        {comments.map((comment) => (
          <div className="card">
            <div className="card-body">
              <div className="card-text">{comment.comment}</div>
              <div className="card-title">
                {' '}
                -
                {comment.name}
              </div>
            </div>
          </div>
        ))}

      </div>

      <MemoryFormModal onDismiss={handleDismiss} show={showForm} />
    </Section>
  );
};

export default Memories;
