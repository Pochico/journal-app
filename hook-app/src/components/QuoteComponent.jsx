import React, { useLayoutEffect, useRef, useState } from 'react';

export default function QuoteComponent({ author, quote }) {
    const quoteRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const { width, height } = quoteRef.current.getBoundingClientRect();
        setBoxSize({ width, height });
    }, [quote]);

    return (
        <>
            <div ref={quoteRef} className="quote">
                <h3>{quote}</h3>
                <p className="align-right">
                    <i>{author}</i>
                </p>
            </div>
            <code>{JSON.stringify(boxSize)}</code>
        </>
    );
}
