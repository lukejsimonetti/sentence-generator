import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap'
import { WordAPIContext } from './components/context/WordAPIContext'


const SentencePreview = props => {

    const { wordList, setWordList, generateWord } = useContext(WordAPIContext)
        
    const getSentence = () => {
        return wordList.map((v,i) => {
            return ""+v+""
        })
    }
    return (
        <Row>
            <Col md={12}>
                <input 
                    id="canvas" 
                    className="form-control" 
                    type="text" 
                    value={wordList.map(v => v)}
                    placeholder="Put your primo sentence here." 
                    disabled 
                />
            </Col>
        </Row>
    );
};

export default SentencePreview;