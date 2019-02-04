import React, { memo, useContext } from 'react';
import { Form as FinalForm, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import { Form, Button, ButtonGroup, Row, Col } from 'react-bootstrap'

import WordTypesDropdown from './components/form/WordTypesDropdown'
import { wordTypes } from './components/misc/data'
import { TooltipHelper } from './components/helper/TooltipHelper'
import { WordAPIContext } from './components/context/WordAPIContext'
import { AppStateContext } from './components/context/AppStateContext'

const GeneratorForm = () => {
    const { setWordState, setWordCount, generateWord } = useContext(WordAPIContext)
    const { isSubmitting, setIsSubmitting } = useContext(AppStateContext)

    const generate = (formValues = []) => {
        const values = formValues.dynamic_word_types
        setWordCount(values.length)
        setWordState([])
        setIsSubmitting(true)

        const randomWords = values.map(v => {
            return new Promise((resolve) => {
                generateWord(v.value, resolve)
            });
        });

        Promise.all(randomWords)
            .then(words =>
                 words.map((word) => {
                   return setWordState(word)
                })
            )
    }

    const stop = () => {

    }

    return (
        <div>
            <FinalForm
                onSubmit={(e) => generate(e)}
                initialValues={{ 'dynamic_word_types': [wordTypes[0]] }}
                keepDirtyOnReinitialize={true}
                mutators={{
                    ...arrayMutators
                }}
                render={({ form: { mutators: { push, pop } }, handleSubmit, pristine, values }) => (
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <FieldArray name="dynamic_word_types">
                                {({ fields }) =>
                                    fields.map((name, index) => (
                                        <Col md={2} key={name}>
                                            <Field
                                                validate={value => (value ? undefined : "Required")}
                                                name={`${name}`}
                                                label="Word Type"
                                                render={({ input, meta }) => (
                                                    <WordTypesDropdown
                                                        {...input}
                                                        meta={meta}
                                                        initialValue={wordTypes[0]}
                                                        index={index}
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
                                    <TooltipHelper placement="bottom" text="Add Word Type">
                                        <Button variant="outline-success" onClick={() => push('dynamic_word_types')}>
                                            <i className="fa fa-plus" />
                                        </Button>
                                    </TooltipHelper>
                                    <TooltipHelper placement="bottom" text="Remove Last Word Type">
                                        <Button variant="outline-danger" onClick={() => pop('dynamic_word_types')}>
                                            <i className="fa fa-minus" />
                                        </Button>
                                    </TooltipHelper>
                                </ButtonGroup>
                            </Col>
                            <Col md={2}>
                                <ButtonGroup>
                                    <TooltipHelper placement="bottom" text="Generate Sentence!">
                                        <Button
                                            disabled={isSubmitting}
                                            variant="success"
                                            type="submit"
                                        >
                                            <i className="fa fa-play" />
                                        </Button>
                                    </TooltipHelper>
                                    <TooltipHelper placement="bottom" text="Stop Generation">
                                        <Button variant="danger" onClick={() => stop()}>
                                            <i className="fa fa-stop" />
                                        </Button>
                                    </TooltipHelper>
                                    <TooltipHelper placement="bottom" text="Clear Word Types">
                                        <Button variant="primary"
                                            onClick={() => {
                                                for (var i = 1; i < values.dynamic_word_types.length; i++) {
                                                    pop('dynamic_word_types')
                                                }
                                            }}
                                            disabled={isSubmitting || pristine}>
                                            <i className="fa fa-undo" />
                                        </Button>
                                    </TooltipHelper>
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