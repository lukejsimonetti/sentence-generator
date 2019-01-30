import React, { memo } from 'react';
import { Form as FinalForm, Field } from 'react-final-form'

import {  Form, Card, Button, ButtonGroup, Container, Row, Col } from 'react-bootstrap'

import WordTypesDropdown from './components/form/WordTypesDropdown'

const GeneratorForm = () => {
    const handleSubmit = values => {
        // setIsSubmitting(true)
        // add api call here
        // sleep(5000)
        //     .then(() => {
        //         console.log(values)
        //         closeModal()
        //     })
        //     .then(() => {
        //         setIsSubmitting(false)
        //     })
    }

    return (
        <div>
            <FinalForm
                onSubmit={handleSubmit}
                // initialValues={{ : '' }}
                render={({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col md={2}>
                                <Field
                                    name="word_types_dropdown"
                                    label="Word Type"
                                    id="word_types_dropdown"
                                    component={WordTypesDropdown}
                                    componentClass="textarea"
                                    rows="6"
                                />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                                <Col md={2}>
                                    <ButtonGroup>
                                        <Button variant="outline-success" onClick={() => { }}>
                                            <i className="fa fa-plus" />
                                        </Button>
                                        <Button variant="outline-danger" onClick={() => { }}>
                                            <i className="fa fa-minus" />
                                        </Button>
                                    </ButtonGroup>
                                </Col>
                                <Col md={2}>
                                    <ButtonGroup>
                                        <Button 
                                        type="submit"
                                        // disabled={isSubmitting}
                                        variant="success" onClick={() => { }}>
                                            <i className="fa fa-play" />
                                            Submitting <i className="fa fa-spinner fa-spin" />
                                        </Button>
                                        <Button variant="danger" onClick={() => { }}>
                                            <i className="fa fa-stop" />
                                        </Button>
                                    </ButtonGroup>
                                </Col>
                        </Row>

                    </Form>
                )}
            />

        </div>
    );
};

export default memo(GeneratorForm);