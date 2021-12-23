import './index.scss'

import { SongListStore } from '../../../../../../../../mobx/songlist'
import { observer } from 'mobx-react-lite'
import AdderToggle from './components/AdderToggle'
import { useState } from 'react'

function _Adder() {
  const [showToggle, setShowToggle] = useState(false)
  const [content, setContent] = useState('')

  function submit() {
    const commentTextArea = document.querySelector(
      '.album_detail-body-comments-add_comment-text_area'
    ) as HTMLInputElement
    const content = commentTextArea.value

    setShowToggle(true)
    setTimeout(() => {
      setShowToggle(false)
    }, 2000)

    if (content !== '') {
      SongListStore.postComment(content)
      setContent(content)
      commentTextArea.value = ''
    }
  }

  return (
    <div className="album_detail-body-comments-add_comment">
      <textarea
        className="album_detail-body-comments-add_comment-text_area"
        onKeyDown={e => {
          if (e.key === 'Enter') {
            submit()
          }
        }}
      ></textarea>
      <button
        className="album_detail-body-comments-add_comment-btn"
        onClick={() => {
          submit()
        }}
      >
        评论
      </button>
      {showToggle ? <AdderToggle content={content} /> : ''}
    </div>
  )
}

const Adder = observer(_Adder)

export default Adder
