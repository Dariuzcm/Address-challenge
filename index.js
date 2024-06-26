import { exec } from 'child_process'

exec('cd ./client-react-addresses && npm run dev', (error, stdout, stderr) => {
  if (error) {
      console.error(`Error al iniciar Cliente: ${error}`);
      return;
  }
  console.log(`Cliente iniciado: ${stdout} ${stderr}`);
}).stdout.on('data', (data) => {
  console.log(`Cliente: ${data}`);
});

exec('cd ./server-adresses && npm run dev', (error, stdout, stderr) => {
  if (error) {
      console.error(`Error al iniciar Servidor: ${error}`);
      return;
  }
  console.log(`Servidor iniciado: ${stdout} ${stderr}`);
}).stdout.on('data', (data) => {
  console.log(`Servidor: ${data}`);
});
