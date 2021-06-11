import { useCallback } from 'react'
import { MAX_CAPTION_COUNT, MAX_CAPTION_TEXT_LENGTH } from './../constants'



export const TextChooser = ({ value, handleSave, tags }) => {
  const handleChange = useCallback(
    (i, value) => {
      handleSave({ [i]: value })
    },
    [handleSave],
  )

  return (
    <>

      <div style={{}}>
        <div style={{ display: 'grid', columnGap: 10, gridAutoFlow: 'column' }}>
          {[...Array(MAX_CAPTION_COUNT)].map((item, i) => (
            <CaptionBlock
              key={i}
              num={i}
              text={value[String(i)] || ''}
              handleChange={(val) => handleChange(String(i), val)}
              tags={tags[i]}
            />
          ))}
        </div>
      </div>
    </>
  )
}

const CaptionBlock = ({ num, text, handleChange, tags }) => {
  return (
    <div style={{ marginTop: 11, display: 'flex', flexDirection: 'column' }}>
      <TextAreaBlock num={num} text={text} handleChange={handleChange} />
      <TagsBlock tags={tags} handleChange={handleChange} />
    </div>
  )
}

const TextAreaBlock = ({ num, text, handleChange }) => {
  return (
    <div style={{ position: 'relative' }}>
      <textarea
        style={{
          border: '1px solid #BCC0D1',
          borderRadius: 8,
          height: 100,
          padding: 14,
          fontSize: 16,
          width: '100%',
        }}
        maxLength={MAX_CAPTION_TEXT_LENGTH}
        placeholder={`Caption ${num + 1}`}
        value={text}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div
        style={{
          position: 'absolute',
          right: 10,
          bottom: 10,
          fontSize: 12,
          color: '#BCC0D1',
        }}
      >
        {String(text).length} / {MAX_CAPTION_TEXT_LENGTH}
      </div>
    </div>
  )
}

const TagsBlock = ({ tags, handleChange }) => {
  return (
    <div>
      {tags &&
        tags.map((item, i) => (
          <Tag key={i} text={tags[i]} handleChange={handleChange} />
        ))}
    </div>
  )
}

const Tag = ({ text, handleChange }) => (
  <div
    style={{
      border: '1px solid white',
      background: 'rgba(90, 0, 238, 0.1)',
      color: '#5A00EE',
      fontSize: 12,
      borderRadius: 8,
      padding: '5px 10px',
      display: 'inline-block',
      marginRight: 4,
      marginBottom: 4,
      cursor: 'pointer',
    }}
    onClick={() => handleChange(text)}
  >
    {text}
  </div>
)
