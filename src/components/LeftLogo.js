import logo from '../assets/images/leftLogo.png'
import picsart from '../assets/images/picsArt.png'

export const LeftLogo = () => (
  <div style={{ width: 284, height: '100%' }}>
    <img
      src={picsart}
      alt=""
      style={{ position: 'absolute', top: 30, left: 90 }}
    />
    <div
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: 'cover',
        height: '100%',
      }}
    />
  </div>
)
