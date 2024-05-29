import React from 'react'
import { useParams } from 'react-router-dom'

import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
  const { roomID } = useParams();

  const meeting = async (element) => {
    const appID = 10358909;
    const serverSecret = "ce46ecee6b1cff140e6709918e427111";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "sonam"
    ); 

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  };


  return <div ref={meeting} style={{ width: "100vw", height: "100vh" }}></div>
};


export default Room