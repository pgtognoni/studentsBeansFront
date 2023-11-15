export default {
  main: {
    backgroundColor: '#fff',
    border: '1px solid #e6e6e6',
    borderBottomRightRadius: '3px',
    borderTopRightRadius: '3px',
    maxWidth: '935px',
    margin: '16px auto',
    width: 'calc(100% - 40px)',
    boxSizing: 'border-box',

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    alignItems: 'center'
  },

  image: {
    order: '1',
    flex: '1 0 60%',
  },

  text: {
    order: '2',
    flex: '1 1 40%',
    alignSelf: 'flex-start',
  }
}
