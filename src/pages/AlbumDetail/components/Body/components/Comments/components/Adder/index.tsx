import './index.scss'

import { SongListStore } from '../../../../../../../../mobx/songlist'
import { observer } from 'mobx-react-lite'
import AdderToggle from './components/AdderToggle'
import { useState } from 'react'

// 设置timer为全局变量
let timer: ReturnType<typeof setTimeout> | null = null

function _Adder() {
  const [showToggle, setShowToggle] = useState(false)
  const [content, setContent] = useState('')
  const [isEmpty, setIsEmpty] = useState(true)


  function submit() {
    const commentTextArea = document.querySelector(
      '.album_detail-body-comments-add_comment-text_area'
    ) as HTMLInputElement
    setShowToggle(true)

    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      setShowToggle(false)
    }, 2000)

    if (content !== '') {
      SongListStore.postComment(content)
      commentTextArea.value = ''
      setContent('')
      setIsEmpty(false)
    } else {
      setIsEmpty(true)
    }
  }

  return (
    <div className="album_detail-body-comments-add_comment">
      <textarea
        className="album_detail-body-comments-add_comment-text_area"
        onChange={() => {
          const commentTextArea = document.querySelector(
            '.album_detail-body-comments-add_comment-text_area'
          ) as HTMLInputElement
          setContent(commentTextArea.value)
        }}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            submit()
            // 避免回车后产生多余换行符
            e.preventDefault()
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
      {showToggle ? <AdderToggle isEmpty={isEmpty} /> : ''}
    </div>
  )
}

const Adder = observer(_Adder)

export default Adder
