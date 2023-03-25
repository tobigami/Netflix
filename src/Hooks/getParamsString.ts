import { useSearchParams } from 'react-router-dom'

function getParamsString() {
  const [params] = useSearchParams()
  const paramsObj = Object.fromEntries([...params])
  return paramsObj
}

export default getParamsString
