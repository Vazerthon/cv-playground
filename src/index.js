import cv from '/usr/lib/node_modules/opencv4nodejs'; // eslint-disable-line

const log = text => console.log(`=== ${text} ===`); // eslint-disable-line no-console

log('NODE APP RUNNING');

// https://community.risingstack.com/opencv-tutorial-computer-vision-with-node-js/
const matrix = cv.imread('/usr/src/app/dist/test-image.jpg');

const blurSize = new cv.Size(3, 3);
matrix.gaussianBlur(blurSize, 0);
const lowThresh = 0;
const highThresh = 150;
const iterations = 2;

matrix.canny(lowThresh, highThresh);
matrix.dilate(iterations);
const WHITE = [255, 255, 255];
const contours = matrix.findContours();
const allContoursImg = matrix.drawAllContours(contours, WHITE);

allContoursImg.save('/usr/src/app/dist/contours.jpg');

log('DONE');
