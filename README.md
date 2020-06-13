# node-basis
Simple wrapper around a [basis-universal](https://github.com/BinomialLLC/basis_universal) executable.   

Basis Universal is a "supercompressed" GPU texture and texture video compression system that outputs a highly compressed intermediate file format (.basis) that can be quickly transcoded to a wide variety of GPU texture compression formats.

[Three.js doc page on basis texture loader](https://threejs.org/docs/#examples/en/loaders/BasisTextureLoader)

## install

`npm install node-basis -g`

## usage

`node-basis -file myFile.png`

## more options

All arguments are forwarded to the basis-universal API.   
Type `node-basis` without argument to get documentation.
