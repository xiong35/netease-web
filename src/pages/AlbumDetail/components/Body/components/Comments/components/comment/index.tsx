import './index.scss'

import { SingleComment } from '../../../../../../../../models/Comments'
import { dateFormat } from '../../../../../../../../utils/dateFormat'

type commentProps = {
	data: SingleComment
}

function Comment(props: commentProps) {
	return (
		<div className="album_detail-body-comments-item">
			<img
				src={props.data.user.avatarUrl}
				className="album_detail-body-comments-item-avatar"
			/>
			<div className="album_detail-body-comments-item-body">
				<div className="album_detail-body-comments-item-body-upper">
					<span className="album_detail-body-comments-item-body-upper-nick_name">
						{props.data.user.nickname + ':'}
					</span>
					<span className="album_detail-body-comments-item-body-upper-content">
						{props.data.content}
					</span>
				</div>
				{props.data.beReplied.length !== 0 ? (
					<div className="album_detail-body-comments-item-body-replied">
						<span className="album_detail-body-comments-item-body-replied-name">
							@{props.data.beReplied[0].user.nickname}：
						</span>
						<span className="album_detail-body-comments-item-body-replied-content">
							{props.data.beReplied[0].content}
						</span>
					</div>
				) : (
					''
				)}
				<div className="album_detail-body-comments-item-body-date">
					{dateFormat(props.data.time)}
				</div>
			</div>
		</div>
	)
}

export default Comment
