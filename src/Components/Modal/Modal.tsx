import { useEffect, useRef } from 'react'

interface Props {
  isShow: boolean
  onClose: () => void
  link: string
}

export default function Modal({ isShow, onClose, link }: Props) {
  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((e.target as any).id === 'wrapper') {
      console.log('click')
      return onClose()
    }
  }
  if (!isShow) return null
  const iRef = useRef<HTMLIFrameElement | null>(null)
  useEffect(() => {
    const height = (Number(iRef.current?.offsetWidth) * 9) / 16 + 'px'
    iRef.current?.setAttribute('height', height)
  }, [])
  return (
    <div
      onClick={handleClose}
      className='fixed inset-0 z-30 backdrop-blur-sm justify-center items-center flex bg-transparent bg-opacity-25'
      id={'wrapper'}
    >
      <div className='bg-transparent rounded-sm shadow-sm flex flex-col xl:w-[60%] w-[90%]'>
        <button className='text-2xl place-self-end' onClick={() => onClose()}>
          x
        </button>
        <div className='p-2 bg-gray-300 rounded-sm flex justify-center'>
          {link === '' ? (
            <div className='text-white bg-black font-semibold text-2xl text-center w-[600px] capitalize py-4'>
              xin lỗi bạn! Bộ phim này chưa có trailer
            </div>
          ) : (
            <iframe ref={iRef} className='w-[100%]' src={`https://www.youtube.com/embed/${link}`}></iframe>
          )}
        </div>
      </div>
    </div>
  )
}
