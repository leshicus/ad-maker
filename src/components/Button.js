export const Button = ({ handler, children }) => (
  <button
    onClick={handler}
    style={{
      border: '1px solid #dcdde9',
      borderRadius: 5,
      padding: '10px 20px',
      background: 'white',
      color: '#535771',
    }}
  >
    {children}
  </button>
)
