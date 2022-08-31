function unix(dt, type) {
    const milliseconds = dt * 1000;
    const data = new Date(milliseconds);
    let result = type == 'weekday' ? data.toLocaleString("ru-RU", {weekday: "long"}) : type == 'moonth' ? data.toLocaleString("ru-RU", {month: "long"}) :
    type == 'day' ? data.toLocaleString("ru-RU", {day: "numeric"}) :
    type == 'hours' ? data.getHours():
    type == 'min' ? data.getMinutes():''
    return result;
}

export default unix