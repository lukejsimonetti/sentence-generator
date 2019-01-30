import React, { memo, useContext, useState, useEffect } from 'react';
import { Form as FinalForm, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import { Form, Button, ButtonGroup, Row, Col } from 'react-bootstrap'

import WordTypesDropdown from './components/form/WordTypesDropdown'
import { WordAPIContext } from './components/context/WordAPIContext'

const GeneratorForm = props => {
    const { getGeneratedWord } = useContext(WordAPIContext)
    const [wordState, setWordState] = useState([])
    const [isSubmitting, setIsSubmitting] = useState(false)

    const go = (initial, dynamic = []) => {
        setIsSubmitting(true)
        let mergedArr = []
        mergedArr.push(initial)
        if (dynamic.length > 0) mergedArr.push(...dynamic)

        mergedArr.map((v, i) => {
            return getGeneratedWord(v.value, setGeneratedWord)
        })

        setIsSubmitting(false)
    }

    const stop = () => {

    }

    const setGeneratedWord = (val) => {
        const newState = wordState
        setWordState([newState.push(val)])
    }

    return (
        <div>
            <FinalForm
                onSubmit={() => { }}
                initialValues={{ 'initial_word_types': { value: 'adjective', label: 'adjective' } }}
                mutators={{
                    ...arrayMutators
                }}
                render={({ handleSubmit, mutators: { push, pop }, values }) => (
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col md={2}>
                                <Field
                                    name={`initial_word_types`}
                                    label="Word Type"
                                    component={WordTypesDropdown}
                                />
                            </Col>
                            <FieldArray name="dynamic_word_types">
                                {({ fields }) =>
                                    fields.map((name, index) => (
                                        <Col md={2} key={name}>
                                            <Field
                                                name={`${name}`}
                                                label="Word Type"
                                                component={WordTypesDropdown}
                                            />
                                        </Col>
                                    ))}
                            </FieldArray>
                        </Row>
                        <Row className="mb-3">
                            <Col md={2}>
                                <ButtonGroup>
                                    <Button variant="outline-success" onClick={() => push('dynamic_word_types')}>
                                        <i className="fa fa-plus" />
                                    </Button>
                                    <Button variant="outline-danger" onClick={() => pop('dynamic_word_types')}>
                                        <i className="fa fa-minus" />
                                    </Button>
                                </ButtonGroup>
                            </Col>
                            <Col md={2}>
                                <ButtonGroup>
                                    <Button
                                        // disabled={isSubmitting}
                                        variant="success"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            go(values.initial_word_types, values.dynamic_word_types);
                                        }
                                        }>
                                        <i className="fa fa-play" />
                                        Submitting
                                        </Button>
                                    <Button variant="danger" onClick={() => stop()}>
                                        <i className="fa fa-stop" />
                                    </Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                        {isSubmitting ? "true" : "False"}
                    </Form>
                )}
            />

        </div>
    );
};

export default memo(GeneratorForm);