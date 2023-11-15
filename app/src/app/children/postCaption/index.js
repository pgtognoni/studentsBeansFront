import { getCaptionFromEdges } from "../image/helpers";
import FormatedComment from "./FormatedComment";
import './styles.css'

const PostCaption = (props) => {
    const { data } = props;
    return (
        <div className='comments-container'>
            <span aria-label="owner post caption" className='comment_username'>{data.owner.username}</span>
            <FormatedComment data={getCaptionFromEdges(data.edge_media_to_caption)} />            
        </div>
    )
}

export default PostCaption;