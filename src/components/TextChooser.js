export const TextChooser = ({ value, handleSave }) => {
  return <div onClick={() => handleSave(value + 1)}>{value}</div>
}
