import FormatedComment from "./FormatedComment";
import { getCommentText, getOwnerUsername, getViewerLiked} from "./helpers";
import LikeButton from "../like_button";
import './styles.css'

function GetUserCommentData (props) {
    const { data } = props;
    return(
        <>
            {data.edge_media_to_comment.edges.map((comment, index) => {
                return(
                    <div key={index} className='comments-container'>
                        <div>
                            <span className='comment_username'>{getOwnerUsername(comment)}</span>
                            <FormatedComment data={getCommentText(comment)} />
                        </div>
                        <div className='comment-like-btn'>
                            <LikeButton data={getViewerLiked(comment)} />
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default GetUserCommentData;