export function filterProps(props, blackList = null) {
    blackList = blackList || [];
    return Object.entries(props) // eslint-disable-next-line no-unused-vars
        .filter(([name, value]) => !blackList.includes(name)) // eslint-disable-next-line no-unused-vars
        .filter(([name, value]) => value !== undefined)
        .reduce((acc, [propName, propValue]) => {
            acc[propName] = propValue;
            return acc;
        }, {});
}
