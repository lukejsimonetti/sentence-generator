import React, { memo, useContext, useState, useEffect } from 'react';
import { Form as FinalForm, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import { Form, Button, ButtonGroup, Row, Col } from 'react-bootstrap'

import WordTypesDropdown from './components/form/WordTypesDropdown'
import { WordAPIContext } from './components/context/WordAPIContext'
import { AppStateContext } from './components/context/AppStateContext'

const GeneratorForm = props => {
    const { wordList, setWordList, generateWord, preview, setPreview } = useContext(WordAPIContext)
    const { isSubmitting, setIsSubmitting } = useContext(AppStateContext)

    const go = (initial, dynamic = []) => {
        setWordList([])
        setIsSubmitting(true)

        let mergedArr = []
        mergedArr.push(initial)
        if (dynamic.length > 0) mergedArr.push(...dynamic)

        const randomWords = mergedArr.map(v => {
            return new Promise((resolve, reject) => {
                generateWord(v.value, resolve);
            });
        });

        Promise.all(randomWords)
            .then(words =>
                setWordList(words)
            )
    }

    const stop = () => {

    }

    return (
        <div>
            <FinalForm
                onSubmit={() => { }}
                initialValues={{ 'initial_word_types': { value: 'adjective', label: 'adjective' } }}
                mutators={{
                    ...arrayMutators
                }}
                render={({ mutators: { push, pop }, values }) => (
                    <Form onSubmit={(e) => e.preventDefault()}>
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
                                        disabled={isSubmitting}
                                        variant="success"
                                        onClick={() => go(values.initial_word_types, values.dynamic_word_types)}>
                                        <i className="fa fa-play" />
                                        Submitting
                                        </Button>
                                    <Button variant="danger" onClick={() => stop()}>
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