import convict from 'convict'
const config = convict({
    env: {
        doc: 'Entorno de applicación',
        format: ['prd', 'qas', 'dev'],
        env: 'NODE_ENV',
        default: 'dev'
    },
    app: {
        port: {
          doc: 'Puerto de la applicación',
          format: String,
          env: 'APP_PORT',
          default: '3001'
        },
        name: {
          doc: 'Nombre de la applicación',
          format: String,
          env: 'APP_NAME',
          default: 'app-to-do-list'
        },
        version: {
          doc: 'Versión de la applicación',
          format: String,
          env: 'APP_VERSION',
          default: '1.0.0'
        },
        baseUrl: {
          doc: 'URL base',
          format: String,
          env: 'APP_BASEURL',
          default: 'http://ramos-a247-lb-dev-00-072e4d17845br308.elb.us-east-3.amazonaws.com/'
        }
    },
    log: {
        level: {
          doc: 'The log level',
          format: ['error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly'],
          env: 'LOG_LEVEL',
          default: 'http'
        }
      },
      database: {
        host: {
          doc: 'The database host',
          format: String,
          env: 'DATABASE_HOST',
          default: 'mongodb://0.0.0.0:27017/to_do',
          sensitive: true
        },
        port: {
          doc: 'The database port',
          format: Number,
          env: 'DATABASE_PORT',
          default: 27017
        },
        username: {
          doc: 'The database username',
          format: String,
          env: 'DATABASE_USERNAME',
          default: 'xxxxxxxxxx',
          sensitive: true
        },
        password: {
          doc: 'The database password',
          format: String,
          env: 'DATABASE_PASSWORD',
          default: 'xxxxxxxxxx',
          sensitive: true
        },
        name: {
          doc: 'The database name',
          format: String,
          env: 'DATABASE_NAME',
          default: 'to_do'
        }
    }
})

export default config