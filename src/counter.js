import React, {useEffect, useMemo, useState} from 'react';


function generateData() {
    console.log('generateData')
    return 1
}


// export const Counter = () => {
//     console.log('counter')
//     //const initValue = useMemo(generateData,[])
//
//     return (
//         <div>
//             <button onClick={() => setCounter(state => state + 1)} style={{padding: '20px 50px'}}>Click</button>
//             <div>{counter}</div>
//         </div>
//     );
// };

export const SimpleEx = () => {
    console.log('Simple exempl')

    const [counter, setCounter] = useState(generateData)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log('UseEffect every render components')
    },);
    useEffect(() => {
        console.log('UseEffect first render components')
    },[]);
    useEffect(() => {
        console.log('UseEffect first render components and every change counter')
    },[counter]);

    return (
        <div>Hello, {counter} : {fake}
            <div>
                <button onClick={() => setCounter(counter + 1)}>counter</button>
                <button onClick={() => setFake(fake + 1)}>Fake</button>
            </div>
        </div>

    )
}


