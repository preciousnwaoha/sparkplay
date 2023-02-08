const cron = require('node-cron');

const signer = require('./signer')

cron.schedule('* * * * *', () => {
  console.log('running a task every minute');
  signer.performUpkeep()
});
