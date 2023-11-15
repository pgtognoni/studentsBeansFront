export function getCommentText (data) {
    return data.node.text;
}

export function getOwnerUsername (data) {
    return data.node.owner.username;
}

export function getViewerLiked (data){
    return data.viewer_has_liked;
}