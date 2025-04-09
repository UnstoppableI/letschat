import React from "react";
import "../styles/PostCard.css"; // Importing CSS for styling

export default function PostCard(props) {
    return (
        <div className="post-card m-3 p-3 border rounded shadow">
            <p className="text-sm text-gray-600">{props.author} - {props.date}</p>
            <img src={props.image} alt={props.title} className="w-50 h-48 object-cover rounded" />
            <p className="mt-2">{props.content}</p>
        </div>
    );
}
