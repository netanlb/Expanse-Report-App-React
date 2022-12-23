import { useState } from 'react';


export function TestComponent() {
    const haim = 'HAIM ATIYA';
    const [haimName, setHaimName] = useState('haim');


    function onApplyClick(nameToSet) {
        setHaimName(nameToSet);
    }

    return (
        <div>
            <label>Change Name: </label><input type="text" onChange={(event) => onApplyClick(event.target.value)}></input><button>apply</button>
            {haimName}
        </div>
    )
}

