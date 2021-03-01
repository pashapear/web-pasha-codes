const DEFAULT_FONT_SIZE = 16;

const remify = (...vals) => vals.map(val => `${parseInt(val) / DEFAULT_FONT_SIZE}rem`).join(' ');

export default remify;
