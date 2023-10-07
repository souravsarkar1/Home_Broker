import { Heading } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'
async function todos() {
    try {
        let todos = await axios.get("https://jsonplaceholder.typicode.com/todos");
        todos = todos.data;
        return todos;
    } catch (error) {
        return error;
    }
}
const ServerTodo = async () => {
    let data = await todos();
    //console.log(data);
    return (
        <div>
            <Heading>Todos</Heading>

            {data.map((el) => {
                return (
                    <div key={el.id}>
                        <h1>{el.title}</h1>
                    </div>
                )

            })}
        </div>
    )
}

export default ServerTodo
