import styled from '@emotion/styled'
import { Button } from './Button'
import { ReactComponent as Download } from '../icons/download.svg'
import facebook from '../assets/images/Facebook ad.png'
import portrait1 from '../assets/images/Portrait 1.png'
import portrait from '../assets/images/Portrait.png'
import story from '../assets/images/Story.png'

const Text = styled.p`
  font-family: 'Gilroy';
  color: ${(props) => props.color};
  line-height: ${(props) => props.lineHeight || '1.2em'};
  font-size: ${(props) => props.fs || '24px'};
  text-align: ${(props) => props.align || 'left'};
`

export const Preview = () => {
  return (
    <>
      <Text color={'#333'}>Export for social platforms</Text>
      <div
        style={{
          display: 'grid',
          columnGap: 40,
          gridAutoFlow: 'column',
          height: 250,
          overflow: 'scroll',
          width: 800,
        }}
      >
        <VideoCard text="Story" src={story} />
        <VideoCard text="Portrait" src={portrait} />
        <VideoCard text="Facebook post" src={facebook} />
        <VideoCard text="Square" src={portrait1} />
      </div>
      <Button style={{ position: 'absolute', top: 490, right: 240 }}>
        Regenerate
      </Button>
      <Button style={{ position: 'absolute', top: 490, right: 100 }}>
        Download All
      </Button>
    </>
  )
}

const VideoCard = ({ src, text }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
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
