import FormatedComment from "../postCaption/FormatedComment";
import { getCommentText, getOwnerUsername } from "./helpers";
import '../postCaption/styles.css'

function GetUserCommentData (props) {
    const { data } = props;
    return(
        <>
            {data.edge_media_to_comment.edges.map((comment, index) => {
                return(
                    <div key={index} className='comments-container'>
                        <span className='comment_username'>{getOwnerUsername(comment)}</span>
                        <FormatedComment data={getCommentText(comment)} />
                    </div>
                )
            })}
        </>
    )
}

export default GetUserCommentData;