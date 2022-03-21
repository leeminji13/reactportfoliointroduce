import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Get() {
    const [origintext, originUpdate ] = useState('먼저내가 있을께');

    useEffect( async () => {
        // await axios.get('/getsend', {}).then(
        //   res => {
        //     originUpdate(res)

        //   }

        // )
        axios({
          method: "get",
          url: "/getsend",
          responseType: "text"
      }).then(function (res) {
        originUpdate(res)
      });
             
        }
        , [] );

  return (
    <div>{origintext}</div>
  )
}
