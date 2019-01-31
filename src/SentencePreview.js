import React, { useContext, useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import { WordAPIContext } from './components/context/WordAPIContext'
import { AppStateContext } from './components/context/AppStateContext'

const SentencePreview = props => {

    const { wordList, setWordList, generateWord, preview, setPreview } = useContext(WordAPIContext)
    const { isSubmitting, setIsSubmitting } = useContext(AppStateContext)

    useEffect(() => {
        buildPreview()
    }, [wordList])

    const buildPreview = () => {
        if (wordList.length == 0) return

        const lengthOffset = (wordList.length - 1)
        let newPreview = ""
        const promises = wordList.map((v, i) => {
            return new Promise((resolve, reject) => {
                if (i == 0) {
                    v = v.charAt(0).toUpperCase() + v.slice(1)
                }
                if (i == lengthOffset) {
                    v += "!"
                }

                newPreview += " " + v
                resolve()
            });
        })
        Promise.all(promises)
            .then(() => {
                setPreview(newPreview)
            })
            .then(() => {
                setIsSubmitting(false)
            })
    }

    return (
        <Row>
            <Col md={12}>
                <input
                    id="canvas"
                    className="form-control"
                    type="text"
                    value={preview}
                    placeholder={isSubmitting ? "" : "Put your primo sentence here."}
                    disabled
                />
               {isSubmitting 
                && <i className="fa fa-spin fa-spinner" style={{position: 'absolute', top: 10, left: -3}} />}
            </Col>
        </Row>
    );
};

export default SentencePreview;