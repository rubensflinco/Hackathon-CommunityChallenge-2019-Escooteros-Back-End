let config = {
    mongodb: {
        host: 'escooteros-banco-de-dad-shard-00-00.04gf8.mongodb.net:27017,escooteros-banco-de-dad-shard-00-01.04gf8.mongodb.net:27017,escooteros-banco-de-dad-shard-00-02.04gf8.mongodb.net:27017',
        user: 'admin',
        pass: 'pyqRU4rgz3GSJY-',
        db: 'escooteros',
        urlAdd: '?ssl=true&replicaSet=atlas-31zhma-shard-0&authSource=admin&retryWrites=true&w=majority'
    }
}

module.exports = config;
