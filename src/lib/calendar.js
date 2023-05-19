const getCurrentRotation = () => {
    const now = new Date();

    if (isImbolc(now)) {
        return 'show-imbolc'
    }

    if (isOstara(now)) {
        return 'show-ostara'
    }

    if (isBeltane(now)) {
        return 'show-beltane'
    }

    if (isLitha(now)) {
        return 'show-litha'
    }

    if (isLughnasadh(now)) {
        return 'show-lughnasadh'
    }

    if (isMabon(now)) {
        return 'show-mabon'
    }

    if (isSamhain(now)) {
        return 'show-samhain'
    }

    if (isYule(now)) {
        return 'show-yule';
    }
}

const isImbolc = (date) => {
    return date > new Date(date.getFullYear(), 11, 23) 
           && date <= new Date(date.getFullYear(), 1, 1)
}

const isOstara = (date) => {
    return date > new Date(date.getFullYear(), 1, 1) 
           && date <= new Date(date.getFullYear(), 2, 23)
}

const isBeltane = (date) => {
    return date > new Date(date.getFullYear(), 2, 23) 
           && date <= new Date(date.getFullYear(), 3, 30)
}

const isLitha = (date) => {
    return date > new Date(date.getFullYear(), 3, 30) 
           && date <= new Date(date.getFullYear(), 5, 23)
}

const isLughnasadh = (date) => {
    return date > new Date(date.getFullYear(), 5, 23) 
           && date <= new Date(date.getFullYear(), 7, 1)
}

const isMabon = (date) => {
    return date > new Date(date.getFullYear(), 7, 1) 
           && date <= new Date(date.getFullYear(), 8, 23)
}

const isSamhain = (date) => {
    return date > new Date(date.getFullYear(), 8, 23) 
           && date <= new Date(date.getFullYear(), 9, 31)
}

const isYule = (date) => {
    return date > new Date(date.getFullYear(), 9, 31) 
           && date <= new Date(date.getFullYear(), 11, 23)
}

export default getCurrentRotation;