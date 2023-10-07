"use client"
import { Center, Heading, List, ListItem } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
                setTodos(response.data);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Heading mb={4}>Todos</Heading>
           
                {todos.map(todo => (
                    <div key={todo.id}>{todo.title}</div>
                ))}
         
        </div>
    );
};

export default Todos;
