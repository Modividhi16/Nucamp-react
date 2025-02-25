import { COMMENTS } from '../../app/shared/COMMENTS';

export const selectCommentsByCapsiteId = (campsiteId) => {
    return COMMENTS.filter((comment) => comment.campsiteId === parseInt(campsiteId));
};