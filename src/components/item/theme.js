import magicBackgroundMiddle from './img/headers/header-magic-middle.png'
import magicBackgroundLeft from './img/headers/header-magic-left.png'
import magicBackgroundRight from './img/headers/header-magic-right.png'
import normalBackgroundMiddle from './img/headers/header-normal-middle.png'
import normalBackgroundLeft from './img/headers/header-normal-left.png'
import normalBackgroundRight from './img/headers/header-normal-right.png'
import rareBackgroundMiddle from './img/headers/header-double-rare-middle.png'
import rareBackgroundLeft from './img/headers/header-double-rare-left.png'
import rareBackgroundRight from './img/headers/header-double-rare-right.png'
import uniqueBackgroundMiddle from './img/headers/header-double-unique-middle.png'
import uniqueBackgroundLeft from './img/headers/header-double-unique-left.png'
import uniqueBackgroundRight from './img/headers/header-double-unique-right.png'

const ItemThemes = {
    magic: {
        color: '#8888ff',
        headerBg: {
            middle: magicBackgroundMiddle,
            left: magicBackgroundLeft,
            right: magicBackgroundRight,
        },
    },
    normal: {
        color: '#c8c8c8',
        headerBg: {
            middle: normalBackgroundMiddle,
            left: normalBackgroundLeft,
            right: normalBackgroundRight,
        },
    },
    rare: {
        color: '#ffff77',
        headerBg: {
            middle: rareBackgroundMiddle,
            left: rareBackgroundLeft,
            right: rareBackgroundRight,
        },
    },
    unique: {
        color: '#af6025',
        headerBg: {
            middle: uniqueBackgroundMiddle,
            left: uniqueBackgroundLeft,
            right: uniqueBackgroundRight,
        },
    }
}

export default ItemThemes
