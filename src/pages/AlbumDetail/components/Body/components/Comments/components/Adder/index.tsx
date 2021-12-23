import './index.scss'

import { SongListStore } from '../../../../../../../../mobx/songlist'
import { observer } from 'mobx-react-lite'

function _Adder() {
  return (
    <div className="album_detail-body-comments-add_comment">
      <textarea className="album_detail-body-comments-add_comment-text_area"></textarea>
      <button
        className="album_detail-body-comments-add_comment-btn"
        onClick={() => {
          const commentTextArea = document.querySelector(
            '.album_detail-body-comments-add_comment-text_area'
          ) as HTMLInputElement
          const content = commentTextArea.value

          let timer = null
          if (!timer) {
            timer = setTimeout(() => {
              SongListStore.postComment(content)
              commentTextArea.value = ''
            }, 500)
          }
        }}
      >
        评论
      </button>
    </div>
  )
}

const Adder = observer(_Adder)

export default Adder
