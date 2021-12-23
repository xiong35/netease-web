import './index.scss'

type AdderToggleProps = {
  content: string
}

function AdderToggle(props: AdderToggleProps) {
  const { content } = props
  return (
    <div
      className={
        content !== ''
          ? 'album_detail-body-comments-add_comment-toggle'
          : 'album_detail-body-comments-add_comment-toggle empty'
      }
    >
      {content !== '' ? '评论成功!' : '写点东西吧，内容不能为空哦!'}
    </div>
  )
}

export default AdderToggle
