export function isAvailable(day, availability){
    return availability?.find(available => available.weekday === days[day])
}

const days = {
    U: 'SUNDAY',
    M: 'MONDAY',
    T: 'TUESDAY',
    W: 'WEDNESDAY',
    TH: 'THURSDAY',
    F: 'FRIDAY',
    S: 'SATURDAY'
}