import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';
import config from './webpack.config';

const app = express();
const port = '3000';
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
})

