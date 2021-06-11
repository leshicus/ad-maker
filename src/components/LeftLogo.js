import logo from '../assets/images/LeftLogo.png'
import picsart from '../assets/images/PicsArt.png'

export const LeftLogo = () => (
  <div style={{ width: 284, height: '100%', minWidth: 284 }}>
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
