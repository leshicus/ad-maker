export const Button = ({ handler, children, color, bg }) => (
  <button
    onClick={handler}
    style={{
      border: '1px solid #dcdde9',
      borderRadius: 5,
      padding: '10px 20px',
      color: color || '#535771',
      fontWeight: 'bold',
      background: bg || 'white'
    }}
  >
    {children}
  </button>
)
