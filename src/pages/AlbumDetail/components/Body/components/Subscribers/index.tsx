import './index.scss'

import Subscriber from './components/Subscriber'
import { SongListStore } from '../../../../../../mobx/songlist'
import { observer } from 'mobx-react-lite'

function _Subscribers() {
  return (
    <>
      {SongListStore.subscribers.length ? (
        <div className="album_detail-body-subscribers">
          {SongListStore.subscribers.map(subscriber => (
            <Subscriber data={subscriber} key={subscriber.userId} />
          ))}
        </div>
      ) : (
        <div className="album_detail-body-no_subscribers">暂无收藏者</div>
      )}
    </>
  )
}

const Subscribers = observer(_Subscribers)

export default Subscribers
