"use client";
import { useState, useEffect } from "react";

const result = async () => {
    try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        return data.users;  // returns the users array
    } catch (error) {
        console.error(error);
        return [];
    }
};

export default function Page() {
    const [users, setUsers] = useState([]);   
    useEffect(() => {
        const fetchUsers = async () => {
            const data = await result();   
            setUsers(data);   
        };

        fetchUsers();   
    }, []);   
 
    return (
        <div>
            {users.length > 0 ? (
               
                users.map((user, index) => (
                    <h1 key={index}>{user.id}</h1>   
                ))
            ) : (
                <p>Loading users...</p>   
            )}
        </div>
    );
}
