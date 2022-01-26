module.exports = {
    user: 'postgres',
    host: '127.0.0.1',
    dbname: 'guia',
    password: '1234',
    port: 5433,
    str: function() {
        return `postgres://${this.user}:${this.password}@${this.host}:${this.port}/${this.dbname}`
    },
};
