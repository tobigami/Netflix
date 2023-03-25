import NoImage from 'src/assets/Image/NoImage.png'

export const ImgC = {
  origin: (path: string) => {
    return `https://image.tmdb.org/t/p/original${path}`
  },

  w500: (path: string) => {
    return `https://image.tmdb.org/t/p/w500${path}`
  }
}
