import Button from 'react-bootstrap/Button';

const GraphButton = (props) => {

    return(
        <>
            <Button variant="primary" size="lg" style={{background: "grey"}}>
                Compare emissions
            </Button>{' '}
        </>
    )
}

export default GraphButton;