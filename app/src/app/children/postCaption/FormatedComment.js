import React from "react"

export default function FormatedComment(props) {

  const { data } = props;

  // Replace '\n' with '<br />' and apply styling to hashtags and mentions
  const formattedText = data.split('\n').map((paragraph, index) => (
    <React.Fragment key={index}>
      {paragraph.split(/\s+/).map((word, index) => (
        word.startsWith('#') || word.startsWith('@') ? (
          <span key={index} style={{ color: 'blue' }}>{word} </span>
        ) : (
          <React.Fragment key={index}>{word} </React.Fragment>
        )
      ))}
      <br />
    </React.Fragment>
  ));

  return <span>{formattedText}</span>;

}