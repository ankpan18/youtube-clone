import React from 'react';
import '../styles/ChannelRow.css';
import { Avatar } from '@material-ui/core';
import VerifiedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const ChannelRow = ({image, channel, subs, noOfVideos, desc,verified}) => {
  return (
    <div className='channelRow'>
     <Avatar className="channelRow_logo" alt={channel} src={image}/>
     <div className='channelRow_text'>
      <h4>{channel} {verified && <VerifiedIcon/>}</h4>
      <p>{subs} subscribers · {noOfVideos} videos</p>
      <p>{desc}</p>
     </div>
    </div>
  )
}

export default ChannelRow;