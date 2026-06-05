import React from 'react';
import { Counter } from './components/Counter';
import { TextInput } from './components/TextInput';
import { TodoList } from './components/TodoList';

export default function App() {
  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2>React useState Examples</h2>
      <Counter />
      <TextInput />
      <TodoList />
    </div>
  );
}
