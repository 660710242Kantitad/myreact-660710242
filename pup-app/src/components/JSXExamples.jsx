import React from 'react';
// import Welcome from './Welcome';
// import Greeting from './Greeting';
import UserCard from './UserCard';
import TodoList from './TodoList';
import TodoList2 from './TodoList2';
import TodoList3 from './TodoList3';
import TodoList4 from './TodoList4';
import TodoList5 from './TodoList5';
import TodoList6 from './TodoList6';
import TodoList7 from './TodoList7';

function JSXExamples() {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h1 style={{
                fontSize: '80px',
                textAlign: 'center',
                color: '#0051ffff',
                marginBottom: '40px'
            }}>
                My Profile
            </h1>
            
         
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #0051ffff',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                {/* <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    Component Composition
                </h2> */}
                <UserCard />
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #0051ffff',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{ color: '#0051ffff', marginBottom: '20px' }}>
                    Monday
                </h2>
                <TodoList />
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #0051ffff',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{ color: '#0051ffff', marginBottom: '20px' }}>
                    Tuesday
                </h2>
                <TodoList2 />
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #0051ffff',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{ color: '#0051ffff', marginBottom: '20px' }}>
                    Wednesday
                </h2>
                <TodoList3 />
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #0051ffff',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{ color: '#0051ffff', marginBottom: '20px' }}>
                    Thursday
                </h2>
                <TodoList4 />
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #0051ffff',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{ color: '#0051ffff', marginBottom: '20px' }}>
                    Friday
                </h2>
                <TodoList5 />
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #0051ffff',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{ color: '#0051ffff', marginBottom: '20px' }}>
                    Saturday
                </h2>
                <TodoList6 />
            </section>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #0051ffff',
                borderRadius: '8px',
                backgroundColor: '#fafafa'
            }}>
                <h2 style={{ color: '#0051ffff', marginBottom: '20px' }}>
                    Sunday
                </h2>
                <TodoList7 />
            </section>
        </div>
    );
}

export default JSXExamples;