import React, { useContext, useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import { WordAPIContext } from './components/context/WordAPIContext'

const SentencePreview = props => {

    const { wordList, setWordList, generateWord, preview, setPreview } = useContext(WordAPIContext)
        
    useEffect(() => {
        buildPreview()
    }, [wordList])

    const buildPreview = () => {
        if(wordList.length == 0) return

        const lengthOffset = (wordList.length - 1)
        let newPreview = ""
        wordList.map( (v,i) => {
            if(i == 0) {
                v = v.charAt(0).toUpperCase() + v.slice(1)
            }
            if(i == lengthOffset) {
                v += "!"
            }
            
            newPreview += " " + v
            setPreview(newPreview)
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
                    placeholder="Put your primo sentence here." 
                    disabled 
                />
            </Col>
        </Row>
    );
};

export default SentencePreview;