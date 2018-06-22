module.exports = {
  BTC: {
    coinSymbol: 'BTC',
    coinName: 'Bitcoin',
    testnet: false,
    derivePath: 'm/44\'/0\'/0\'/0',
    maxFee: 1000000,
    defaultFee: 1000,
    bitcoinjsNetwork: {
      messagePrefix: '\x18Bitcoin Signed Message:\n',
      bech32: 'bc',
      bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4
      },
      pubKeyHash: 0x00,
      scriptHash: 0x05,
      wif: 0x80
    },
    electrumx: {
      networkName: 'BitcoinSegwit',
      peers: [
        {
          host: 'E-X.not.fyi',
          port: 50002
        },
        {
          host: 'elec.luggs.co',
          port: 443
        },
        {
          host: 'ultra-ecoelectrum.my-gateway.de',
          port: 50002
        },
        {
          host: 'electrum.hsmiths.com',
          port: 50002
        },
        // {
        //   host: 'vps3.hsmiths.com',
        //   port: 50002
        // },
        {
          host: 'ndnd.selfhost.eu',
          port: 50002
        }
      ]
    },
    insight: 'https://insight.bitpay.com/api/'
  },
  BTCTESTNET: {
    coinSymbol: 'BTCTESTNET',
    coinName: 'Bitcoin Testnet',
    testnet: true,
    derivePath: 'm/44\'/1\'/0\'/0',
    maxFee: 1000000,
    defaultFee: 1000,
    bitcoinjsNetwork: {
      messagePrefix: '\x18Bitcoin Signed Message:\n',
      bech32: 'tb',
      bip32: {
        public: 0x043587cf,
        private: 0x04358394
      },
      pubKeyHash: 0x6f,
      scriptHash: 0xc4,
      wif: 0xef
    },
    electrumx: {
      networkName: 'BitcoinSegwitTestnet',
      peers: [
        {
          host: 'testnet.qtornado.com',
          port: 51002
        },
        {
          host: 'testnet1.bauerj.eu',
          port: 50002
        }
        // {
        //   host: 'testnet.hsmiths.com',
        //   port: 53012
        // }
        // {
        //   host: 'electrum.akinbo.org',
        //   port: 51002
        // }
        // {
        //   host: 'testnetnode.arihanc.com',
        //   port: 51001
        // }
      ]
    },
    insight: 'https://test-insight.bitpay.com/api/'
  },
  LTC: {
    coinSymbol: 'LTC',
    coinName: 'Litecoin',
    testnet: false,
    derivePath: 'm/44\'/2\'/0\'/0',
    maxFee: 1000000,
    defaultFee: 50000,
    bitcoinjsNetwork: {
      messagePrefix: '\x19Litecoin Signed Message:\n',
      bip32: {
        public: 0x019da462,
        private: 0x019d9cfe
      },
      pubKeyHash: 0x30,
      scriptHash: 0x32,
      wif: 0xb0
    },
    electrumx: {
      networkName: 'Litecoin',
      peers: [
        {
          host: 'elec.luggs.co',
          port: 444
        },
        {
          host: 'electrum-ltc.bysh.me',
          port: 50002
        },
        {
          host: 'electrum-ltc.festivaldelhumor.org',
          port: 50002
        },
        {
          host: 'electrum.ltc.xurious.com',
          port: 50002
        }
      ]
    },
    insight: 'https://insight.litecore.io/api/'
  },
  LTCTESTNET: {
    coinSymbol: 'LTCTESTNET',
    coinName: 'Litecoin Testnet',
    testnet: true,
    derivePath: 'm/44\'/1\'/0\'/0',
    maxFee: 1000000,
    defaultFee: 50000,
    bitcoinjsNetwork: {
      messagePrefix: '\x18Litecoin Signed Message:\n',
      bip32: {
        public: 0x0436ef7d,
        private: 0x0436f6e1
      },
      pubKeyHash: 0x6f,
      scriptHash: 0xc4,
      wif: 0xef
    },
    electrumx: {
      networkName: 'LitecoinTestnet',
      peers: [
        {
          host: 'electrum-ltc.bysh.me',
          port: 51002
        },
        {
          host: 'electrum-ltc.xurious.com',
          port: 51002
        }
      ]
    },
    insight: undefined
  },
  DASH: {
    coinSymbol: 'DASH',
    coinName: 'Dash',
    testnet: false,
    derivePath: 'm/44\'/5\'/0\'/0',
    maxFee: 1000000,
    defaultFee: 50000,
    bitcoinjsNetwork: {
      messagePrefix: '\x19DarkCoin Signed Message:\n',
      bip32: {
        public: 0x02fe52f8,
        private: 0x02fe52cc
      },
      pubKeyHash: 0x4c,
      scriptHash: 0x10,
      wif: 0xcc
    },
    electrumx: {
      networkName: 'Dash',
      peers: [
        {
          host: 'electrum.dash.siampm.com',
          port: 50002
        },
        {
          host: 'electrum.leblancnet.us',
          port: 50016
        }
      ]
    },
    insight: 'https://insight.dash.org/insight-api-dash/'
  },
  DASHTESTNET: {
    coinSymbol: 'DASHTESTNET',
    coinName: 'Dash Testenet',
    testnet: true,
    derivePath: 'm/44\'/1\'/0\'/0',
    maxFee: 1000000,
    defaultFee: 50000,
    bitcoinjsNetwork: {
      messagePrefix: '\x19DarkCoin Signed Message:\n',
      bip32: {
        public: 0x043587cf,
        private: 0x04358394
      },
      pubKeyHash: 0x8c,
      scriptHash: 0x13,
      wif: 0xef
    },
    electrumx: {
      networkName: 'DashTestnet',
      peers: 'undefined'
    }
  }
}
