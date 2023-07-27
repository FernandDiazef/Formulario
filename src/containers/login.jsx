import React, { useState } from 'react';
import { Button, Card, Form, Alert   } from 'react-bootstrap'
import axios from 'axios';

const Login = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "", archivo: ""});
    const [validated, setValidated] = useState(false);
    const [send, setSend] = useState(false);

    const fetchData = async (URL, formData) => {
        await axios.post(URL, formData)
    }

        // const fetchData = async (URL, formData) => {
    //     const response = await fetch(URL, {
    //                                         method: 'post',
    //                                         headers: {
    //                                                     "Content-Type": "application/json",
    //                                                     Accept: "application/json",},
    //                                         body: JSON.stringify(formData)});
    //     const data = response.json();

    //     return data;
    // }

    const changeValue = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }
    const submit = (event) => {
        const urlApi = 'https://getform.io/f/7c654461-2d21-4db3-9930-a8d4d92faacd';
        const formScope = event.currentTarget;
        if (formScope.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
            setSend(false);
        }else {
            setSend(true);
            fetchData(urlApi, form)
            setForm({ name: "", email: "", message: "", archivo: "" });
            setValidated(false);
            event.preventDefault();
        }
    }

    return (
        <>
            {send &&
                <Alert variant={'info'} className='mt-2'>
                    Su mensaje ha sido enviado con exito
                </Alert>
            }

            <Card className='bg-white p-4'>
                <Card.Title>
                    <p className="text-center">Contactanos</p>
                </Card.Title>
                <Card.Body className='text-center'>
                    <Form 
                        className='d-flex row justify-content-center gap-4' 
                        noValidate 
                        validated={validated} 
                        onSubmit={(event) => submit(event)}
                        >

                        <Form.Control
                            name='name'
                            type="text"
                            value={form.name}
                            placeholder="nombre"
                            onChange={(event) => changeValue(event)}
                            required
                        />

                        <Form.Control
                            name='email'
                            type="email"
                            value={form.email}
                            placeholder="Email"
                            onChange={(event) => changeValue(event)}
                            required
                        />

                        <Form.Control
                            name='archivo'
                            type="file"
                            value={form.archivo}
                            placeholder="archivo"
                            multiple
                            onChange={(event) => changeValue(event)}
                            required
                        />

                        <Form.Control
                            name='message'
                            as="textarea"
                            value={form.message}
                            placeholder="Mensaje"
                            rows={3}
                            onChange={(event) => changeValue(event)}
                            required
                        />
                        <Button 
                        variant="info"
                        type='submit'
                        className='p-2'
                        >
                        Enviar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

        </>
    );
    
}

export { Login };