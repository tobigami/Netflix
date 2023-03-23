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
  return (
    <div
      onClick={handleClose}
      className='fixed inset-0 z-20 backdrop-blur-sm justify-center items-center flex bg-transparent bg-opacity-25'
      id={'wrapper'}
    >
      <div className='bg-transparent rounded-sm shadow-sm flex flex-col'>
        <button className='text-2xl place-self-end' onClick={() => onClose()}>
          x
        </button>
        <div className=' p-2 bg-gray-300 rounded-sm'>
          {link === '' ? (
            <div className='text-white bg-black font-semibold text-2xl text-center w-[600px] capitalize py-4'>
              xin lỗi bạn! Bộ phim này chưa có trailer
            </div>
          ) : (
            <iframe className='w-[800px] h-[500px]' src={`https://www.youtube.com/embed/${link}`}></iframe>
          )}
        </div>
      </div>
    </div>
  )
}
