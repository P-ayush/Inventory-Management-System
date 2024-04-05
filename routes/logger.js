const { createLogger, format, transports } = require('winston');

const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return ` ${level}: ${timestamp} ${message}`;
});

const logger = createLogger({
    format: combine(
    
      timestamp(),
      myFormat
    ),
    transports: [
        new transports.File({
          filename: 'combined.log',
          level: 'info'
        }),
        new transports.File({
          filename: 'errors.log',
          level: 'error'
        })
      ]
  });

module.exports=logger;