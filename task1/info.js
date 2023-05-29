const fs = require('fs');

function loadContent() {
  const data = fs.readFileSync('./logsInfo.txt');
  const decodedText = data.toString('utf16le');
  return decodedText;
}

function getNumbersOfRequestAndCommands() {
  const info = loadContent();
  const lines = info.split('\n');

  let pingCounter = 0;
  let requestCounter = 0;

  lines.forEach(el => {
    if(el.includes('PING')) {
      pingCounter++
    }
    if(el.includes('seq')) {
      requestCounter++
    }
  })

  console.log('Общее количество запусков команды ping = ', pingCounter)
  console.log('Общее количество отправленых запросов = ', requestCounter)

  return {
    pingCounter,
    requestCounter
  };
}

getNumbersOfRequestAndCommands()

