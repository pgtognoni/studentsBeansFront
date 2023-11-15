export function getCommentText (data) {
    return data.node.text;
}

export function getOwnerUsername (data) {
    return data.node.owner.username;
}