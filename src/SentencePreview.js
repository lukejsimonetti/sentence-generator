import React, { useContext, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import { WordAPIContext } from './components/context/WordAPIContext'
import { AppStateContext } from './components/context/AppStateContext'

const SentencePreview = () => {

    const { wordState, wordCount, preview, setPreview} = useContext(WordAPIContext)
    const { isSubmitting, setIsSubmitting, stopGeneration } = useContext(AppStateContext)

    useEffect(() => {
        buildPreview()
    }, [wordState])

    const buildPreview = () => {
        let newWord = wordState
        if (newWord.length === 0) return
        if(typeof newWord !== "string") return
        if(stopGeneration) return
        

        setPreview(generateNewPreview(newWord))
        setIsSubmitting(false)
    }
    
    const upperCase = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    const addExclamation = (word) => {
        return word += "!"
    }

    const isFirstWord = () => {
        return (preview.length === 0) ? true : false
    }

    const isLastWord = () => {
        return (preview.split(' ').length === (wordCount)) ? true : false
    }

        setPreview(generateNewPreview(newWord))
        const generateNewPreview = () => {
        if (isFirstWord()) {
            newWord = upperCase(newWord)
        }
        if(isLastWord()){
            newWord = addExclamation(newWord)
        }
        let newPreview = preview + " " + newWord
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