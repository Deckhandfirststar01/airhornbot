import React from 'react';
import Cloud from './Cloud';
import IslandPond from './IslandPond';
import IslandTree from './IslandTree';
import IslandTrees from './IslandTrees';
import IslandTent from './IslandTent';
import AirhornCountStore from '../stores/AirhornCountStore';
import Constants from '../Constants';

import '../style/style.styl';

const Footer = () => (
  <div className="footer">
    <div className="text">
      Some text will go  here about how you can do something on <a href={Constants.gitHubUrl}>GitHub</a>
      <a href={Constants.gitHubUrl} className="arrow"> ➔</a>
    </div>
  </div>
);

const Content = ({addBtnClick}) => (
  <div className="content">
    <h1 className="title">!airhorn</h1>
    <p className="message">The only bot for <a href={Constants.discordUrl}>Discord</a> you'll ever want</p>
    <video preload className="video-airhorn" id="video-airhorn">
      <source src={Constants.Video.AIRHORN_OGV} type="video/ogv" />
      <source src={Constants.Video.AIRHORN_MP4} type="video/mp4" />
    </video>
    <a className="add-btn" onClick={addBtnClick}>Add to Discord</a>
  </div>
);

const IslandSmall = ({number}) => (
  <img className={`island small-island small-${number}`} src={Constants.Image.ISLAND_SMALL} />
);

const Layout = React.createClass({

  componentWillMount() {
    AirhornCountStore.on('change', this.updateCount);
  },

  playVideo() {
    document.getElementById('video-airhorn').play();
    setTimeout(this.startOAuth, 1500);
  },

  startOAuth() {
    console.log('starting OAuth flow');
    //window.location = '/login';
  },

  updateCount() {
    this.setState({
      count: AddCountStore.getCount()
    });

    console.log(this.state.count);
  },

  render() {

    let smallIslands = [];
    for (let i=1; i<=12; i++) {
      smallIslands.push(<IslandSmall number={i} key={i} />)
    }

    return (
      <div className="container">
        <Content addBtnClick={this.playVideo} />
        <IslandPond />
        <IslandTree />
        <IslandTrees />
        <IslandTent />

        {smallIslands}

        <Cloud type={1} number="1" />
        <Cloud type={2} number="2" />
        <Cloud type={3} number="3" />
        <Cloud type={4} number="4" />
        <Cloud type={3} number="5" />
        <Cloud type={1} number="6" />
        <Cloud type={2} number="7" />
        <Cloud type={4} number="8" />

        <Cloud type={1} number="1" small />
        <Cloud type={2} number="2" small />
        <Cloud type={3} number="3" small />
        <Cloud type={4} number="4" small />
        <Cloud type={2} number="5" small />
        <Cloud type={3} number="6" small />
        <Cloud type={4} number="7" small />
        <Cloud type={1} number="8" small />
        <Cloud type={3} number="9" small />

        <Footer/> 
      </div>
    );
  }
});

export default Layout;