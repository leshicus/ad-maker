import styled from '@emotion/styled'
import { Button } from './Button'
import { ReactComponent as Download } from '../icons/download.svg'
import facebook from '../assets/images/Facebook ad.png'
import portrait1 from '../assets/images/Portrait 1.png'
import portrait from '../assets/images/Portrait.png'
import story from '../assets/images/Story.png'

export const Preview = () => {
  return (
    <>
      <div
        style={{
          display: 'grid',
          columnGap: 40,
          gridAutoFlow: 'column',
          height: 250,
          overflow: 'scroll',
          margin: '0 auto',
        }}
      >
        <VideoCard text="Story" width={112} src={story} />
        <VideoCard text="Portrait" width={160} src={portrait} />
        <VideoCard text="Facebook post" width={360} src={facebook} />
        <VideoCard text="Square" width={200} src={portrait1} />
      </div>
      <Button style={{ position: 'absolute', top: 546, right: 240 }}>
        Regenerate
      </Button>
      <Button style={{ position: 'absolute', top: 546, right: 100 }}>
        Download All
      </Button>
    </>
  )
}

const VideoCard = ({ src, text, width }) => (
  <div style={{ display: 'flex', flexDirection: 'column', width }}>
    <img
      src={src}
      style={{
        height: 200,
        marginBottom: 8,
      }}
      alt="#"
    />
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ fontSize: 14 }}>{text}</div>
      <Download onClick={() => downloadFile(src, src.split('/')[3])} />
    </div>
  </div>
)

function downloadFile(url: string, fileName: string) {
  const a = document.createElement('a')
  a.download = fileName
  a.target = '_blank'

  fetch(url)
    .then((res) => {
      const file = new File([res.data], fileName)
      a.href = URL.createObjectURL(file)
      a.click()

      URL.revokeObjectURL(a.href)
    })
    .catch(() => {
      a.href = url
      a.click()
    })
}
