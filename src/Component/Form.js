import React, { useState } from 'react'

const Form = () => {

    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [salary, setSalary] = useState('')


    const Submit = e => {
        e.preventDefault();
        const newData = { name, age, salary }
        setData([...data, newData]);
        setName('');
        setAge('');
        setSalary('');
    }


    return (
        <div>
            <h1>FORM HANDLING </h1>

            <form onSubmit={Submit}>
                <label htmlFor="name">Name : </label>
                <input type="text" name='name' value={name} onChange={e => setName(e.target.value)} /><br />

                <label htmlFor="age">Age : </label>
                <input type="number" name='age' value={age} onChange={e => setAge(e.target.value)} /><br />

                <label htmlFor="salary">Salary : </label>
                <input type="number" name='salary' value={salary} onChange={e => setSalary(e.target.value)} />
                <br />
                <input type='submit' />
            </form>

            <div>
                {
                    data.map((content, index) => <p key={index}>{content.name} || {content.age} || {content.salary}</p>)
                }
            </div>
        </div>
    )
}

export default Form