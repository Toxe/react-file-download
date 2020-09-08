import React from "react";
import Link from "./Link";

const files = ["20030490.jpg", "20030492.jpg", "20030493.jpg", "example.gpx", "README.md"];

export default function Download() {
    return (
        <div>
            {files.map((f) => (
                <Link key={f} filename={f} />
            ))}
        </div>
    );
}
