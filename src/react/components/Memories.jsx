import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

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
        <Group controlId="formBasicEmail">
            <Label>Your First Name</Label>
            <Control type="text" placeholder="James" />
        </Group>
        <Group controlId="formBasicEmail">
            <Label>Your Memory</Label>
            <Control as="textarea" rows={3} />
        </Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
  </Body>

</Modal>
)

const Memories = () => {
    const [ showForm, setShowForm ] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();

        setShowForm(true);
    }

    const handleDismiss = () => {
        setShowForm(false);
    }

    return (
        <Section title="Memories">
            <a href="#" onClick={handleClick}>Add a memory</a>
            <MemoryFormModal onDismiss={handleDismiss} show={showForm} />
        </Section>
    );
};

export default Memories;
