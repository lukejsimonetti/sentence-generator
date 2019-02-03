import React, { memo, useContext } from 'react';
import { Form as FinalForm, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import { Form, Button, ButtonGroup, Row, Col } from 'react-bootstrap'

import WordTypesDropdown from './components/form/WordTypesDropdown'
import {wordTypes} from './components/misc/data'
import { WordAPIContext } from './components/context/WordAPIContext'
import { AppStateContext } from './components/context/AppStateContext'

const GeneratorForm = () => {
    const { setWordList, generateWord } = useContext(WordAPIContext)
    const { isSubmitting, setIsSubmitting } = useContext(AppStateContext)

    const go = (values = []) => {
        setWordList([])
        setIsSubmitting(true)

        const randomWords = values.map(v => {
            return new Promise((resolve) => {
                generateWord(v.value, resolve)
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
                initialValues={{'dynamic_word_types': [wordTypes[0]] }}
                mutators={{
                    ...arrayMutators
                }}
                render={({ form:{ mutators: { push, pop }}, values }) => (
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Row className="mb-3">
                            <FieldArray name="dynamic_word_types">
                                {({ fields }) =>
                                    fields.map((name, index) => (
                                        <Col md={2} key={name}>
                                            <Field
                                                name={`${name}`}
                                                label="Word Type"
                                                render={({input}) => (
                                                    <WordTypesDropdown 
                                                        input={input} 
                                                        initialValue={wordTypes[0]} 
                                                    />
                                                )}
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
                                        onClick={() => go(values.dynamic_word_types)}>
                                        <i className="fa fa-play" />
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