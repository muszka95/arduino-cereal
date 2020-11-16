export default {
  modules: {
    monitor: {
      timestamp: true,
      timestampLocale: 'en-GB'
    },

    variables: {
      range: {
        fill: '▇',
        empty: '-'
      },
      flag: {
        on: '▣',
        off: '▢'
      }
    }
  },

  colors: {
    default: '#16181c',

    global: {
      heading: '#876600',
      border: '#104061'
    },

    status: {
      connected: '#859900',
      error: '#dc322f',
    },

    monitor: {
      timestamp: '#16181c',
      text: '#16181c'
    },

    variables: {
      range: {
        fill: '#876600',
        empty: '#104061'
      },
      flag: {
        on: '#104061',
        off: '#16181c'
      }
    }
  }
}
