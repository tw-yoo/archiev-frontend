import Form from 'react-bootstrap/Form';

const Selector = (props) => {

    const {options, currentSelected, setOptions, updateItems} = props;

    return (
        <>
            <Form>
                {options.map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                    <Form.Check 
                        type='checkbox'
                        id={`${type}`}
                        label={`${type}`}
                        onClick={(e) => {updateItems(e, currentSelected, setOptions)}}
                    />
                    </div>
                ))}
            </Form>
        </>
    )

}

export default Selector;