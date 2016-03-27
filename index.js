'use strict';

import Twit from 'twit';
import credentials from'./credentials.js';


const defaultOptions = {
};

const twit = new Twit(Object.assign({}, defaultOptions, credentials));

