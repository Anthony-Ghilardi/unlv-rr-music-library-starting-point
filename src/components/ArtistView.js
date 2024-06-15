import './ArtistView.css'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

function ArtistView() {
    return (
        <div>
            {/* Inline styling can override a css file */}
            <h1 style={{color: 'blue'}}>Artist Data goes here</h1>

            <Dropdown>
                <Dropdown.Toggle>
                    Choose your favorite music
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>Rock</Dropdown.Item>
                    <Dropdown.Item>R&B</Dropdown.Item>
                    <Dropdown.Item>Blues</Dropdown.Item>
                    <Dropdown.Item>Country</Dropdown.Item>
                    <Dropdown.Item>Hip Hop</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Button>Submit</Button>
        </div>
    )
}

export default ArtistView