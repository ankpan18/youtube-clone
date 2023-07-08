import React from 'react';
import '../styles/SearchPage.css';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

const SearchPage = () => {
  return (
    <div className='searchPage'>
        <div className='searchPage_filter'>
            <TuneOutlinedIcon/>
            <h2>FILTER</h2>
        </div>
        <hr/>
        <ChannelRow
        image="https://yt3.ggpht.com/YIBi8NVC87fMfJHfQ2O0dyzjis7tUlO7VqWLhk1lq1fkIOQTrpX_Ip7G6S_u0IJosXYSe_Z9=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="NCS"
        verified
        subs="33.4M"
        noOfVideos={2500}
        desc="Songs Available For Free"
        />
        <hr/>

       

<VideoRow 
        views="14K views"
        subs="33.4M"
        desc="Subscribe to NoCopyrightSounds  👉 http://ncs.lnk.to/SubscribeYouTube
        NCS/NoCopyrightSounds: Empowering Creators through No Copyright & Royalty Free Music
        Follow on Spotify: ."
        timestamp="2 hours ago"
        title="Coopex - Over The Sun (Pt. 2) [NCS Release]"
        channel="NoCopyrightSounds"
        image="https://i.ytimg.com/vi/XSBlQ8PJ42E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKPMAs8zwEP0w6YkAF9Jxfh_6uKw"
        />

<VideoRow 
        views="490M views"
        subs="33.4M"
        desc="Subscribe to NoCopyrightSounds  👉 http://ncs.lnk.to/SubscribeYouTube
        NCS/NoCopyrightSounds: Empowering Creators through No Copyright & Royalty Free Music
        Follow on Spotify: ."
        timestamp="7 years ago"
        title="Cartoon- On & On (feat. Daniel Levi) [NCS Release]"
        channel="NoCopyrightSounds"
        image="https://i.ytimg.com/vi/K4DyBUG242c/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVDGZSQEPvPuF1QyELmT2FV6vdaQ"
        />

<VideoRow 
        views="63M views"
        subs="33.4M"
        desc="Subscribe to NoCopyrightSounds  👉 http://ncs.lnk.to/SubscribeYouTube
        NCS/NoCopyrightSounds: Empowering Creators through No Copyright & Royalty Free Music
        Follow on Spotify: ."
        timestamp="3 years ago"
        title="Lost Sky- Where We Started (feat. Jex) [NCS Release]"
        channel="NoCopyrightSounds"
        image="https://i.ytimg.com/vi/U9pGr6KMdyg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDishouj7NaJR6sFdyQZfTbNZhSiw"
        />

<VideoRow 
        views="488K views"
        subs="33.4M"
        desc="Subscribe to NoCopyrightSounds  👉 http://ncs.lnk.to/SubscribeYouTube
        NCS/NoCopyrightSounds: Empowering Creators through No Copyright & Royalty Free Music
        Follow on Spotify: ."
        timestamp="2 years ago"
        title="Unknown Brain - Childhood Dreams [NCS Release]"
        channel="NoCopyrightSounds"
        image="https://i.ytimg.com/vi/p6ePTuu2E_o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDryRKEEqrzUzm2x5w94wolMD07Bw"
        />

<VideoRow 
        views="101M views"
        subs="33.4M"
        desc="Subscribe to NoCopyrightSounds  👉 http://ncs.lnk.to/SubscribeYouTube
        NCS/NoCopyrightSounds: Empowering Creators through No Copyright & Royalty Free Music
        Follow on Spotify: ."
        timestamp="4 years ago"
        title="Robin Hustin x TobiMorrow - Light It Up (feat. Jex) [NCS Release]"
        channel="NoCopyrightSounds"
        image="https://i.ytimg.com/vi/bdE_SyHad90/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhQIB8ofzAP&rs=AOn4CLCYMnS-TsUZ-635keySASgyr_JtJg"
        />

<VideoRow 
        views="554K views"
        subs="400K"
        desc="This is the song used in the commercial of NOkia Lumia."
        timestamp="10 years ago"
        title="Koobra feat Joanna - Something Real"
        channel="hkepcwindowsphone"
        image="https://i.ytimg.com/vi/iSX3tbf98Hg/mqdefault.jpg"
        />
        </div>

        
  )
}

export default SearchPage