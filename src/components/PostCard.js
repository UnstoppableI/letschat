import React from "react";
import "../styles/PostCard.css"; // Importing CSS for styling

export default function PostCard(props) {
    return (
        <div className="post-card m-3 p-3 border rounded shadow">
            <span className="text-sm "><a className="font-bold">{props.author}</a> - {props.timestamp}</span>
            <img src={props.image} alt={props.title} className="w-80 h-48  mx-auto rounded " />
            <p className="mt-2">{props.content}</p>
        </div>
    );
}
