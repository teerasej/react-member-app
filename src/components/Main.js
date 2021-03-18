
import React, { useState, useEffect} from 'react'
import { CircularProgress } from "@material-ui/core";

export default function Main() {

    const [onLoading, setOnLoading] = useState(true);

    if (onLoading) {
        return (
            <CircularProgress />
        );
    } else {
        return (
            <div>Home</div>
        );
    }
}
