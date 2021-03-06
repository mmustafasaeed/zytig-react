/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import path from 'path';
import gaze from 'gaze';
import Promise from 'bluebird';
import fs from './lib/fs';
import pkg from '../package.json';
/**
 * Copies static files such as robots.txt, favicon.ico to the
 * output (build) folder.
 */
async function copy({ watch } = {}) {
  const ncp = Promise.promisify(require('ncp'));

  await Promise.all([
    ncp('node_modules/bootstrap/dist/fonts', 'build/public/fonts'),
    ncp('src/public', 'build/public'),
  ]);
  await Promise.all([
    ncp('src/common/extra/ProgressButtonStyles/css', 'build/public/css'),
    ncp('src/common/extra/ProgressButtonStyles/js', 'build/public/js'),
    ncp('src/common/extra/ProgressButtonStyles/fonts/icomoon', 'build/public/fonts/icomoon'),
  ]);

  await Promise.all([
    ncp('node_modules/font-awesome/css', 'build/public/css'),
    ncp('node_modules/font-awesome/fonts', 'build/public/fonts'),
    ncp('node_modules/hover.css/css/hover-min.css', 'build/public/css/hover-min.css'),
    ncp('node_modules/nprogress/nprogress.css', 'build/public/css/nprogress.css'),
    ncp('node_modules/react-datepicker/dist/react-datepicker.css',
     'build/public/css/react-datepicker.css'),
  ]);
  await Promise.all([
    ncp('node_modules/animate.css/animate.min.css', 'build/public/css/animate.min.css'),
    ncp('src/common/styles', 'build/public/css/CustomStyle'),
    ncp('node_modules/rc-calendar/assets', 'build/public/css/rc-calendar'),
    ncp('node_modules/rc-select/assets', 'build/public/css/rc-select'),
    ncp('node_modules/gemini-scrollbar/gemini-scrollbar.css',
    'build/public/css/gemini-scrollbar.css'),
  ]);

  await fs.writeFile('./build/package.json', JSON.stringify({
    private: true,
    engines: pkg.engines,
    dependencies: pkg.dependencies,
    scripts: {
      start: 'node server.js',
    },
  }, null, 2));

  if (watch) {
    const watcher = await new Promise((resolve, reject) => {
      gaze('src/content/**/*.*', (err, val) => err ? reject(err) : resolve(val));
    });

    const cp = async (file) => {
      const relPath = file.substr(path.join(__dirname, '../src/content/').length);
      await ncp(`src/content/${relPath}`, `build/content/${relPath}`);
    };

    watcher.on('changed', cp);
    watcher.on('added', cp);
  }
}

export default copy;
