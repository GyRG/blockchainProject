import PKG from './package.json';
import Block from  './src/blockchain/block'

const express = require('express');
const app = express();

app.listen(3000,()=>console.log('escuchando en el puerto 3000'));
app.use(express.static('public'));

const{name,version} = PKG;

console.log(`${name} v${version}`);


 const{genesis} = Block;
 console.log(genesis.toString());


 const block1 = Block.mine(genesis,'d4t4');
 console.log(block1.toString());

 const block2 = Block.mine(block1,'d4t4-2');
 console.log(block2.toString());

 
//  document.getElementById('block-form')
// .addEventListener('submit',function(e){
//   const datos = document.getElementById('datos').value;
//   e.preventDefault;

// } );