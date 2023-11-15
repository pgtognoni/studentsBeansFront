import  GetUserCommentData from "./GetUserCommentData";
import PostCaption from "../postCaption"; 
import './styles.css'

const CommentText = (props) => {
    const { data } = props;
    return(
        <div className="comment-section" aria-label='comments-section'>
            <PostCaption data={data} />
            <GetUserCommentData data={data} />
        </div>
    )
}

export default CommentText;