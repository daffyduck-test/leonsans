import {
    generateFontData,
    ROTATE_HORIZONTAL,
    ROTATE_VERTICAL,
    ROTATE_NONE,
    getR,
    getCurveR,
    VERTEX_GAP2
} from './util.js';

export const SPECIAL = {
    ' ': generateFontData(
        336, 0, 0,
        0, 0, 0, 0,
        [{
            d: 1,
            v: []
        }]
    ),
    'tofu': generateFontData(
        672, 232, 352,
        0, 0, 0, 0,
        [{
                //c: 'square',
                d: -1,
                v: [
                    ['m', 0, 0, {
                        r: ROTATE_HORIZONTAL
                    }],
                    ['l', 232, 0, {
                        r: ROTATE_HORIZONTAL,
                        f: 1
                    }],
                    ['l', 232, 352, {
                        r: ROTATE_HORIZONTAL,
                        f: 1
                    }],
                    ['l', 0, 352, {
                        r: ROTATE_HORIZONTAL,
                        f: 1
                    }],
                    ['l', 0, 0, {
                        r: ROTATE_HORIZONTAL,
                        p: 1,
                        f: 1,
                        c: 1
                    }],
                ]
            },
            {
                d: 1,
                v: [
                    ['m', 0, 0, {
                        r: ROTATE_HORIZONTAL,
                        p: 1,
                        f: 1
                    }],
                    ['l', 232, 352, {
                        r: ROTATE_NONE
                    }],
                ]
            }
        ]
    ),
    '?': generateFontData(
        520, 190.348, 360,
        0, -5, 0, 0,
        [{
            d: 1,
            v: [
                ['a', 190.348 / 2 - 6, 356],
            ]
        }, {
            d: -1,
            v: [
                ['m', 0, 87.8, {
                    r: getCurveR(0, 87.8, 12, -2.3, 99.1, 0, 0, 87.8, 0)

                }],
                ['b', 0, 87.8, 12, -2.3, 99.1, 0, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 186.2, 2.4, 204.5, 75.2, 180.9, 121.4],
                ['b', 157.3, 167.6, 119.7, 178.3, 97.4, 223.2],
                ['b', 90.5, 237.1, 88.1, 249.8, 88, 260.8, {
                    r: ROTATE_HORIZONTAL,
                    f: 1
                }],
            ]
        }]
    ),
    '¿': generateFontData(
        520, 190.348, 360,
        0, -5, 0, 0,
        [{
            d: 1,
            v: [
                ['a', 190.348 / 2 + 6, 356 - 451 + 188],
            ]
        }, {
            d: -1,
            v: [
                ['m', 190.3, 173.0 + 188, {
                    r: getCurveR(190.3, 173.0 + 188, 178.3, 263.1 + 188, 91.2, 260.8 + 188, 190.3, 173.0 + 188, 0)

                }],
                ['b', 190.3, 173.0 + 188, 178.3, 263.1 + 188, 91.2, 260.8 + 188, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 4.1, 258.4 + 188, -14.2, 185.6 + 188, 9.4, 139.4 + 188],
                ['b', 33.0, 93.2 + 188, 70.6, 82.5 + 188, 92.9, 37.6 + 188],
                ['b', 99.8, 23.7 + 188, 102.2, 11.0 + 188, 102.3, 0.0 + 188, {
                    r: ROTATE_HORIZONTAL,
                    f: 1
                }],
            ]
        }]
    ),
    '!': generateFontData(
        465, 8, 355,
        0, -5, 0, 0,
        [{
            d: 1,
            v: [
                ['a', 8 / 2, 356],
            ]
        }, {
            d: -1,
            v: [
                ['m', 4, 0, {
                    y: 0
                }],
                ['l', 4, 260.8, {
                    f: 1
                }],
            ]
        }]
    ),
    '¡': generateFontData(
        465, 8, 355,
        0, -5, 0, 0,
        [{
            d: 1,
            v: [
                ['a', 8 / 2, 356 - 451 + 188],
            ]
        }, {
            d: -1,
            v: [
                ['m', 4, 0 + 188],
                ['l', 4, 260.8 + 188, {
                    f: 1,
                    y: 0.3
                }],
            ]
        }]
    ),
    '$': generateFontData(
        568, 224, 360,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 212, 51.3, {
                    r: getCurveR(0, 295.4, 17.6, 332.1, 58.3, 360, 110.3, 360, 0),
                    f: 1
                }],
                ['b', 196.5, 20.5, 158.4, 0, 114.8, 0],
                ['b', 57.3, 0, 13.3, 29.8, 12, 84.4],
                ['b', 10.9, 130.6, 47.3, 157.7, 112.4, 173.3],
                ['b', 180.7, 189.6, 224.2, 214.7, 224, 271],
                ['b', 223.8, 329.6, 173.9, 360, 110.3, 360],
                ['b', 58.3, 360, 17.6, 332.1, 0, 295.4, {
                    f: 1
                }],
            ]
        }, {
            d: -1,
            v: [
                ['m', 112, 0 - 30, {
                    y: 0
                }],
                ['l', 112, 360 + 30, {
                    y: 0,
                    f: 1
                }],
            ]
        }]
    ),
    '@': generateFontData(
        820, 343.425, 360,
        0, 0, -30, -30,
        [{
            d: -1,
            v: [
                ['m', 251.9, 92.9, {
                    r: getR(251.9, 92.9, 238.5, 181.7)
                }],
                ['l', 238.5, 181.7, {
                    r: ROTATE_NONE
                }],
                ['b', 227.8, 236, 194.7, 267.2, 143.7, 259.2],
                ['b', 99.1, 252.2, 87.7, 208.5, 90.1, 177.5],
                ['b', 92.5, 148.4, 118.1, 91, 183.3, 99.1],
                ['b', 251, 107.5, 238.5, 181.7, 238.5, 181.7, {
                    r: ROTATE_NONE
                }],
                ['l', 232.5, 221.5],
                ['b', 232.5, 221.5, 227.2, 257.6, 256, 263.6],
                ['b', 284.9, 269.7, 309, 241.3, 309, 241.3, {
                    r: ROTATE_NONE
                }],
                ['b', 309, 241.3, 343.4, 209, 343.4, 146.7],
                ['b', 343.4, 84.3, 297.4, 3.5, 178.6, 0.1],
                ['b', 59.7, -3.4, -5.3, 105.2, 0.3, 203.4],
                ['b', 6.1, 303.7, 93.2, 354.5, 175.5, 359.5],
                ['b', 175.5, 359.5, 246.5, 364.9, 302.7, 339.8, {
                    f: 1
                }],
            ]
        }]
    ),
    '#': generateFontData(
        760, 290 + 24, 352,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 70 + 47, 0, {
                    y: 0,
                    r: getR(70 + 47, 0, 0 + 47, 352)
                }],
                ['l', 0 + 47, 352, {
                    y: 0,
                    f: 1
                }],
            ]
        }, {
            d: -1,
            v: [
                ['m', 70 + 150 + 47, 0, {
                    y: 0,
                    r: getR(70 + 150 + 47, 0, 0 + 150 + 47, 352)
                }],
                ['l', 0 + 150 + 47, 352, {
                    y: 0,
                    f: 1
                }],
            ]
        }, {
            d: -1,
            v: [
                ['m', 0 + 24, 117, {
                    x: 0,
                    r: ROTATE_VERTICAL
                }],
                ['l', 290 + 24, 117, {
                    x: 0,
                    f: 1
                }],
            ]
        }, {
            d: -1,
            v: [
                ['m', 0, 352 - 117, {
                    x: 0,
                    r: ROTATE_VERTICAL
                }],
                ['l', 290, 352 - 117, {
                    x: 0,
                    f: 1
                }],
            ]
        }]
    ),
    '%': generateFontData(
        920, 352 + 36, 360,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 289.1 + 18, 5.1, {
                    x: 0,
                    y: 0,
                    r: getR(289.1 + 18, 5.1, 62.9 + 18, 354.9)
                }],
                ['l', 62.9 + 18, 354.9, {
                    x: 0,
                    y: 0,
                    f: 1
                }],
            ]
        }, {
            d: -1,
            v: [
                ['m', 146, 73, {
                    r: ROTATE_HORIZONTAL,
                    p: 1,
                }],
                ['b', 146, 113.3, 113.3, 146, 73, 146, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 32.7, 146, 0, 113.3, 0, 73, {
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 0, 32.7, 32.7, 0, 73, 0, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 113.3, 0, 146, 32.7, 146, 73, {
                    r: ROTATE_HORIZONTAL,
                    c: 1,
                    f: 1
                }],
            ]
        }, {
            d: -1,
            v: [
                ['m', 352 + 36, 287, {
                    r: ROTATE_HORIZONTAL,
                    p: 1,
                }],
                ['b', 352 + 36, 327.3, 319.3 + 36, 360, 279 + 36, 360, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 238.7 + 36, 360, 206 + 36, 327.3, 206 + 36, 287, {
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 206 + 36, 246.7, 238.7 + 36, 214, 279 + 36, 214, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 319.3 + 36, 214, 352 + 36, 246.7, 352 + 36, 287, {
                    r: ROTATE_HORIZONTAL,
                    c: 1,
                    f: 1
                }],
            ]
        }]
    ),
    '^': generateFontData(
        596, 88 + 88, 352,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 0, 150, {
                    r: getR(0, 150, 88 - VERTEX_GAP2, 0)
                }],
                ['l', 88 - VERTEX_GAP2, 0, {
                    r: getR(0, 150, 88 - VERTEX_GAP2, 0),
                    f: 1
                }],
                ['l', 88 + VERTEX_GAP2, 0, {
                    r: getR(88 + VERTEX_GAP2, 0, 88 + 88, 150),
                    f: 1,
                    v: 1
                }],
                ['l', 88 + 88, 150, {
                    f: 1
                }]
            ]
        }]
    ),
    '·': generateFontData(
        231, 8, 355,
        0, 0, 0, 0,
        [{
            d: 1,
            v: [
                ['a', 8 / 2, 355 - 1.5 - 170],
            ]
        }]
    ),
    '×': generateFontData(
        712, 176.8, 176.8,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 0, 0, {
                    x: 0,
                    y: 0,
                    r: getR(0, 0, 176.8, 176.8),
                }],
                ['l', 176.8, 176.8, {
                    x: 0,
                    y: 0,
                    f: 1
                }],
            ]
        }, {
            d: -1,
            v: [
                ['m', 176.8, 0, {
                    x: 0,
                    y: 0,
                    r: getR(176.8, 0, 0, 176.88),
                }],
                ['l', 0, 176.8, {
                    x: 0,
                    y: 0,
                    f: 1
                }],
            ]
        }]
    ),
    '÷': generateFontData(
        712, 188, 0,
        0, 0, 0, 0,
        [{
                d: 1,
                v: [
                    ['a', (188 / 2), 110],
                ]
            }, {
                d: 1,
                v: [
                    ['a', (188 / 2), -110],
                ]
            },
            {
                d: -1,
                v: [
                    ['m', 0, 0, {
                        x: 0,
                        y: 0,
                        r: ROTATE_VERTICAL
                    }],
                    ['l', 188, 0, {
                        x: 0,
                        y: 0,
                        f: 1
                    }],
                ]
            }
        ]
    ),
    '«': generateFontData(
        896, 310, 236,
        0, 0, 0, 0,
        [{
            d: 1,
            v: [
                ['m', 150, 236, {
                    r: getR(150, 236, 0, 118 + VERTEX_GAP2),
                    f: 1
                }],
                ['l', 0, 118 + VERTEX_GAP2, {
                    r: getR(150, 236, 0, 118 + VERTEX_GAP2),
                    f: 1
                }],
                ['l', 0, 118 - VERTEX_GAP2, {
                    r: getR(0, 118 - VERTEX_GAP2, 150, 0),
                    f: 1,
                    v: 1
                }],
                ['l', 150, 0]
            ]
        }, {
            d: 1,
            v: [
                ['m', 150 + 160, 236, {
                    r: getR(150 + 160, 236, 0 + 160, 118 + VERTEX_GAP2),
                    f: 1
                }],
                ['l', 0 + 160, 118 + VERTEX_GAP2, {
                    r: getR(150 + 160, 236, 0 + 160, 118 + VERTEX_GAP2),
                    f: 1
                }],
                ['l', 0 + 160, 118 - VERTEX_GAP2, {
                    r: getR(0 + 160, 118 - VERTEX_GAP2, 150 + 160, 0),
                    f: 1,
                    v: 1
                }],
                ['l', 150 + 160, 0]
            ]
        }]
    ),
    '»': generateFontData(
        896, 310, 236,
        0, 0, 0, 0,
        [{
            d: 1,
            v: [
                ['m', 0, 236, {
                    r: getR(0, 236, 150, 118 + VERTEX_GAP2),
                    f: 1
                }],
                ['l', 150, 118 + VERTEX_GAP2, {
                    r: getR(0, 236, 0, 118 + VERTEX_GAP2),
                    f: 1
                }],
                ['l', 150, 118 - VERTEX_GAP2, {
                    r: getR(150, 118 - VERTEX_GAP2, 0, 0),
                    f: 1,
                    v: 1
                }],
                ['l', 0, 0]
            ]
        }, {
            d: 1,
            v: [
                ['m', 0 + 160, 236, {
                    r: getR(0 + 160, 236, 150 + 160, 118 + VERTEX_GAP2),
                    f: 1
                }],
                ['l', 150 + 160, 118 + VERTEX_GAP2, {
                    r: getR(0, 236, 0, 118 + VERTEX_GAP2),
                    f: 1
                }],
                ['l', 150 + 160, 118 - VERTEX_GAP2, {
                    r: getR(150 + 160, 118 - VERTEX_GAP2, 0 + 160, 0),
                    f: 1,
                    v: 1
                }],
                ['l', 0 + 160, 0]
            ]
        }]
    ),
    '&': generateFontData(
        660, 259.191, 360,
        0, 0, 0, 0,
        [{
            d: 1,
            v: [
                ['m', 257.9, 355, {
                    x: 0.5,
                    y: 0.5,
                    r: getR(257.9, 355, 52.8, 135.3),
                    f: 1
                }],
                ['l', 52.8, 135.3],
                ['b', 52.8, 135.3, -2.2, 79.5, 46.6, 26.7],
                ['b', 46.6, 26.7, 68.1, 0, 101.8, 0, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 137.2, 0, 174.1, 21.1, 181.2, 65.3],
                ['b', 188.6, 111.7, 142.6, 142.9, 108.9, 162.9],
                ['b', 75.2, 182.8, 40.8, 211.4, 40.8, 211.4, {
                    r: ROTATE_NONE
                }],
                ['b', 35, 217.1, -34.7, 273.7, 22.2, 330.5],
                ['b', 22.2, 330.5, 48.1, 360, 93.4, 360, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 138.6, 360, 212.2, 322, 259.2, 200.5],
            ]
        }]
    ),
    '*': generateFontData(
        558, 183.597, 212,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 91.8, 0, {
                    x: 0,
                    y: 0
                }],
                ['l', 91.8, 212, {
                    x: 0,
                    y: 0,
                    f: 1
                }],
            ]
        }, {
            d: -1,
            v: [
                ['m', 0, 53, {
                    x: 0,
                    y: 0,
                    r: getR(0, 53, 183.6, 159)
                }],
                ['l', 183.6, 159, {
                    x: 0,
                    y: 0,
                    f: 1
                }],
            ]
        }, {
            d: -1,
            v: [
                ['m', 0, 159, {
                    x: 0,
                    y: 0,
                    r: getR(0, 159, 183.6, 53)
                }],
                ['l', 183.6, 53, {
                    x: 0,
                    y: 0,
                    f: 1
                }],
            ]
        }]
    ),
    '+': generateFontData(
        712, 250, 250,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 125, 0, {
                    x: 0,
                    y: 0,
                }],
                ['l', 125, 250, {
                    x: 0,
                    y: 0,
                    f: 1
                }],
            ]
        }, {
            d: -1,
            v: [
                ['m', 0, 125, {
                    x: 0,
                    y: 0,
                    r: ROTATE_VERTICAL
                }],
                ['l', 250, 125, {
                    x: 0,
                    y: 0,
                    f: 1
                }],
            ]
        }]
    ),
    '=': generateFontData(
        712, 216, 86,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 0, 0, {
                    x: 0,
                    y: 0,
                    r: ROTATE_VERTICAL
                }],
                ['l', 216, 0, {
                    x: 0,
                    y: 0,
                    f: 1
                }],
            ]
        }, {
            d: -1,
            v: [
                ['m', 0, 86, {
                    x: 0,
                    y: 0,
                    r: ROTATE_VERTICAL
                }],
                ['l', 216, 86, {
                    x: 0,
                    y: 0,
                    f: 1
                }],
            ]
        }]
    ),
    '-': generateFontData(
        712, 188, 0,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 0, 0, {
                    x: 0,
                    y: 0,
                    r: ROTATE_VERTICAL
                }],
                ['l', 188, 0, {
                    x: 0,
                    y: 0,
                    f: 1
                }],
            ]
        }]
    ),
    '_': generateFontData(
        481, 235, 400,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 0, 400, {
                    x: 0,
                    y: 0,
                    r: ROTATE_VERTICAL
                }],
                ['l', 235, 400, {
                    x: 0,
                    y: 0,
                    f: 1
                }],
            ]
        }]
    ),
    ':': generateFontData(
        231, 8, 355,
        0, 0, 0, 0,
        [{
                d: 1,
                v: [
                    ['a', 8 / 2, 355 - 1.5 - 170],
                ]
            },
            {
                d: 1,
                v: [
                    ['a', 8 / 2, 355 - 1.5],
                ]
            }
        ]
    ),
    ';': generateFontData(
        231, 8, 355,
        0, 0, 0, 0,
        [{
            d: 1,
            v: [
                ['a', 8 / 2, 355 - 1.5 - 170],
            ]
        }, {
            d: -1,
            v: [
                ['m', 8 / 2, 350, {
                    x: 0,
                    y: 2,
                    r: getR(8 / 2, 350, 8 / 2 - 10, 80 + 350)
                }],
                ['l', 8 / 2 - 10, 80 + 350, {
                    x: 0,
                    y: 0.5,
                    f: 1
                }],
            ]
        }]
    ),
    '.': generateFontData(
        231, 8, 355,
        0, 0, 0, 0,
        [{
            d: 1,
            v: [
                ['a', 8 / 2, 355 - 1.5],
            ]
        }]
    ),
    ',': generateFontData(
        231, 10, 355,
        10, 10, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 10, 350, {
                    x: 0,
                    y: 2,
                    r: getR(10, 350, 0, 80 + 350)
                }],
                ['l', 0, 80 + 350, {
                    x: 0,
                    y: 0.5,
                    f: 1
                }],
            ]
        }]
    ),
    "'": generateFontData(
        173, 0, 360,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 0, 0, {
                    x: 0,
                    y: 0
                }],
                ['l', 0, 80, {
                    x: 0,
                    y: 0,
                    f: 1
                }],
            ]
        }]
    ),
    '"': generateFontData(
        297, 60, 360,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 0, 0, {
                    x: -1.5,
                    y: 0
                }],
                ['l', 0, 80, {
                    x: -1.5,
                    y: 0,
                    f: 1
                }],
            ]
        }, {
            d: -1,
            v: [
                ['m', 60, 0, {
                    x: -1.5,
                    y: 0
                }],
                ['l', 60, 80, {
                    x: -1.5,
                    y: 0,
                    f: 1
                }],
            ]
        }]
    ),
    '~': generateFontData(
        731, 199.391, 47.063,
        0, 0, 0, 0,
        [{
            d: 1,
            v: [
                ['m', 199.4, 20.7, {
                    x: 0,
                    y: 0,
                    r: getCurveR(199.4, 20.7, 187.6, 36.6, 168.2, 47.1, 148.2, 47.1, 0),
                    f: 1
                }],
                ['b', 187.6, 36.6, 168.2, 47.1, 148.2, 47.1, {
                    x: 0,
                    y: 0,
                    r: ROTATE_VERTICAL
                }],
                ['b', 129.1, 47.1, 112.1, 36.6, 95.3, 25.5, {
                    x: 0,
                    y: 0
                }],
                ['b', 76.8, 13.2, 59.1, 0, 39.6, 0, {
                    x: 0,
                    y: 0,
                    r: ROTATE_VERTICAL
                }],
                ['b', 22.3, 0, 10.9, 8.9, 0, 20, {
                    x: 0,
                    y: 0
                }],
            ]
        }]
    ),
    '(': generateFontData(
        365, 107.865, 360,
        0, 0, 0, 0,
        [{
            d: 1,
            v: [
                ['m', 107.9, 360, {
                    y: 0.8,
                    r: getCurveR(107.9, 360, 39.7, 321.1, 0, 259.8, 0, 182.9, 0),
                    f: 1
                }],
                ['b', 39.7, 321.1, 0, 259.8, 0, 182.9, {
                    y: 0.8,
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 0, 100.2, 39.7, 38.9, 107.9, 0, {
                    y: 0.8
                }],
            ]
        }]
    ),
    ')': generateFontData(
        365, 107.865, 360,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 0, 0, {
                    y: 0.8,
                    r: getCurveR(0, 0, 68.2, 38.9, 107.9, 100.2, 107.9, 177, 0)
                }],
                ['b', 68.2, 38.9, 107.9, 100.2, 107.9, 177, {
                    y: 0.8,
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 107.9, 259.8, 68.2, 321.1, 0, 360, {
                    y: 0.8,
                    f: 1
                }],
            ]
        }]
    ),
    '{': generateFontData(
        385, 107.865, 360,
        0, 0, 0, 0,
        [{
            d: 1,
            v: [
                ['m', 94.5, 360, {
                    x: -0.5,
                    r: ROTATE_VERTICAL
                }],
                ['l', 77.9, 360, {
                    x: -0.5
                }],
                ['b', 57.4, 360, 37, 343, 37, 310.7, {
                    x: -0.5
                }],
                ['l', 37, 233.4, {
                    x: -0.5
                }],
                ['b', 37, 207.9, 24.3, 183.7, 3.8, 180.7, {
                    x: -0.5,
                    r: ROTATE_VERTICAL
                }],
                ['l', 3.8, 179.8, {
                    x: -0.5,
                    r: ROTATE_VERTICAL,
                    p: 1
                }],
                ['b', 24.3, 176.8, 37, 153.1, 37, 126.7, {
                    x: -0.5
                }],
                ['l', 37, 49.4, {
                    x: -0.5
                }],
                ['b', 37, 17.1, 57.4, 0.1, 77.9, 0.1, {
                    x: -0.5
                }],
                ['l', 94.5, 0.1, {
                    x: -0.5,
                }],
            ]
        }]
    ),
    '}': generateFontData(
        385, 107.865, 360,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 13.4, 0.1, {
                    x: -0.5,
                    r: ROTATE_VERTICAL
                }],
                ['l', 30, 0.1, {
                    x: -0.5
                }],
                ['b', 50.4, 0.1, 70.8, 17.1, 70.8, 49.4, {
                    x: -0.5
                }],
                ['l', 70.8, 126.7, {
                    x: -0.5
                }],
                ['b', 70.8, 153.1, 83.6, 176.8, 104, 179.8, {
                    x: -0.5,
                    r: ROTATE_VERTICAL
                }],
                ['l', 104, 180.7, {
                    x: -0.5,
                    r: ROTATE_VERTICAL,
                    p: 1
                }],
                ['b', 83.6, 183.7, 70.8, 207.9, 70.8, 233.4, {
                    x: -0.5
                }],
                ['l', 70.8, 310.7, {
                    x: -0.5
                }],
                ['b', 70.8, 343, 50.4, 360, 30, 360, {
                    x: -0.5
                }],
                ['l', 13.4, 360, {
                    x: -0.5
                }],
            ]
        }]
    ),
    '[': generateFontData(
        365, 66, 352,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 66, 0, {
                    x: -1,
                    r: ROTATE_VERTICAL
                }],
                ['l', 0, 0, {
                    r: ROTATE_HORIZONTAL,
                    f: 1
                }],
                ['l', 0, 352, {
                    r: ROTATE_HORIZONTAL,
                    f: 1
                }],
                ['l', 66, 352, {
                    x: -1,
                    f: 1
                }],
            ]
        }]
    ),
    ']': generateFontData(
        365, 66, 352,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 0, 0, {
                    x: -1,
                    r: ROTATE_VERTICAL
                }],
                ['l', 66, 0, {
                    r: ROTATE_HORIZONTAL,
                    f: 1
                }],
                ['l', 66, 352, {
                    r: ROTATE_HORIZONTAL,
                    f: 1
                }],
                ['l', 0, 352, {
                    x: -1,
                    f: 1
                }],
            ]
        }]
    ),
    '<': generateFontData(
        423, 90, 352,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 90, 0, {
                    x: -1,
                    y: 0.3,
                    r: getR(90, 0, 0, 176)
                }],
                ['l', 0, 176, {
                    r: ROTATE_HORIZONTAL,
                    f: 1
                }],
                ['l', 90, 352, {
                    x: -1,
                    y: 0.3,
                    f: 1
                }],
            ]
        }]
    ),
    '>': generateFontData(
        423, 90, 352,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 0, 0, {
                    x: -1,
                    y: 0.3,
                    r: getR(0, 0, 90, 176)
                }],
                ['l', 90, 176, {
                    r: ROTATE_HORIZONTAL,
                    f: 1
                }],
                ['l', 0, 352, {
                    x: -1,
                    y: 0.3,
                    f: 1
                }],
            ]
        }]
    ),
    '/': generateFontData(
        433, 130, 352,
        0, 0, 0, 0,
        [{
            d: 1,
            v: [
                ['m', 0, 352, {
                    r: getR(0, 352, 130, 0),
                    f: 1,
                    y: 0
                }],
                ['l', 130, 0, {
                    y: 0
                }]
            ]
        }]
    ),
    'þ': generateFontData(
        600, 232, 338,
        -10, -2, -117, -117,
        [{
            d: -1,
            v: [
                ['m', 0, -106, {
                    y: 0
                }],
                ['l', 0, 116, {
                    r: ROTATE_NONE
                }],
                ['b', 0, 180.1, 51.9, 232, 116, 232, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 180.1, 232, 232, 180.1, 232, 116, {
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 232, 51.9, 180.1, 0, 116, 0, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 51.9, 0, 0, 51.9, 0, 116, {
                    r: ROTATE_HORIZONTAL
                }],
                ['l', 0, 338, {
                    y: 0,
                    f: 1
                }],
            ]
        }]
    ),
    'Þ': generateFontData(
        520, 162, 352,
        -5, -70, 0, 0,
        [{
                d: -1,
                v: [
                    ['m', 0, 0, {
                        x: 0,
                        y: 0,
                        r: ROTATE_HORIZONTAL,
                    }],
                    ['l', 0, 352, {
                        x: 0,
                        y: 0,
                        r: ROTATE_HORIZONTAL,
                        f: 1
                    }],
                ]
            },
            {
                d: 1,
                v: [
                    ['m', 0, 281.6, {
                        x: 0,
                        r: ROTATE_VERTICAL,
                        f: 1,
                        p: 1
                    }],
                    ['l', 57, 281.6, {
                        x: -0.5,
                        r: ROTATE_VERTICAL,
                        f: 1
                    }],
                    ['b', 115.0, 281.6, 162.0, 233.4, 162.0, 175.4, {
                        x: -0.5,
                        r: ROTATE_HORIZONTAL
                    }],
                    ['b', 162.0, 117.4, 115.0, 70.4, 57.0, 70.4, {
                        x: -0.5,
                        r: ROTATE_VERTICAL
                    }],
                    ['l', 0, 70.4, {
                        x: 0,
                        r: ROTATE_VERTICAL,
                        f: 1,
                        p: 1
                    }],
                ]
            }
        ]
    ),
    'ß': generateFontData(
        596, 209, 352,
        -10, -10, 0, 0,
        [{
            d: 1,
            v: [
                ['m', 0.0, 348.3, {
                    r: ROTATE_HORIZONTAL,
                    f: 1,
                    x: 0,
                    y: 0
                }],
                ['l', 0.0, 104.3, {
                    x: 0
                }],
                ['b', 0.0, 46.0, 36.0, 0.0, 98.9, 0.0, {
                    x: 0
                }],
                ['b', 145.2, 0.0, 191.0, 27.9, 191.0, 81.0, {
                    x: 1
                }],
                ['b', 191.0, 110.7, 165.6, 131.8, 151.8, 140.9],
                ['l', 140.0, 148.8],
                ['b', 120.6, 161.7, 110.8, 172.8, 110.8, 185.5],
                ['b', 110.8, 206.7, 131.6, 213.8, 140.0, 217.5],
                //['l', 163.7, 228.6],
                ['b', 190.6, 241.1, 211.0, 262.7, 211.0, 289.6],
                ['b', 211.0, 329.5, 174.8, 352.0, 142.5, 352.0],
                ['b', 97.3, 352.0, 75.2, 319.7, 72.3, 289.3],
            ]
        }]
    ),
};