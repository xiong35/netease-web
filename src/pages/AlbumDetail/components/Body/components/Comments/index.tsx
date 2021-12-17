import './index.scss'

import Comment from './components/comment'
import PageSelector from './components/PageSelector'

import { observer } from 'mobx-react-lite'
import { SongListStore } from '../../../../../../mobx/songlist'

function _Comments() {
  return (
    <div className="album_detail-body-comments">
      <div className="album_detail-body-comments-hotest">
        <div className="album_detail-body-comments-hotest-header">精彩评论</div>
        <div className="album_detail-body-comments-hotest-list">
          {SongListStore.hotComments.length
            ? SongListStore.hotComments.map(item => (
                <Comment data={item} key={item.commentId} />
              ))
            : ''}
        </div>
      </div>
      <div className="album_detail-body-comments-newest">
        <div
          className="album_detail-body-comments-newest-header"
          id="ad_co-newest_header"
        >
          最新评论({SongListStore.commentCount})
        </div>
        <div className="album_detail-body-comments-newest-list">
          {SongListStore.comments.length
            ? SongListStore.comments.map(item => (
                <Comment data={item} key={item.commentId} />
              ))
            : ''}
        </div>
      </div>
      {SongListStore.commentCount > SongListStore.commentLimit ? (
        <PageSelector />
      ) : (
        ''
      )}
    </div>
  )
}

const Comments = observer(_Comments)

export default Comments
