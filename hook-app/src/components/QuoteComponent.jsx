import React from 'react';

export default function QuoteComponent({ author, quote }) {
  return (
    <div className="quote">
      <h3>{quote}</h3>
      <p className="align-right"><i>{author}</i></p>
    </div>
  )
}
