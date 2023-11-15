import React from "react"

export default function FormatedComment(props) {

  const { data } = props;

  // Replace '\n' with '<br />' and apply styling to hashtags and mentions

  const formattedText = data.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line.split(/\s+/).map((word, index) => (
        word.startsWith('#') || word.startsWith('@') ? (
          <span key={index} style={{ color: '#4c68d7' }}>{word} </span>
        ) : (
          <React.Fragment key={index}>{word} </React.Fragment>
        )
      ))}
      <br />
    </React.Fragment>
  ));

  return <span aria-label='comment-text'>{formattedText}</span>;

}