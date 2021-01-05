import React from 'react';
import api from '../api/api';

export default function useMusicsSearch() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [musicList, setMusicList] = React.useState([]);
  const isMountedRef = React.useRef(false);

  React.useEffect(() => {
    isMountedRef.current = true;

    const listCall = async () => {
      try {
        if (isMountedRef.current) {
          // if (offset === 0) {
          const res = await api.get(`chart/0/tracks`);
          if (res.ok) {
            const { data } = res.data;

            console.log(data);
            setMusicList(data);
            // } else {
            //   const res = await api.get(`chart/0/tracks?index=${String(offset)}`)
            //   const { data } = res.data
            //   return data
            // }
          } else {
            throw res;
          }
        }
      } catch (e) {
        if (isMountedRef.current) {
          setError(true);
          console.log(`Um erro ocorreu: ${e}`);
        }
      } finally {
        if (isMountedRef.current) {
          isMountedRef.current = false;
          setLoading(false);
        }
      }
    };
    listCall();
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  return { loading, error, musicList };
}
