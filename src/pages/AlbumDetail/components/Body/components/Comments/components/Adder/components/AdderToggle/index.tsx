import './index.scss'

type AdderToggleProps = {
  isEmpty: boolean
}

function AdderToggle(props: AdderToggleProps) {
  const { isEmpty } = props
  return (
    <div
      className={
        !isEmpty
          ? 'album_detail-body-comments-add_comment-toggle'
          : 'album_detail-body-comments-add_comment-toggle empty'
      }
    >
      {!isEmpty ? '评论成功!' : '写点东西吧，内容不能为空哦!'}
    </div>
  )
}

export default AdderToggle
