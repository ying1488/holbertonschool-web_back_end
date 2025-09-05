export default function cleanSet(set, startString){
    const modifiedArr = [];

    if(!startString || typeof startString !== 'string'){
        return '';
    }

    for (const value of set){
        if (value.startsWith(startString)){
            const newValue = value.slice(startString.length);
            modifiedArr.push(newValue);
        }
    }
    return modifiedArr.join('-')
}