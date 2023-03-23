import { useEffect, useRef, useState } from 'react'
import { tmdbAPI } from 'src/apis/base.api'

interface Props {
  id: string
  type: string
}

export default function Video({ id, type }: Props) {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await tmdbAPI.getVideos(type as 'movie' | 'tv', Number(id))
        setVideos(res.data.results.slice(0, 5))
        return res
      } catch (error) {
        throw error
      }
    }
    getVideos()
  }, [id, type])

  if (videos.length < 0) return null
  return (
    <div>
      {videos.map((value: any) => {
        return (
          <div key={value.id}>
            <h2 className='text-2xl font-bold mt-8'>{value.name}</h2>
            <Iframe link={`https://www.youtube.com/embed/${value.key}`} />
          </div>
        )
      })}
    </div>
  )
}

interface PropsIframe {
  link: string
}
function Iframe({ link }: PropsIframe) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  useEffect(() => {
    const height = ((iframeRef.current?.offsetWidth as number) * 9) / 16 + 'px'
    iframeRef.current?.setAttribute('height', height)
    console.log('height', height)
  }, [iframeRef])

  return <iframe ref={iframeRef} className='w-full' src={link}></iframe>
}
