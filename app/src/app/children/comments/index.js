import  GetUserCommentData from "./GetUserCommentData";
import PostCaption from "../postCaption"; 
import '../postCaption/styles.css'

const CommentText = (props) => {
    const { data } = props;
    return(
        <div className="comment-section">
            <PostCaption data={data} />
            <GetUserCommentData data={data} />
        </div>
    )
}

export default CommentText;