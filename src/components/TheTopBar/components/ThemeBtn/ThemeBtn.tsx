import theme from '../../images/theme.svg'
import { TheTopbarStore } from '../../../../mobx/thetopbar'
import { observer } from 'mobx-react-lite'

function _PageChanger() {
  return (
    <div className="c-the_top_bar-right-theme-btn">
      <img
        src={theme}
        className="icon"
        onClick={() => {
          TheTopbarStore.toggleSetTheme()
        }}
      />
      <span>更换主题</span>
    </div>
  )
}

const PageChanger = observer(_PageChanger)

export default PageChanger
