import useState from 'react'
import {
  MainContainer,
  ImagesContainer,
  ImgTag,
  Text,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [lockStatus, setLockStatus] = useState(true)

  const onBtnClick = () => {
    setLockStatus(prevState => !prevState)
  }
  return (
    <MainContainer>
      <ImagesContainer>
        {lockStatus ? (
          <ImgTag
            src="https://assets.ccbp.in/frontend/hooks/lock-ImgTag.png"
            alt="lock"
          />
        ) : (
          <ImgTag
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
        )}
      </ImagesContainer>
      <Text>Your Device is {lockStatus ? 'Locked' : 'Unlocked'}</Text>
      <Button type="button" onChange={onBtnClick}>
        {!lockStatus ? 'Lock' : 'Unlock'}
      </Button>
    </MainContainer>
  )
}

export default Unlock
