import './index.scss'
import Logo from './components/Logo/Logo'
import PageChanger from './components/PageChanger/PageChanger'
import SearchBar from './components/SearchBar/SearchBar'
import Login from './components/Login/Login'
import ThemeBtn from './components/ThemeBtn/ThemeBtn'

// type TheTopBarProps = {

// }

function TheTopBar(/* props: TheTopBarProps */) {
	// const {} = props;
	return (
		<div className="c-the_top_bar">
      <Logo />
      <div className="c-the_top_bar-middle">
        <PageChanger />
        <SearchBar />
      </div>
      <div className="c-the_top_bar-right">
        <Login />
        <ThemeBtn />
      </div>
		</div>
	)
}

export default TheTopBar
