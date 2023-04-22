// import createCore from './core';
const createCore = require('./core');

const core = createCore();
    
    try {
        core.star();
        core.stop();

    }catch (error) {
        console.log('[index] Uncaught error!')
        console.log(error);
    }